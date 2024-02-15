/* eslint-disable */
import { z } from 'zod';
import { VerificationTokenSelectObjectSchema } from './VerificationTokenSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VerificationTokenArgs>;
export const VerificationTokenArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => VerificationTokenSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
