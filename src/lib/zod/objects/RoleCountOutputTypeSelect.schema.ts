/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleCountOutputTypeSelect>;
export const RoleCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        permissions: z.boolean().optional(),
        users: z.boolean().optional(),
    })
    .strict() as SchemaType;
