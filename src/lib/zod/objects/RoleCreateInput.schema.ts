/* eslint-disable */
import { z } from 'zod';
import { PermissionCreateNestedManyWithoutRolesInputObjectSchema } from './PermissionCreateNestedManyWithoutRolesInput.schema';
import { UserCreateNestedManyWithoutRolesInputObjectSchema } from './UserCreateNestedManyWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleCreateInput>;
export const RoleCreateInputObjectSchema: SchemaType = z
    .object({
        name: z.string(),
        permissions: z.lazy(() => PermissionCreateNestedManyWithoutRolesInputObjectSchema).optional(),
        users: z.lazy(() => UserCreateNestedManyWithoutRolesInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
