/* eslint-disable */
import { z } from 'zod';
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema';
import { LessonUpdateWithoutAuthorInputObjectSchema } from './LessonUpdateWithoutAuthorInput.schema';
import { LessonUncheckedUpdateWithoutAuthorInputObjectSchema } from './LessonUncheckedUpdateWithoutAuthorInput.schema';
import { LessonCreateWithoutAuthorInputObjectSchema } from './LessonCreateWithoutAuthorInput.schema';
import { LessonUncheckedCreateWithoutAuthorInputObjectSchema } from './LessonUncheckedCreateWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonUpsertWithWhereUniqueWithoutAuthorInput>;
export const LessonUpsertWithWhereUniqueWithoutAuthorInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => LessonWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => LessonUpdateWithoutAuthorInputObjectSchema),
            z.lazy(() => LessonUncheckedUpdateWithoutAuthorInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => LessonCreateWithoutAuthorInputObjectSchema),
            z.lazy(() => LessonUncheckedCreateWithoutAuthorInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
