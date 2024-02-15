/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateManyInput>;
export const UserCreateManyInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        name: z.union([z.string(), z.null()]).optional().nullable(),
        netid: z.union([z.string(), z.null()]).optional().nullable(),
        student_number: z.union([z.string(), z.null()]).optional().nullable(),
        email: z.string(),
        emailVerified: z
            .union([z.union([z.date(), z.string().datetime().optional()]), z.null()])
            .optional()
            .nullable(),
        password: z.string(),
        image: z.union([z.string(), z.null()]).optional().nullable(),
    })
    .strict() as SchemaType;
