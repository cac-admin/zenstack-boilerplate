/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunCreateWithoutCreatedByInput>;
export const CodeRunCreateWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        time: z.bigint(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    })
    .strict() as SchemaType;
