/* eslint-disable */
import { z } from 'zod';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedBytesFilterObjectSchema } from './NestedBytesFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.NestedBytesWithAggregatesFilter>;
export const NestedBytesWithAggregatesFilterObjectSchema: SchemaType = z
    .object({
        equals: z.instanceof(Uint8Array).optional(),
        in: z.instanceof(Uint8Array).array().optional(),
        notIn: z.instanceof(Uint8Array).array().optional(),
        not: z.union([z.instanceof(Uint8Array), z.lazy(() => NestedBytesWithAggregatesFilterObjectSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
        _min: z.lazy(() => NestedBytesFilterObjectSchema).optional(),
        _max: z.lazy(() => NestedBytesFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
