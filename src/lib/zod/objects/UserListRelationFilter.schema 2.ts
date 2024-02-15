/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserListRelationFilter>;
export const UserListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => UserWhereInputObjectSchema).optional(),
        some: z.lazy(() => UserWhereInputObjectSchema).optional(),
        none: z.lazy(() => UserWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
