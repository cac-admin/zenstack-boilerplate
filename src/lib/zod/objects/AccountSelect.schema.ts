/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.AccountSelect>;
export const AccountSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        userId: z.boolean().optional(),
        type: z.boolean().optional(),
        provider: z.boolean().optional(),
        providerAccountId: z.boolean().optional(),
        refresh_token: z.boolean().optional(),
        access_token: z.boolean().optional(),
        expires_at: z.boolean().optional(),
        token_type: z.boolean().optional(),
        scope: z.boolean().optional(),
        id_token: z.boolean().optional(),
        session_state: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
