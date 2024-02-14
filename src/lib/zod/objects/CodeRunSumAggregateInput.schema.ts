/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunSumAggregateInputType>;
export const CodeRunSumAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.literal(true).optional(),
        time: z.literal(true).optional(),
    })
    .strict() as SchemaType;
