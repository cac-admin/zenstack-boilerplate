/* eslint-disable */
import { z } from 'zod';
import { SubjectWhereInputObjectSchema } from './SubjectWhereInput.schema';
import { SubjectUpdateWithoutLessonsInputObjectSchema } from './SubjectUpdateWithoutLessonsInput.schema';
import { SubjectUncheckedUpdateWithoutLessonsInputObjectSchema } from './SubjectUncheckedUpdateWithoutLessonsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectUpdateToOneWithWhereWithoutLessonsInput>;
export const SubjectUpdateToOneWithWhereWithoutLessonsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => SubjectWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => SubjectUpdateWithoutLessonsInputObjectSchema),
            z.lazy(() => SubjectUncheckedUpdateWithoutLessonsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
