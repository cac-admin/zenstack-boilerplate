/* eslint-disable */
import { z } from 'zod';
import { LessonWhereInputObjectSchema } from './LessonWhereInput.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BytesFilterObjectSchema } from './BytesFilter.schema';
import { UserNullableRelationFilterObjectSchema } from './UserNullableRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { SubjectRelationFilterObjectSchema } from './SubjectRelationFilter.schema';
import { SubjectWhereInputObjectSchema } from './SubjectWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonWhereUniqueInput>;
export const LessonWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        AND: z
            .union([z.lazy(() => LessonWhereInputObjectSchema), z.lazy(() => LessonWhereInputObjectSchema).array()])
            .optional(),
        OR: z
            .lazy(() => LessonWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => LessonWhereInputObjectSchema), z.lazy(() => LessonWhereInputObjectSchema).array()])
            .optional(),
        subName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        authorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        content: z.union([z.lazy(() => BytesFilterObjectSchema), z.instanceof(Uint8Array)]).optional(),
        author: z
            .union([
                z.lazy(() => UserNullableRelationFilterObjectSchema),
                z.lazy(() => UserWhereInputObjectSchema),
                z.null(),
            ])
            .optional()
            .nullable(),
        subject: z
            .union([z.lazy(() => SubjectRelationFilterObjectSchema), z.lazy(() => SubjectWhereInputObjectSchema)])
            .optional(),
    })
    .strict() as SchemaType;
