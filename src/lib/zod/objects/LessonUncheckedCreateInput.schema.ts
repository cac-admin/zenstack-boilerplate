/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonUncheckedCreateInput>;
export const LessonUncheckedCreateInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        subName: z.string(),
        authorId: z.string(),
        content: z.instanceof(Uint8Array),
    })
    .strict() as SchemaType;