/* eslint-disable */
import { z } from 'zod';
import { LessonSelectObjectSchema } from './LessonSelect.schema';
import { LessonIncludeObjectSchema } from './LessonInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonArgs>;
export const LessonArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => LessonSelectObjectSchema).optional(),
        include: z.lazy(() => LessonIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
