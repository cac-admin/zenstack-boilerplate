/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunUncheckedCreateWithoutCreatedByInput>;
export const CodeRunUncheckedCreateWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        id: z.number().optional(),
        time: z.bigint(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    })
    .strict() as SchemaType;
