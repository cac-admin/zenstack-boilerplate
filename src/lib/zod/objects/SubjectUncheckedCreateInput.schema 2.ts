/* eslint-disable */
import { z } from 'zod';
import { LessonUncheckedCreateNestedManyWithoutSubjectInputObjectSchema } from './LessonUncheckedCreateNestedManyWithoutSubjectInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectUncheckedCreateInput>;
export const SubjectUncheckedCreateInputObjectSchema: SchemaType = z
    .object({
        name: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutSubjectInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
