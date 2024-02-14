/* eslint-disable */
import { z } from 'zod';
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema';
import { LessonUpdateWithoutAuthorInputObjectSchema } from './LessonUpdateWithoutAuthorInput.schema';
import { LessonUncheckedUpdateWithoutAuthorInputObjectSchema } from './LessonUncheckedUpdateWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonUpdateWithWhereUniqueWithoutAuthorInput>;
export const LessonUpdateWithWhereUniqueWithoutAuthorInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => LessonWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => LessonUpdateWithoutAuthorInputObjectSchema),
            z.lazy(() => LessonUncheckedUpdateWithoutAuthorInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
