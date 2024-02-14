/* eslint-disable */
import { z } from 'zod';
import { CodeRunWhereUniqueInputObjectSchema } from './CodeRunWhereUniqueInput.schema';
import { CodeRunUpdateWithoutCreatedByInputObjectSchema } from './CodeRunUpdateWithoutCreatedByInput.schema';
import { CodeRunUncheckedUpdateWithoutCreatedByInputObjectSchema } from './CodeRunUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunUpdateWithWhereUniqueWithoutCreatedByInput>;
export const CodeRunUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => CodeRunWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => CodeRunUpdateWithoutCreatedByInputObjectSchema),
            z.lazy(() => CodeRunUncheckedUpdateWithoutCreatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
