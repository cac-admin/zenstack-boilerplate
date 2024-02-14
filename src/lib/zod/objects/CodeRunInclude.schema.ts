/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunInclude>;
export const CodeRunIncludeObjectSchema: SchemaType = z
    .object({
        createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
