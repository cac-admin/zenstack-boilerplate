/* eslint-disable */
import { z } from 'zod';
import { LessonInputSchema } from '../input/LessonInput.schema';
import { SubjectCountOutputTypeArgsObjectSchema } from './SubjectCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectSelect>;
export const SubjectSelectObjectSchema: SchemaType = z
    .object({
        name: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        lessons: z.union([z.boolean(), z.lazy(() => LessonInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => SubjectCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
