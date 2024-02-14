/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BytesFieldUpdateOperationsInputObjectSchema } from './BytesFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutLessonsNestedInputObjectSchema } from './UserUpdateOneWithoutLessonsNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonUpdateWithoutSubjectInput>;
export const LessonUpdateWithoutSubjectInputObjectSchema: SchemaType = z
    .object({
        id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        content: z
            .union([z.instanceof(Uint8Array), z.lazy(() => BytesFieldUpdateOperationsInputObjectSchema)])
            .optional(),
        author: z.lazy(() => UserUpdateOneWithoutLessonsNestedInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
