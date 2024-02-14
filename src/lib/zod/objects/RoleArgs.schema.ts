/* eslint-disable */
import { z } from 'zod';
import { RoleSelectObjectSchema } from './RoleSelect.schema';
import { RoleIncludeObjectSchema } from './RoleInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleArgs>;
export const RoleArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => RoleSelectObjectSchema).optional(),
        include: z.lazy(() => RoleIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
