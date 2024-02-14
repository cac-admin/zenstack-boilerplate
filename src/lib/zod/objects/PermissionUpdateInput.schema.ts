/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleUpdateManyWithoutPermissionsNestedInputObjectSchema } from './RoleUpdateManyWithoutPermissionsNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionUpdateInput>;
export const PermissionUpdateInputObjectSchema: SchemaType = z
    .object({
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        roles: z.lazy(() => RoleUpdateManyWithoutPermissionsNestedInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
