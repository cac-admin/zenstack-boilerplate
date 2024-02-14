/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectCountOutputTypeSelect>;
export const SubjectCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        lessons: z.boolean().optional(),
    })
    .strict() as SchemaType;
