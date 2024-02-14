/* eslint-disable */
import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunWhereInput>;
export const CodeRunWhereInputObjectSchema: SchemaType = z
    .object({
        AND: z
            .union([z.lazy(() => CodeRunWhereInputObjectSchema), z.lazy(() => CodeRunWhereInputObjectSchema).array()])
            .optional(),
        OR: z
            .lazy(() => CodeRunWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => CodeRunWhereInputObjectSchema), z.lazy(() => CodeRunWhereInputObjectSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
        time: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        createdById: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        createdBy: z
            .union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)])
            .optional(),
    })
    .strict() as SchemaType;
