/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { LessonListRelationFilterObjectSchema } from './LessonListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectWhereInput>;
export const SubjectWhereInputObjectSchema: SchemaType = z
    .object({
        AND: z
            .union([z.lazy(() => SubjectWhereInputObjectSchema), z.lazy(() => SubjectWhereInputObjectSchema).array()])
            .optional(),
        OR: z
            .lazy(() => SubjectWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => SubjectWhereInputObjectSchema), z.lazy(() => SubjectWhereInputObjectSchema).array()])
            .optional(),
        name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        lessons: z.lazy(() => LessonListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
