/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionCountOutputTypeSelect>;
export const PermissionCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        roles: z.boolean().optional(),
    })
    .strict() as SchemaType;
