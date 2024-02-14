/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BytesFieldUpdateOperationsInputObjectSchema } from './BytesFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonUpdateManyMutationInput>;
export const LessonUpdateManyMutationInputObjectSchema: SchemaType = z
    .object({
        id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        content: z
            .union([z.instanceof(Uint8Array), z.lazy(() => BytesFieldUpdateOperationsInputObjectSchema)])
            .optional(),
    })
    .strict() as SchemaType;
