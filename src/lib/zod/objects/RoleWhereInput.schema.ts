/* eslint-disable */
import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { PermissionListRelationFilterObjectSchema } from './PermissionListRelationFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleWhereInput>;
export const RoleWhereInputObjectSchema: SchemaType = z
    .object({
        AND: z
            .union([z.lazy(() => RoleWhereInputObjectSchema), z.lazy(() => RoleWhereInputObjectSchema).array()])
            .optional(),
        OR: z
            .lazy(() => RoleWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => RoleWhereInputObjectSchema), z.lazy(() => RoleWhereInputObjectSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
        name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        permissions: z.lazy(() => PermissionListRelationFilterObjectSchema).optional(),
        users: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
