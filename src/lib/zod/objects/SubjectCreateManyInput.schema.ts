/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectCreateManyInput>;
export const SubjectCreateManyInputObjectSchema: SchemaType = z
    .object({
        name: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    })
    .strict() as SchemaType;
