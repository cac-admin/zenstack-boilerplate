/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionSumAggregateInputType>;
export const PermissionSumAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.literal(true).optional(),
    })
    .strict() as SchemaType;
