/* eslint-disable */
import { z } from 'zod';
import { RoleCountOutputTypeSelectObjectSchema } from './RoleCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleCountOutputTypeArgs>;
export const RoleCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => RoleCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
