import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
    getServerSession,
    type DefaultSession,
    type NextAuthOptions,
    DefaultUser,
} from "next-auth";
import { prisma } from "~/server/db";
import EmailProvider from "next-auth/providers/email";
import { compare } from 'bcryptjs';
import { PrismaClient, Role } from "@prisma/client";
import { env } from "~/env";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string;
            roles?: Role[];
        } & DefaultSession["user"];
    }

    interface User extends DefaultUser {
        roles?: Role[] & DefaultUser
    }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.sub!;
                const user = await prisma.user.findFirst({ where: { id: token.sub! }, include: { roles: { include: { permissions: true } } } });
                session.user.roles = user?.roles;
            }
            return session;
        },
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        EmailProvider({
            server: {
                host: env.EMAIL_HOST,
                port: env.EMAIL_PORT,
                auth: {
                    user: env.EMAIL_USER,
                    pass: env.RESEND_KEY
                },
            },
            from: env.EMAIL_FROM
        })
    ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
