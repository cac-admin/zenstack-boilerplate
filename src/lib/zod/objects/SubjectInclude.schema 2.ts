/* eslint-disable */
import { z } from 'zod';
import { LessonInputSchema } from '../input/LessonInput.schema';
import { SubjectCountOutputTypeArgsObjectSchema } from './SubjectCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectInclude>;
export const SubjectIncludeObjectSchema: SchemaType = z
    .object({
        lessons: z.union([z.boolean(), z.lazy(() => LessonInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => SubjectCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
