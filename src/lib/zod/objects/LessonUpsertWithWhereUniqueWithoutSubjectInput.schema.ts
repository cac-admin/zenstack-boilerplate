/* eslint-disable */
import { z } from 'zod';
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema';
import { LessonUpdateWithoutSubjectInputObjectSchema } from './LessonUpdateWithoutSubjectInput.schema';
import { LessonUncheckedUpdateWithoutSubjectInputObjectSchema } from './LessonUncheckedUpdateWithoutSubjectInput.schema';
import { LessonCreateWithoutSubjectInputObjectSchema } from './LessonCreateWithoutSubjectInput.schema';
import { LessonUncheckedCreateWithoutSubjectInputObjectSchema } from './LessonUncheckedCreateWithoutSubjectInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonUpsertWithWhereUniqueWithoutSubjectInput>;
export const LessonUpsertWithWhereUniqueWithoutSubjectInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => LessonWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => LessonUpdateWithoutSubjectInputObjectSchema),
            z.lazy(() => LessonUncheckedUpdateWithoutSubjectInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => LessonCreateWithoutSubjectInputObjectSchema),
            z.lazy(() => LessonUncheckedCreateWithoutSubjectInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
