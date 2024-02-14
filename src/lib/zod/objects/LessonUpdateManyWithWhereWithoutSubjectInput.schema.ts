/* eslint-disable */
import { z } from 'zod';
import { LessonScalarWhereInputObjectSchema } from './LessonScalarWhereInput.schema';
import { LessonUpdateManyMutationInputObjectSchema } from './LessonUpdateManyMutationInput.schema';
import { LessonUncheckedUpdateManyWithoutSubjectInputObjectSchema } from './LessonUncheckedUpdateManyWithoutSubjectInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonUpdateManyWithWhereWithoutSubjectInput>;
export const LessonUpdateManyWithWhereWithoutSubjectInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => LessonScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => LessonUpdateManyMutationInputObjectSchema),
            z.lazy(() => LessonUncheckedUpdateManyWithoutSubjectInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
