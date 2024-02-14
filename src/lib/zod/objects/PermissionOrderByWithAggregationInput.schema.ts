/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PermissionCountOrderByAggregateInputObjectSchema } from './PermissionCountOrderByAggregateInput.schema';
import { PermissionAvgOrderByAggregateInputObjectSchema } from './PermissionAvgOrderByAggregateInput.schema';
import { PermissionMaxOrderByAggregateInputObjectSchema } from './PermissionMaxOrderByAggregateInput.schema';
import { PermissionMinOrderByAggregateInputObjectSchema } from './PermissionMinOrderByAggregateInput.schema';
import { PermissionSumOrderByAggregateInputObjectSchema } from './PermissionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionOrderByWithAggregationInput>;
export const PermissionOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => PermissionCountOrderByAggregateInputObjectSchema).optional(),
        _avg: z.lazy(() => PermissionAvgOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => PermissionMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => PermissionMinOrderByAggregateInputObjectSchema).optional(),
        _sum: z.lazy(() => PermissionSumOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
