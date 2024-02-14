/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonCreateManySubjectInput>;
export const LessonCreateManySubjectInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        authorId: z.string(),
        content: z.instanceof(Uint8Array),
    })
    .strict() as SchemaType;
