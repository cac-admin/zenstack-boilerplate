/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BigIntFieldUpdateOperationsInput>;
export const BigIntFieldUpdateOperationsInputObjectSchema: SchemaType = z
    .object({
        set: z.bigint().optional(),
        increment: z.bigint().optional(),
        decrement: z.bigint().optional(),
        multiply: z.bigint().optional(),
        divide: z.bigint().optional(),
    })
    .strict() as SchemaType;
