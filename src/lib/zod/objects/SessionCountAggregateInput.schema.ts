/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SessionCountAggregateInputType>;
export const SessionCountAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.literal(true).optional(),
        sessionToken: z.literal(true).optional(),
        userId: z.literal(true).optional(),
        expires: z.literal(true).optional(),
        _all: z.literal(true).optional(),
    })
    .strict() as SchemaType;
