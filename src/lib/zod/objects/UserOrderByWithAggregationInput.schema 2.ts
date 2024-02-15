/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserCountOrderByAggregateInputObjectSchema } from './UserCountOrderByAggregateInput.schema';
import { UserMaxOrderByAggregateInputObjectSchema } from './UserMaxOrderByAggregateInput.schema';
import { UserMinOrderByAggregateInputObjectSchema } from './UserMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserOrderByWithAggregationInput>;
export const UserOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        netid: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        student_number: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        email: z.lazy(() => SortOrderSchema).optional(),
        emailVerified: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        password: z.lazy(() => SortOrderSchema).optional(),
        image: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        _count: z.lazy(() => UserCountOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => UserMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => UserMinOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
