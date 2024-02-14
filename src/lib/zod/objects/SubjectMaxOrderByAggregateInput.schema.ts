/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectMaxOrderByAggregateInput>;
export const SubjectMaxOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        name: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
