/* eslint-disable */
import { z } from 'zod';
import { RoleInputSchema } from '../input/RoleInput.schema';
import { PermissionCountOutputTypeArgsObjectSchema } from './PermissionCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionInclude>;
export const PermissionIncludeObjectSchema: SchemaType = z
    .object({
        roles: z.union([z.boolean(), z.lazy(() => RoleInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => PermissionCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
