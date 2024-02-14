/* eslint-disable */
import { z } from 'zod';
import { PermissionUncheckedCreateNestedManyWithoutRolesInputObjectSchema } from './PermissionUncheckedCreateNestedManyWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleUncheckedCreateWithoutUsersInput>;
export const RoleUncheckedCreateWithoutUsersInputObjectSchema: SchemaType = z
    .object({
        id: z.number().optional(),
        name: z.string(),
        permissions: z.lazy(() => PermissionUncheckedCreateNestedManyWithoutRolesInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
