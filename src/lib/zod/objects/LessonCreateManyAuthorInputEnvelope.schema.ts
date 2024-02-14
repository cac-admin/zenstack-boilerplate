/* eslint-disable */
import { z } from 'zod';
import { LessonCreateManyAuthorInputObjectSchema } from './LessonCreateManyAuthorInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonCreateManyAuthorInputEnvelope>;
export const LessonCreateManyAuthorInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => LessonCreateManyAuthorInputObjectSchema),
            z.lazy(() => LessonCreateManyAuthorInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
