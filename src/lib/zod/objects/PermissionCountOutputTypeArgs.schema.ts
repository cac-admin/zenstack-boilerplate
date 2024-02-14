/* eslint-disable */
import { z } from 'zod';
import { PermissionCountOutputTypeSelectObjectSchema } from './PermissionCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionCountOutputTypeArgs>;
export const PermissionCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => PermissionCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
