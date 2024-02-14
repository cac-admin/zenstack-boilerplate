/* eslint-disable */
import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { RoleListRelationFilterObjectSchema } from './RoleListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionWhereInput>;
export const PermissionWhereInputObjectSchema: SchemaType = z
    .object({
        AND: z
            .union([
                z.lazy(() => PermissionWhereInputObjectSchema),
                z.lazy(() => PermissionWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => PermissionWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => PermissionWhereInputObjectSchema),
                z.lazy(() => PermissionWhereInputObjectSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
        name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        roles: z.lazy(() => RoleListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
