/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonMaxAggregateInputType>;
export const LessonMaxAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.literal(true).optional(),
        subName: z.literal(true).optional(),
        authorId: z.literal(true).optional(),
        content: z.literal(true).optional(),
    })
    .strict() as SchemaType;
