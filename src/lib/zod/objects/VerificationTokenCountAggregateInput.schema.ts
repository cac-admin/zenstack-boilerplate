/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VerificationTokenCountAggregateInputType>;
export const VerificationTokenCountAggregateInputObjectSchema: SchemaType = z
    .object({
        identifier: z.literal(true).optional(),
        token: z.literal(true).optional(),
        expires: z.literal(true).optional(),
        _all: z.literal(true).optional(),
    })
    .strict() as SchemaType;
