/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutLessonsInputObjectSchema } from './UserCreateNestedOneWithoutLessonsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonCreateWithoutSubjectInput>;
export const LessonCreateWithoutSubjectInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        content: z.instanceof(Uint8Array),
        author: z.lazy(() => UserCreateNestedOneWithoutLessonsInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
