/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleCountAggregateInputType>;
export const RoleCountAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.literal(true).optional(),
        name: z.literal(true).optional(),
        _all: z.literal(true).optional(),
    })
    .strict() as SchemaType;
