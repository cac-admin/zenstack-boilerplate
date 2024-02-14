/* eslint-disable */
import { z } from 'zod';
import { NestedBytesFilterObjectSchema } from './NestedBytesFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BytesFilter>;
export const BytesFilterObjectSchema: SchemaType = z
    .object({
        equals: z.instanceof(Uint8Array).optional(),
        in: z.instanceof(Uint8Array).array().optional(),
        notIn: z.instanceof(Uint8Array).array().optional(),
        not: z.union([z.instanceof(Uint8Array), z.lazy(() => NestedBytesFilterObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
