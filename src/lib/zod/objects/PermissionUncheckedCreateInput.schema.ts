/* eslint-disable */
import { z } from 'zod';
import { RoleUncheckedCreateNestedManyWithoutPermissionsInputObjectSchema } from './RoleUncheckedCreateNestedManyWithoutPermissionsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionUncheckedCreateInput>;
export const PermissionUncheckedCreateInputObjectSchema: SchemaType = z
    .object({
        id: z.number().optional(),
        name: z.string(),
        roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutPermissionsInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
