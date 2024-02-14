/* eslint-disable */
import { z } from 'zod';
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema';
import { LessonCreateWithoutSubjectInputObjectSchema } from './LessonCreateWithoutSubjectInput.schema';
import { LessonUncheckedCreateWithoutSubjectInputObjectSchema } from './LessonUncheckedCreateWithoutSubjectInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonCreateOrConnectWithoutSubjectInput>;
export const LessonCreateOrConnectWithoutSubjectInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => LessonWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => LessonCreateWithoutSubjectInputObjectSchema),
            z.lazy(() => LessonUncheckedCreateWithoutSubjectInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
