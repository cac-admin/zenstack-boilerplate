/* eslint-disable */
import { z } from 'zod';
import { RoleWhereInputObjectSchema } from './RoleWhereInput.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { PermissionListRelationFilterObjectSchema } from './PermissionListRelationFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleWhereUniqueInput>;
export const RoleWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.number().optional(),
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
        name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        permissions: z.lazy(() => PermissionListRelationFilterObjectSchema).optional(),
        users: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
