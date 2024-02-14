/* eslint-disable */
import { z } from 'zod';
import { LessonWhereInputObjectSchema } from './LessonWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonListRelationFilter>;
export const LessonListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => LessonWhereInputObjectSchema).optional(),
        some: z.lazy(() => LessonWhereInputObjectSchema).optional(),
        none: z.lazy(() => LessonWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
