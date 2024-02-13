import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client/extension";
import {
    getServerSession,
    type DefaultSession,
    type NextAuthOptions,
    DefaultUser,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "~/server/db";
import { compare } from 'bcryptjs';
import { Role } from "@prisma/client";
import { DefaultJWT } from "next-auth/jwt";

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
                const user = await db.user.findFirst({ where: { id: token.sub! }, include: { roles: { include: { permissions: true } } } });
                session.user.roles = user?.roles;
            }
            return session;
        },
    },
    adapter: PrismaAdapter(db),
    providers: [
        CredentialsProvider({
            credentials: {
                email: { type: 'email' },
                password: { type: 'password' },
            },
            authorize: authorize(db),
        }),
    ],
};

function authorize(prisma: PrismaClient) {
    return async (creds: Record<'email' | 'password', string> | undefined) => {
        if (!creds) throw new Error('Missing credentials.');
        if (!creds.email) throw new Error('Missing email.');
        if (!creds.password) throw new Error('Missing password.');

        const user = await prisma.user.findFirst({
            where: { email: creds.email },
        });

        if (!user || !user.password) return null;

        const valid = await compare(creds.password, user.password);

        if (!valid) return null;

        return user;
    }
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
