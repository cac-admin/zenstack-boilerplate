/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleCreateManyInput>;
export const RoleCreateManyInputObjectSchema: SchemaType = z
    .object({
        id: z.number().optional(),
        name: z.string(),
    })
    .strict() as SchemaType;
