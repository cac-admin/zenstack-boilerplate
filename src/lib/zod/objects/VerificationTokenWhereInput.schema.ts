/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VerificationTokenWhereInput>;
export const VerificationTokenWhereInputObjectSchema: SchemaType = z
    .object({
        AND: z
            .union([
                z.lazy(() => VerificationTokenWhereInputObjectSchema),
                z.lazy(() => VerificationTokenWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => VerificationTokenWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => VerificationTokenWhereInputObjectSchema),
                z.lazy(() => VerificationTokenWhereInputObjectSchema).array(),
            ])
            .optional(),
        identifier: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        expires: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
    })
    .strict() as SchemaType;
