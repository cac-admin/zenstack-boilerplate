/* eslint-disable */
import { z } from 'zod';
import { LessonScalarWhereInputObjectSchema } from './LessonScalarWhereInput.schema';
import { LessonUpdateManyMutationInputObjectSchema } from './LessonUpdateManyMutationInput.schema';
import { LessonUncheckedUpdateManyWithoutAuthorInputObjectSchema } from './LessonUncheckedUpdateManyWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonUpdateManyWithWhereWithoutAuthorInput>;
export const LessonUpdateManyWithWhereWithoutAuthorInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => LessonScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => LessonUpdateManyMutationInputObjectSchema),
            z.lazy(() => LessonUncheckedUpdateManyWithoutAuthorInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
