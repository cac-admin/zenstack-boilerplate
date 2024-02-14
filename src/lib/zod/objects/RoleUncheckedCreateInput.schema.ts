/* eslint-disable */
import { z } from 'zod';
import { PermissionUncheckedCreateNestedManyWithoutRolesInputObjectSchema } from './PermissionUncheckedCreateNestedManyWithoutRolesInput.schema';
import { UserUncheckedCreateNestedManyWithoutRolesInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleUncheckedCreateInput>;
export const RoleUncheckedCreateInputObjectSchema: SchemaType = z
    .object({
        id: z.number().optional(),
        name: z.string(),
        permissions: z.lazy(() => PermissionUncheckedCreateNestedManyWithoutRolesInputObjectSchema).optional(),
        users: z.lazy(() => UserUncheckedCreateNestedManyWithoutRolesInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
