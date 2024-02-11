import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    // Create roles.
    await prisma.role.create({
        data: { name: "ADMIN" }
    });
    await prisma.role.create({
        data: { name: "AUTHOR" }
    });
    await prisma.role.create({
        data: { name: "USER" }
    });

    // Subject permissions.
    await prisma.permission.create({
        data: { id: "create_subject", roleName: "ADMIN" }
    });
    await prisma.permission.create({
        data: { id: "create_subject", roleName: "AUTHOR" }
    });
    await prisma.permission.create({
        data: { id: "modify_subject", roleName: "ADMIN" }
    });

    // Lesson permissions.
    await prisma.permission.create({
        data: { id: "create_lesson", roleName: "AUTHOR" }
    });
    await prisma.permission.create({
        data: { id: "create_lesson", roleName: "ADMIN" }
    });
    await prisma.permission.create({
        data: { id: "modify_lesson", roleName: "ADMIN" }
    });

    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
        throw new Error("Please add ADMIN_EMAIL and ADMIN_PASSWORD to environment.");
    }

    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(process.env.ADMIN_PASSWORD, salt);

    // Create default administrator.
    await prisma.user.update({
        data: {
            password: hash,
        },
        where: { email: "ejrsilver@gmail.com" }
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
