/* eslint-disable */
import { z } from 'zod';
import { LessonCreateWithoutSubjectInputObjectSchema } from './LessonCreateWithoutSubjectInput.schema';
import { LessonUncheckedCreateWithoutSubjectInputObjectSchema } from './LessonUncheckedCreateWithoutSubjectInput.schema';
import { LessonCreateOrConnectWithoutSubjectInputObjectSchema } from './LessonCreateOrConnectWithoutSubjectInput.schema';
import { LessonUpsertWithWhereUniqueWithoutSubjectInputObjectSchema } from './LessonUpsertWithWhereUniqueWithoutSubjectInput.schema';
import { LessonCreateManySubjectInputEnvelopeObjectSchema } from './LessonCreateManySubjectInputEnvelope.schema';
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema';
import { LessonUpdateWithWhereUniqueWithoutSubjectInputObjectSchema } from './LessonUpdateWithWhereUniqueWithoutSubjectInput.schema';
import { LessonUpdateManyWithWhereWithoutSubjectInputObjectSchema } from './LessonUpdateManyWithWhereWithoutSubjectInput.schema';
import { LessonScalarWhereInputObjectSchema } from './LessonScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonUpdateManyWithoutSubjectNestedInput>;
export const LessonUpdateManyWithoutSubjectNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => LessonCreateWithoutSubjectInputObjectSchema),
                z.lazy(() => LessonCreateWithoutSubjectInputObjectSchema).array(),
                z.lazy(() => LessonUncheckedCreateWithoutSubjectInputObjectSchema),
                z.lazy(() => LessonUncheckedCreateWithoutSubjectInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LessonCreateOrConnectWithoutSubjectInputObjectSchema),
                z.lazy(() => LessonCreateOrConnectWithoutSubjectInputObjectSchema).array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => LessonUpsertWithWhereUniqueWithoutSubjectInputObjectSchema),
                z.lazy(() => LessonUpsertWithWhereUniqueWithoutSubjectInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => LessonCreateManySubjectInputEnvelopeObjectSchema).optional(),
        set: z
            .union([
                z.lazy(() => LessonWhereUniqueInputObjectSchema),
                z.lazy(() => LessonWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => LessonWhereUniqueInputObjectSchema),
                z.lazy(() => LessonWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => LessonWhereUniqueInputObjectSchema),
                z.lazy(() => LessonWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => LessonWhereUniqueInputObjectSchema),
                z.lazy(() => LessonWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => LessonUpdateWithWhereUniqueWithoutSubjectInputObjectSchema),
                z.lazy(() => LessonUpdateWithWhereUniqueWithoutSubjectInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => LessonUpdateManyWithWhereWithoutSubjectInputObjectSchema),
                z.lazy(() => LessonUpdateManyWithWhereWithoutSubjectInputObjectSchema).array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => LessonScalarWhereInputObjectSchema),
                z.lazy(() => LessonScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
