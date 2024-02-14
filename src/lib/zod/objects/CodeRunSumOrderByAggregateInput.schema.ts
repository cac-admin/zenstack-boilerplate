/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunSumOrderByAggregateInput>;
export const CodeRunSumOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        time: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
