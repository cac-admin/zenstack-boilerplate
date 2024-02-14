/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput>;
export const NullableIntFieldUpdateOperationsInputObjectSchema: SchemaType = z
    .object({
        set: z.union([z.number(), z.null()]).optional().nullable(),
        increment: z.number().optional(),
        decrement: z.number().optional(),
        multiply: z.number().optional(),
        divide: z.number().optional(),
    })
    .strict() as SchemaType;
