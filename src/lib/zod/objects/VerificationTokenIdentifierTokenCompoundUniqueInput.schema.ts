/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VerificationTokenIdentifierTokenCompoundUniqueInput>;
export const VerificationTokenIdentifierTokenCompoundUniqueInputObjectSchema: SchemaType = z
    .object({
        identifier: z.string(),
        token: z.string(),
    })
    .strict() as SchemaType;
