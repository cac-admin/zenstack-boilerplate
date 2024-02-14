/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.AccountCountAggregateInputType>;
export const AccountCountAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.literal(true).optional(),
        userId: z.literal(true).optional(),
        type: z.literal(true).optional(),
        provider: z.literal(true).optional(),
        providerAccountId: z.literal(true).optional(),
        refresh_token: z.literal(true).optional(),
        access_token: z.literal(true).optional(),
        expires_at: z.literal(true).optional(),
        token_type: z.literal(true).optional(),
        scope: z.literal(true).optional(),
        id_token: z.literal(true).optional(),
        session_state: z.literal(true).optional(),
        _all: z.literal(true).optional(),
    })
    .strict() as SchemaType;
