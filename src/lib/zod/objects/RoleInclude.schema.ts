/* eslint-disable */
import { z } from 'zod';
import { PermissionInputSchema } from '../input/PermissionInput.schema';
import { UserInputSchema } from '../input/UserInput.schema';
import { RoleCountOutputTypeArgsObjectSchema } from './RoleCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleInclude>;
export const RoleIncludeObjectSchema: SchemaType = z
    .object({
        permissions: z.union([z.boolean(), z.lazy(() => PermissionInputSchema.findMany)]).optional(),
        users: z.union([z.boolean(), z.lazy(() => UserInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => RoleCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
