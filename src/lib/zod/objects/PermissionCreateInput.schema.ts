/* eslint-disable */
import { z } from 'zod';
import { RoleCreateNestedManyWithoutPermissionsInputObjectSchema } from './RoleCreateNestedManyWithoutPermissionsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionCreateInput>;
export const PermissionCreateInputObjectSchema: SchemaType = z
    .object({
        name: z.string(),
        roles: z.lazy(() => RoleCreateNestedManyWithoutPermissionsInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
