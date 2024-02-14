/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleMinAggregateInputType>;
export const RoleMinAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.literal(true).optional(),
        name: z.literal(true).optional(),
    })
    .strict() as SchemaType;
