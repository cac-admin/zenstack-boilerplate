/* eslint-disable */
import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutRolesNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutRolesNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleUncheckedUpdateWithoutPermissionsInput>;
export const RoleUncheckedUpdateWithoutPermissionsInputObjectSchema: SchemaType = z
    .object({
        id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        users: z.lazy(() => UserUncheckedUpdateManyWithoutRolesNestedInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
