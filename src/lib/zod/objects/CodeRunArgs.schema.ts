/* eslint-disable */
import { z } from 'zod';
import { CodeRunSelectObjectSchema } from './CodeRunSelect.schema';
import { CodeRunIncludeObjectSchema } from './CodeRunInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunArgs>;
export const CodeRunArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => CodeRunSelectObjectSchema).optional(),
        include: z.lazy(() => CodeRunIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
