/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunMaxAggregateInputType>;
export const CodeRunMaxAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.literal(true).optional(),
        time: z.literal(true).optional(),
        createdAt: z.literal(true).optional(),
        createdById: z.literal(true).optional(),
    })
    .strict() as SchemaType;
