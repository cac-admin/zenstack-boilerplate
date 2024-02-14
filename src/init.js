import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    // Subject permissions.
    const subCreate = await prisma.permission.create({
        data: { name: "create_subject" }
    });
    const subMod = await prisma.permission.create({
        data: { name: "modify_subject" }
    });

    // Lesson permissions.
    const lessonCreate = await prisma.permission.create({
        data: { name: "create_lesson" }
    });
    const lessonMod = await prisma.permission.create({
        data: { name: "modify_lesson" }
    });

    // Role permissions.
    const roleCreate = await prisma.permission.create({
        data: { name: "create_role" }
    });
    const roleMod = await prisma.permission.create({
        data: { name: "modify_role" }
    });

    // Create roles.
    const admin = await prisma.role.create({
        data: {
            name: "admin",
            permissions: {
                connect: [
                    { id: subCreate.id },
                    { id: subMod.id },
                    { id: roleCreate.id },
                    { id: roleMod.id },
                    { id: lessonCreate.id },
                    { id: lessonMod.id },
                ]
            }
        }
    });
    await prisma.role.create({
        data: {
            name: "author",
            permissions: {
                connect: [
                    { id: subCreate.id },
                    { id: lessonCreate.id },
                ]
            }
        }
    });

    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
        throw new Error("Please add ADMIN_EMAIL and ADMIN_PASSWORD to environment.");
    }
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(process.env.ADMIN_PASSWORD, salt);

    // Create default administrator.
    await prisma.user.create({
        data: {
            email: process.env.ADMIN_EMAIL,
            password: hash,
            roles: { connect: { id: admin.id } }
        },
        include: { roles: { include: { permissions: true } } },
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
