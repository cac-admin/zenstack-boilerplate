/* eslint-disable */
import { z } from 'zod';
import { LessonCreateManySubjectInputObjectSchema } from './LessonCreateManySubjectInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonCreateManySubjectInputEnvelope>;
export const LessonCreateManySubjectInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => LessonCreateManySubjectInputObjectSchema),
            z.lazy(() => LessonCreateManySubjectInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
