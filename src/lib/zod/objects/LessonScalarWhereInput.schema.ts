/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BytesFilterObjectSchema } from './BytesFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonScalarWhereInput>;
export const LessonScalarWhereInputObjectSchema: SchemaType = z
    .object({
        AND: z
            .union([
                z.lazy(() => LessonScalarWhereInputObjectSchema),
                z.lazy(() => LessonScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => LessonScalarWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => LessonScalarWhereInputObjectSchema),
                z.lazy(() => LessonScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        subName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        authorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        content: z.union([z.lazy(() => BytesFilterObjectSchema), z.instanceof(Uint8Array)]).optional(),
    })
    .strict() as SchemaType;
