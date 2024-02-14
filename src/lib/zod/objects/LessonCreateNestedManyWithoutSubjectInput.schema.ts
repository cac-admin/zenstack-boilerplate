/* eslint-disable */
import { z } from 'zod';
import { LessonCreateWithoutSubjectInputObjectSchema } from './LessonCreateWithoutSubjectInput.schema';
import { LessonUncheckedCreateWithoutSubjectInputObjectSchema } from './LessonUncheckedCreateWithoutSubjectInput.schema';
import { LessonCreateOrConnectWithoutSubjectInputObjectSchema } from './LessonCreateOrConnectWithoutSubjectInput.schema';
import { LessonCreateManySubjectInputEnvelopeObjectSchema } from './LessonCreateManySubjectInputEnvelope.schema';
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonCreateNestedManyWithoutSubjectInput>;
export const LessonCreateNestedManyWithoutSubjectInputObjectSchema: SchemaType = z
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
        createMany: z.lazy(() => LessonCreateManySubjectInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => LessonWhereUniqueInputObjectSchema),
                z.lazy(() => LessonWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
