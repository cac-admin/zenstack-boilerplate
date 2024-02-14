/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonCreateManyAuthorInput>;
export const LessonCreateManyAuthorInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        subName: z.string(),
        content: z.instanceof(Uint8Array),
    })
    .strict() as SchemaType;
