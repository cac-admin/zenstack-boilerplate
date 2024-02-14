/* eslint-disable */
import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PermissionUncheckedUpdateManyWithoutRolesNestedInputObjectSchema } from './PermissionUncheckedUpdateManyWithoutRolesNestedInput.schema';
import { UserUncheckedUpdateManyWithoutRolesNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutRolesNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleUncheckedUpdateInput>;
export const RoleUncheckedUpdateInputObjectSchema: SchemaType = z
    .object({
        id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        permissions: z.lazy(() => PermissionUncheckedUpdateManyWithoutRolesNestedInputObjectSchema).optional(),
        users: z.lazy(() => UserUncheckedUpdateManyWithoutRolesNestedInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
