/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleSumAggregateInputType>;
export const RoleSumAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.literal(true).optional(),
    })
    .strict() as SchemaType;
