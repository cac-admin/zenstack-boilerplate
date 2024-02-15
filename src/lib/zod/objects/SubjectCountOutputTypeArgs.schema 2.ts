/* eslint-disable */
import { z } from 'zod';
import { SubjectCountOutputTypeSelectObjectSchema } from './SubjectCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectCountOutputTypeArgs>;
export const SubjectCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => SubjectCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
