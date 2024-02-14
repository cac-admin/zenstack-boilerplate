/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VerificationTokenCreateManyInput>;
export const VerificationTokenCreateManyInputObjectSchema: SchemaType = z
    .object({
        identifier: z.string(),
        token: z.string(),
        expires: z.union([z.date(), z.string().datetime()]),
    })
    .strict() as SchemaType;
