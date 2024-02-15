/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectCountAggregateInputType>;
export const SubjectCountAggregateInputObjectSchema: SchemaType = z
    .object({
        name: z.literal(true).optional(),
        createdAt: z.literal(true).optional(),
        _all: z.literal(true).optional(),
    })
    .strict() as SchemaType;
