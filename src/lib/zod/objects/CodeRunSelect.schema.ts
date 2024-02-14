/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunSelect>;
export const CodeRunSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        time: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        createdById: z.boolean().optional(),
    })
    .strict() as SchemaType;
