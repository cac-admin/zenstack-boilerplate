/* eslint-disable */
import { z } from 'zod';
import { PermissionWhereInputObjectSchema } from './PermissionWhereInput.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { RoleListRelationFilterObjectSchema } from './RoleListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionWhereUniqueInput>;
export const PermissionWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.number().optional(),
        AND: z
            .union([
                z.lazy(() => PermissionWhereInputObjectSchema),
                z.lazy(() => PermissionWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => PermissionWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => PermissionWhereInputObjectSchema),
                z.lazy(() => PermissionWhereInputObjectSchema).array(),
            ])
            .optional(),
        name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        roles: z.lazy(() => RoleListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
