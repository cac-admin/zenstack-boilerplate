/* eslint-disable */
import { z } from 'zod';
import { RoleWhereInputObjectSchema } from './RoleWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleListRelationFilter>;
export const RoleListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => RoleWhereInputObjectSchema).optional(),
        some: z.lazy(() => RoleWhereInputObjectSchema).optional(),
        none: z.lazy(() => RoleWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
