/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PermissionOrderByRelationAggregateInputObjectSchema } from './PermissionOrderByRelationAggregateInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleOrderByWithRelationInput>;
export const RoleOrderByWithRelationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        permissions: z.lazy(() => PermissionOrderByRelationAggregateInputObjectSchema).optional(),
        users: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
