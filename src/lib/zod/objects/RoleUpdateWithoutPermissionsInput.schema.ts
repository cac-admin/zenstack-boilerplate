/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateManyWithoutRolesNestedInputObjectSchema } from './UserUpdateManyWithoutRolesNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleUpdateWithoutPermissionsInput>;
export const RoleUpdateWithoutPermissionsInputObjectSchema: SchemaType = z
    .object({
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        users: z.lazy(() => UserUpdateManyWithoutRolesNestedInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
