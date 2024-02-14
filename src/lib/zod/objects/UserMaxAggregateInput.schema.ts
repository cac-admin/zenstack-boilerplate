/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserMaxAggregateInputType>;
export const UserMaxAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.literal(true).optional(),
        name: z.literal(true).optional(),
        netid: z.literal(true).optional(),
        student_number: z.literal(true).optional(),
        email: z.literal(true).optional(),
        emailVerified: z.literal(true).optional(),
        password: z.literal(true).optional(),
        image: z.literal(true).optional(),
    })
    .strict() as SchemaType;
