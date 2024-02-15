/* eslint-disable */
import { z } from 'zod';
import { SubjectUpdateWithoutLessonsInputObjectSchema } from './SubjectUpdateWithoutLessonsInput.schema';
import { SubjectUncheckedUpdateWithoutLessonsInputObjectSchema } from './SubjectUncheckedUpdateWithoutLessonsInput.schema';
import { SubjectCreateWithoutLessonsInputObjectSchema } from './SubjectCreateWithoutLessonsInput.schema';
import { SubjectUncheckedCreateWithoutLessonsInputObjectSchema } from './SubjectUncheckedCreateWithoutLessonsInput.schema';
import { SubjectWhereInputObjectSchema } from './SubjectWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectUpsertWithoutLessonsInput>;
export const SubjectUpsertWithoutLessonsInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => SubjectUpdateWithoutLessonsInputObjectSchema),
            z.lazy(() => SubjectUncheckedUpdateWithoutLessonsInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => SubjectCreateWithoutLessonsInputObjectSchema),
            z.lazy(() => SubjectUncheckedCreateWithoutLessonsInputObjectSchema),
        ]),
        where: z.lazy(() => SubjectWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
