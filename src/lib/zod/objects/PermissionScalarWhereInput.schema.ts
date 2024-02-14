/* eslint-disable */
import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionScalarWhereInput>;
export const PermissionScalarWhereInputObjectSchema: SchemaType = z
    .object({
        AND: z
            .union([
                z.lazy(() => PermissionScalarWhereInputObjectSchema),
                z.lazy(() => PermissionScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => PermissionScalarWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => PermissionScalarWhereInputObjectSchema),
                z.lazy(() => PermissionScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
        name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    })
    .strict() as SchemaType;
