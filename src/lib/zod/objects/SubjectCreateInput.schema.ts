/* eslint-disable */
import { z } from 'zod';
import { LessonCreateNestedManyWithoutSubjectInputObjectSchema } from './LessonCreateNestedManyWithoutSubjectInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectCreateInput>;
export const SubjectCreateInputObjectSchema: SchemaType = z
    .object({
        name: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        lessons: z.lazy(() => LessonCreateNestedManyWithoutSubjectInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
