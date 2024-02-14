/* eslint-disable */
import { z } from 'zod';
import { LessonCreateWithoutAuthorInputObjectSchema } from './LessonCreateWithoutAuthorInput.schema';
import { LessonUncheckedCreateWithoutAuthorInputObjectSchema } from './LessonUncheckedCreateWithoutAuthorInput.schema';
import { LessonCreateOrConnectWithoutAuthorInputObjectSchema } from './LessonCreateOrConnectWithoutAuthorInput.schema';
import { LessonUpsertWithWhereUniqueWithoutAuthorInputObjectSchema } from './LessonUpsertWithWhereUniqueWithoutAuthorInput.schema';
import { LessonCreateManyAuthorInputEnvelopeObjectSchema } from './LessonCreateManyAuthorInputEnvelope.schema';
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema';
import { LessonUpdateWithWhereUniqueWithoutAuthorInputObjectSchema } from './LessonUpdateWithWhereUniqueWithoutAuthorInput.schema';
import { LessonUpdateManyWithWhereWithoutAuthorInputObjectSchema } from './LessonUpdateManyWithWhereWithoutAuthorInput.schema';
import { LessonScalarWhereInputObjectSchema } from './LessonScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonUpdateManyWithoutAuthorNestedInput>;
export const LessonUpdateManyWithoutAuthorNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => LessonCreateWithoutAuthorInputObjectSchema),
                z.lazy(() => LessonCreateWithoutAuthorInputObjectSchema).array(),
                z.lazy(() => LessonUncheckedCreateWithoutAuthorInputObjectSchema),
                z.lazy(() => LessonUncheckedCreateWithoutAuthorInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LessonCreateOrConnectWithoutAuthorInputObjectSchema),
                z.lazy(() => LessonCreateOrConnectWithoutAuthorInputObjectSchema).array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => LessonUpsertWithWhereUniqueWithoutAuthorInputObjectSchema),
                z.lazy(() => LessonUpsertWithWhereUniqueWithoutAuthorInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => LessonCreateManyAuthorInputEnvelopeObjectSchema).optional(),
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
                z.lazy(() => LessonUpdateWithWhereUniqueWithoutAuthorInputObjectSchema),
                z.lazy(() => LessonUpdateWithWhereUniqueWithoutAuthorInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => LessonUpdateManyWithWhereWithoutAuthorInputObjectSchema),
                z.lazy(() => LessonUpdateManyWithWhereWithoutAuthorInputObjectSchema).array(),
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
