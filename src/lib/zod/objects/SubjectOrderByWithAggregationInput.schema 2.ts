/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SubjectCountOrderByAggregateInputObjectSchema } from './SubjectCountOrderByAggregateInput.schema';
import { SubjectMaxOrderByAggregateInputObjectSchema } from './SubjectMaxOrderByAggregateInput.schema';
import { SubjectMinOrderByAggregateInputObjectSchema } from './SubjectMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectOrderByWithAggregationInput>;
export const SubjectOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        name: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => SubjectCountOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => SubjectMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => SubjectMinOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
