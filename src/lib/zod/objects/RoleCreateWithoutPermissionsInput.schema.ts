/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedManyWithoutRolesInputObjectSchema } from './UserCreateNestedManyWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleCreateWithoutPermissionsInput>;
export const RoleCreateWithoutPermissionsInputObjectSchema: SchemaType = z
    .object({
        name: z.string(),
        users: z.lazy(() => UserCreateNestedManyWithoutRolesInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
