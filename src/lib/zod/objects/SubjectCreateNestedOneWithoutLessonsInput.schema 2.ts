/* eslint-disable */
import { z } from 'zod';
import { SubjectCreateWithoutLessonsInputObjectSchema } from './SubjectCreateWithoutLessonsInput.schema';
import { SubjectUncheckedCreateWithoutLessonsInputObjectSchema } from './SubjectUncheckedCreateWithoutLessonsInput.schema';
import { SubjectCreateOrConnectWithoutLessonsInputObjectSchema } from './SubjectCreateOrConnectWithoutLessonsInput.schema';
import { SubjectWhereUniqueInputObjectSchema } from './SubjectWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectCreateNestedOneWithoutLessonsInput>;
export const SubjectCreateNestedOneWithoutLessonsInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => SubjectCreateWithoutLessonsInputObjectSchema),
                z.lazy(() => SubjectUncheckedCreateWithoutLessonsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => SubjectCreateOrConnectWithoutLessonsInputObjectSchema).optional(),
        connect: z.lazy(() => SubjectWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
