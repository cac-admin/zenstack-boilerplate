/* eslint-disable */
import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleUncheckedUpdateManyWithoutPermissionsNestedInputObjectSchema } from './RoleUncheckedUpdateManyWithoutPermissionsNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionUncheckedUpdateInput>;
export const PermissionUncheckedUpdateInputObjectSchema: SchemaType = z
    .object({
        id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        roles: z.lazy(() => RoleUncheckedUpdateManyWithoutPermissionsNestedInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
