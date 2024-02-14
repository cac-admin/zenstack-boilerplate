/* eslint-disable */
import { z } from 'zod';
import { BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutCodeRunsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCodeRunsNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunUpdateInput>;
export const CodeRunUpdateInputObjectSchema: SchemaType = z
    .object({
        time: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
        createdAt: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        createdBy: z.lazy(() => UserUpdateOneRequiredWithoutCodeRunsNestedInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
