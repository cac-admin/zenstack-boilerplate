/* eslint-disable */
import { z } from 'zod';
import { PermissionSelectObjectSchema } from './PermissionSelect.schema';
import { PermissionIncludeObjectSchema } from './PermissionInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionArgs>;
export const PermissionArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => PermissionSelectObjectSchema).optional(),
        include: z.lazy(() => PermissionIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
