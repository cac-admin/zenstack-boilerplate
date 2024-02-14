/* eslint-disable */
import { z } from 'zod';
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema';
import { LessonCreateWithoutAuthorInputObjectSchema } from './LessonCreateWithoutAuthorInput.schema';
import { LessonUncheckedCreateWithoutAuthorInputObjectSchema } from './LessonUncheckedCreateWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonCreateOrConnectWithoutAuthorInput>;
export const LessonCreateOrConnectWithoutAuthorInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => LessonWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => LessonCreateWithoutAuthorInputObjectSchema),
            z.lazy(() => LessonUncheckedCreateWithoutAuthorInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
