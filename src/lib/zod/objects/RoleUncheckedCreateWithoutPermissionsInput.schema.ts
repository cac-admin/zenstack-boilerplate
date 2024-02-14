/* eslint-disable */
import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutRolesInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleUncheckedCreateWithoutPermissionsInput>;
export const RoleUncheckedCreateWithoutPermissionsInputObjectSchema: SchemaType = z
    .object({
        id: z.number().optional(),
        name: z.string(),
        users: z.lazy(() => UserUncheckedCreateNestedManyWithoutRolesInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
