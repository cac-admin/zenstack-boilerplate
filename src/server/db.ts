import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";

import { env } from "~/env";
import { createClient } from "@libsql/client";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

const libsql = createClient({
    url: `${env.TURSO_DATABASE_URL}`,
    authToken: `${env.TURSO_AUTH_TOKEN}`,
});

const adapter = new PrismaLibSQL(libsql);
export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter,
        log:
            env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    });

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
