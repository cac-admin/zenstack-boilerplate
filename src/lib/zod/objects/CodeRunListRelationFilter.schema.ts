/* eslint-disable */
import { z } from 'zod';
import { CodeRunWhereInputObjectSchema } from './CodeRunWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunListRelationFilter>;
export const CodeRunListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => CodeRunWhereInputObjectSchema).optional(),
        some: z.lazy(() => CodeRunWhereInputObjectSchema).optional(),
        none: z.lazy(() => CodeRunWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
