/* eslint-disable */
import { z } from 'zod';
import { LessonCreateWithoutAuthorInputObjectSchema } from './LessonCreateWithoutAuthorInput.schema';
import { LessonUncheckedCreateWithoutAuthorInputObjectSchema } from './LessonUncheckedCreateWithoutAuthorInput.schema';
import { LessonCreateOrConnectWithoutAuthorInputObjectSchema } from './LessonCreateOrConnectWithoutAuthorInput.schema';
import { LessonCreateManyAuthorInputEnvelopeObjectSchema } from './LessonCreateManyAuthorInputEnvelope.schema';
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonUncheckedCreateNestedManyWithoutAuthorInput>;
export const LessonUncheckedCreateNestedManyWithoutAuthorInputObjectSchema: SchemaType = z
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
        createMany: z.lazy(() => LessonCreateManyAuthorInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => LessonWhereUniqueInputObjectSchema),
                z.lazy(() => LessonWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
