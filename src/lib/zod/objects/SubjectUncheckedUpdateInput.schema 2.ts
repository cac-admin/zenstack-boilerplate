/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { LessonUncheckedUpdateManyWithoutSubjectNestedInputObjectSchema } from './LessonUncheckedUpdateManyWithoutSubjectNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectUncheckedUpdateInput>;
export const SubjectUncheckedUpdateInputObjectSchema: SchemaType = z
    .object({
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        createdAt: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutSubjectNestedInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
