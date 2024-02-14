/* eslint-disable */
import { z } from 'zod';
import { CodeRunScalarWhereInputObjectSchema } from './CodeRunScalarWhereInput.schema';
import { CodeRunUpdateManyMutationInputObjectSchema } from './CodeRunUpdateManyMutationInput.schema';
import { CodeRunUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './CodeRunUncheckedUpdateManyWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunUpdateManyWithWhereWithoutCreatedByInput>;
export const CodeRunUpdateManyWithWhereWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => CodeRunScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => CodeRunUpdateManyMutationInputObjectSchema),
            z.lazy(() => CodeRunUncheckedUpdateManyWithoutCreatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
