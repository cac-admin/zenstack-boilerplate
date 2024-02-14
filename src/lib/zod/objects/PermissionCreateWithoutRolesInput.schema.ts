/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionCreateWithoutRolesInput>;
export const PermissionCreateWithoutRolesInputObjectSchema: SchemaType = z
    .object({
        name: z.string(),
    })
    .strict() as SchemaType;
