/* eslint-disable */
import { z } from 'zod';
import { SubjectCreateNestedOneWithoutLessonsInputObjectSchema } from './SubjectCreateNestedOneWithoutLessonsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonCreateWithoutAuthorInput>;
export const LessonCreateWithoutAuthorInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        content: z.instanceof(Uint8Array),
        subject: z.lazy(() => SubjectCreateNestedOneWithoutLessonsInputObjectSchema),
    })
    .strict() as SchemaType;
