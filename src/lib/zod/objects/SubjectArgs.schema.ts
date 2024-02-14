/* eslint-disable */
import { z } from 'zod';
import { SubjectSelectObjectSchema } from './SubjectSelect.schema';
import { SubjectIncludeObjectSchema } from './SubjectInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectArgs>;
export const SubjectArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => SubjectSelectObjectSchema).optional(),
        include: z.lazy(() => SubjectIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
