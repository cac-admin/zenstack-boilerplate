/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoleCountOrderByAggregateInputObjectSchema } from './RoleCountOrderByAggregateInput.schema';
import { RoleAvgOrderByAggregateInputObjectSchema } from './RoleAvgOrderByAggregateInput.schema';
import { RoleMaxOrderByAggregateInputObjectSchema } from './RoleMaxOrderByAggregateInput.schema';
import { RoleMinOrderByAggregateInputObjectSchema } from './RoleMinOrderByAggregateInput.schema';
import { RoleSumOrderByAggregateInputObjectSchema } from './RoleSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleOrderByWithAggregationInput>;
export const RoleOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => RoleCountOrderByAggregateInputObjectSchema).optional(),
        _avg: z.lazy(() => RoleAvgOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => RoleMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => RoleMinOrderByAggregateInputObjectSchema).optional(),
        _sum: z.lazy(() => RoleSumOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
