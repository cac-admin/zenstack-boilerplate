/* eslint-disable */
import { z } from 'zod';
import { RoleInputSchema } from '../input/RoleInput.schema';
import { PermissionCountOutputTypeArgsObjectSchema } from './PermissionCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionSelect>;
export const PermissionSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        roles: z.union([z.boolean(), z.lazy(() => RoleInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => PermissionCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
