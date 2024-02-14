/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LessonCountOrderByAggregateInputObjectSchema } from './LessonCountOrderByAggregateInput.schema';
import { LessonMaxOrderByAggregateInputObjectSchema } from './LessonMaxOrderByAggregateInput.schema';
import { LessonMinOrderByAggregateInputObjectSchema } from './LessonMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonOrderByWithAggregationInput>;
export const LessonOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        subName: z.lazy(() => SortOrderSchema).optional(),
        authorId: z.lazy(() => SortOrderSchema).optional(),
        content: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => LessonCountOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => LessonMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => LessonMinOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
