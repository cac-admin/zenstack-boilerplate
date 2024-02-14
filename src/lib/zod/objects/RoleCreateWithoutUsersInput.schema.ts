/* eslint-disable */
import { z } from 'zod';
import { PermissionCreateNestedManyWithoutRolesInputObjectSchema } from './PermissionCreateNestedManyWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleCreateWithoutUsersInput>;
export const RoleCreateWithoutUsersInputObjectSchema: SchemaType = z
    .object({
        name: z.string(),
        permissions: z.lazy(() => PermissionCreateNestedManyWithoutRolesInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
