import { NextRequestHandler } from '@zenstackhq/server/next';
import { enhance } from '@zenstackhq/runtime';
import { getServerAuthSession } from '~/server/auth';
import { prisma } from '~/server/db';

async function getPrisma() {
    const session = await getServerAuthSession();
    return enhance(prisma, { user: session?.user });
}

const handler = NextRequestHandler({ getPrisma, useAppDir: true });

export {
    handler as GET,
    handler as POST,
    handler as PUT,
    handler as PATCH,
    handler as DELETE,
};
