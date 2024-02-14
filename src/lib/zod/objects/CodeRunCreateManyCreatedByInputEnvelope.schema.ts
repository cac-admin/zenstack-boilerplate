/* eslint-disable */
import { z } from 'zod';
import { CodeRunCreateManyCreatedByInputObjectSchema } from './CodeRunCreateManyCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunCreateManyCreatedByInputEnvelope>;
export const CodeRunCreateManyCreatedByInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => CodeRunCreateManyCreatedByInputObjectSchema),
            z.lazy(() => CodeRunCreateManyCreatedByInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
