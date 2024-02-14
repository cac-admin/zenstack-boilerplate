/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        accounts: z.boolean().optional(),
        sessions: z.boolean().optional(),
        codeRuns: z.boolean().optional(),
        lessons: z.boolean().optional(),
        roles: z.boolean().optional(),
    })
    .strict() as SchemaType;
