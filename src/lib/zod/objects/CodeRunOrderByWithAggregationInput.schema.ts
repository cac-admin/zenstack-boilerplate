/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CodeRunCountOrderByAggregateInputObjectSchema } from './CodeRunCountOrderByAggregateInput.schema';
import { CodeRunAvgOrderByAggregateInputObjectSchema } from './CodeRunAvgOrderByAggregateInput.schema';
import { CodeRunMaxOrderByAggregateInputObjectSchema } from './CodeRunMaxOrderByAggregateInput.schema';
import { CodeRunMinOrderByAggregateInputObjectSchema } from './CodeRunMinOrderByAggregateInput.schema';
import { CodeRunSumOrderByAggregateInputObjectSchema } from './CodeRunSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunOrderByWithAggregationInput>;
export const CodeRunOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        time: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        createdById: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => CodeRunCountOrderByAggregateInputObjectSchema).optional(),
        _avg: z.lazy(() => CodeRunAvgOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => CodeRunMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => CodeRunMinOrderByAggregateInputObjectSchema).optional(),
        _sum: z.lazy(() => CodeRunSumOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
