/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VerificationTokenCountOrderByAggregateInputObjectSchema } from './VerificationTokenCountOrderByAggregateInput.schema';
import { VerificationTokenMaxOrderByAggregateInputObjectSchema } from './VerificationTokenMaxOrderByAggregateInput.schema';
import { VerificationTokenMinOrderByAggregateInputObjectSchema } from './VerificationTokenMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VerificationTokenOrderByWithAggregationInput>;
export const VerificationTokenOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        identifier: z.lazy(() => SortOrderSchema).optional(),
        token: z.lazy(() => SortOrderSchema).optional(),
        expires: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => VerificationTokenCountOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => VerificationTokenMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => VerificationTokenMinOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
