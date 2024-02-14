/* eslint-disable */
import { z } from 'zod';
import { PermissionWhereInputObjectSchema } from './PermissionWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionListRelationFilter>;
export const PermissionListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => PermissionWhereInputObjectSchema).optional(),
        some: z.lazy(() => PermissionWhereInputObjectSchema).optional(),
        none: z.lazy(() => PermissionWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
