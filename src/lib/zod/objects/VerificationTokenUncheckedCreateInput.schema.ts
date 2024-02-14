/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VerificationTokenUncheckedCreateInput>;
export const VerificationTokenUncheckedCreateInputObjectSchema: SchemaType = z
    .object({
        identifier: z.string(),
        token: z.string(),
        expires: z.union([z.date(), z.string().datetime()]),
    })
    .strict() as SchemaType;
