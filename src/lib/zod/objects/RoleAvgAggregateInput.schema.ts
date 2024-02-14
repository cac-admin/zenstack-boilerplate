/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleAvgAggregateInputType>;
export const RoleAvgAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.literal(true).optional(),
    })
    .strict() as SchemaType;
