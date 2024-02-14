/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutLessonsInputObjectSchema } from './UserCreateNestedOneWithoutLessonsInput.schema';
import { SubjectCreateNestedOneWithoutLessonsInputObjectSchema } from './SubjectCreateNestedOneWithoutLessonsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonCreateInput>;
export const LessonCreateInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        content: z.instanceof(Uint8Array),
        author: z.lazy(() => UserCreateNestedOneWithoutLessonsInputObjectSchema).optional(),
        subject: z.lazy(() => SubjectCreateNestedOneWithoutLessonsInputObjectSchema),
    })
    .strict() as SchemaType;
