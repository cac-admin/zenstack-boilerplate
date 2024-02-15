/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserMaxOrderByAggregateInput>;
export const UserMaxOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        netid: z.lazy(() => SortOrderSchema).optional(),
        student_number: z.lazy(() => SortOrderSchema).optional(),
        email: z.lazy(() => SortOrderSchema).optional(),
        emailVerified: z.lazy(() => SortOrderSchema).optional(),
        password: z.lazy(() => SortOrderSchema).optional(),
        image: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
