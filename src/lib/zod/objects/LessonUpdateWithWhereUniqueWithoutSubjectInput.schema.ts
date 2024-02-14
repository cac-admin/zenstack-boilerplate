/* eslint-disable */
import { z } from 'zod';
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema';
import { LessonUpdateWithoutSubjectInputObjectSchema } from './LessonUpdateWithoutSubjectInput.schema';
import { LessonUncheckedUpdateWithoutSubjectInputObjectSchema } from './LessonUncheckedUpdateWithoutSubjectInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonUpdateWithWhereUniqueWithoutSubjectInput>;
export const LessonUpdateWithWhereUniqueWithoutSubjectInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => LessonWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => LessonUpdateWithoutSubjectInputObjectSchema),
            z.lazy(() => LessonUncheckedUpdateWithoutSubjectInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
