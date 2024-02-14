/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionAvgAggregateInputType>;
export const PermissionAvgAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.literal(true).optional(),
    })
    .strict() as SchemaType;
