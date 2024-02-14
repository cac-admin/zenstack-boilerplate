/* eslint-disable */
import { z } from 'zod';
import { SubjectWhereUniqueInputObjectSchema } from './SubjectWhereUniqueInput.schema';
import { SubjectCreateWithoutLessonsInputObjectSchema } from './SubjectCreateWithoutLessonsInput.schema';
import { SubjectUncheckedCreateWithoutLessonsInputObjectSchema } from './SubjectUncheckedCreateWithoutLessonsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectCreateOrConnectWithoutLessonsInput>;
export const SubjectCreateOrConnectWithoutLessonsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => SubjectWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => SubjectCreateWithoutLessonsInputObjectSchema),
            z.lazy(() => SubjectUncheckedCreateWithoutLessonsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
