/* eslint-disable */
import { z } from 'zod';
import { SubjectCreateWithoutLessonsInputObjectSchema } from './SubjectCreateWithoutLessonsInput.schema';
import { SubjectUncheckedCreateWithoutLessonsInputObjectSchema } from './SubjectUncheckedCreateWithoutLessonsInput.schema';
import { SubjectCreateOrConnectWithoutLessonsInputObjectSchema } from './SubjectCreateOrConnectWithoutLessonsInput.schema';
import { SubjectUpsertWithoutLessonsInputObjectSchema } from './SubjectUpsertWithoutLessonsInput.schema';
import { SubjectWhereUniqueInputObjectSchema } from './SubjectWhereUniqueInput.schema';
import { SubjectUpdateToOneWithWhereWithoutLessonsInputObjectSchema } from './SubjectUpdateToOneWithWhereWithoutLessonsInput.schema';
import { SubjectUpdateWithoutLessonsInputObjectSchema } from './SubjectUpdateWithoutLessonsInput.schema';
import { SubjectUncheckedUpdateWithoutLessonsInputObjectSchema } from './SubjectUncheckedUpdateWithoutLessonsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectUpdateOneRequiredWithoutLessonsNestedInput>;
export const SubjectUpdateOneRequiredWithoutLessonsNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => SubjectCreateWithoutLessonsInputObjectSchema),
                z.lazy(() => SubjectUncheckedCreateWithoutLessonsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => SubjectCreateOrConnectWithoutLessonsInputObjectSchema).optional(),
        upsert: z.lazy(() => SubjectUpsertWithoutLessonsInputObjectSchema).optional(),
        connect: z.lazy(() => SubjectWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => SubjectUpdateToOneWithWhereWithoutLessonsInputObjectSchema),
                z.lazy(() => SubjectUpdateWithoutLessonsInputObjectSchema),
                z.lazy(() => SubjectUncheckedUpdateWithoutLessonsInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
