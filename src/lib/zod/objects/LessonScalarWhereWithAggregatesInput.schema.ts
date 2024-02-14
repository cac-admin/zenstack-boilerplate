/* eslint-disable */
import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BytesWithAggregatesFilterObjectSchema } from './BytesWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonScalarWhereWithAggregatesInput>;
export const LessonScalarWhereWithAggregatesInputObjectSchema: SchemaType = z
    .object({
        AND: z
            .union([
                z.lazy(() => LessonScalarWhereWithAggregatesInputObjectSchema),
                z.lazy(() => LessonScalarWhereWithAggregatesInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => LessonScalarWhereWithAggregatesInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => LessonScalarWhereWithAggregatesInputObjectSchema),
                z.lazy(() => LessonScalarWhereWithAggregatesInputObjectSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        subName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        authorId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        content: z.union([z.lazy(() => BytesWithAggregatesFilterObjectSchema), z.instanceof(Uint8Array)]).optional(),
    })
    .strict() as SchemaType;
