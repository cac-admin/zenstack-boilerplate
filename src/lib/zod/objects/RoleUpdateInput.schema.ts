/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PermissionUpdateManyWithoutRolesNestedInputObjectSchema } from './PermissionUpdateManyWithoutRolesNestedInput.schema';
import { UserUpdateManyWithoutRolesNestedInputObjectSchema } from './UserUpdateManyWithoutRolesNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleUpdateInput>;
export const RoleUpdateInputObjectSchema: SchemaType = z
    .object({
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        permissions: z.lazy(() => PermissionUpdateManyWithoutRolesNestedInputObjectSchema).optional(),
        users: z.lazy(() => UserUpdateManyWithoutRolesNestedInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
