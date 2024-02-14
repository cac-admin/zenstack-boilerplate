/* eslint-disable */
import { z } from 'zod';
import { CodeRunWhereUniqueInputObjectSchema } from './CodeRunWhereUniqueInput.schema';
import { CodeRunUpdateWithoutCreatedByInputObjectSchema } from './CodeRunUpdateWithoutCreatedByInput.schema';
import { CodeRunUncheckedUpdateWithoutCreatedByInputObjectSchema } from './CodeRunUncheckedUpdateWithoutCreatedByInput.schema';
import { CodeRunCreateWithoutCreatedByInputObjectSchema } from './CodeRunCreateWithoutCreatedByInput.schema';
import { CodeRunUncheckedCreateWithoutCreatedByInputObjectSchema } from './CodeRunUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunUpsertWithWhereUniqueWithoutCreatedByInput>;
export const CodeRunUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => CodeRunWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => CodeRunUpdateWithoutCreatedByInputObjectSchema),
            z.lazy(() => CodeRunUncheckedUpdateWithoutCreatedByInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => CodeRunCreateWithoutCreatedByInputObjectSchema),
            z.lazy(() => CodeRunUncheckedCreateWithoutCreatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
