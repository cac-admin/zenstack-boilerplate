/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.NestedBigIntFilter>;
export const NestedBigIntFilterObjectSchema: SchemaType = z
    .object({
        equals: z.bigint().optional(),
        in: z.bigint().array().optional(),
        notIn: z.bigint().array().optional(),
        lt: z.bigint().optional(),
        lte: z.bigint().optional(),
        gt: z.bigint().optional(),
        gte: z.bigint().optional(),
        not: z.union([z.bigint(), z.lazy(() => NestedBigIntFilterObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
