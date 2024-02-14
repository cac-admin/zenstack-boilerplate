/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutCodeRunsInputObjectSchema } from './UserCreateNestedOneWithoutCodeRunsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunCreateInput>;
export const CodeRunCreateInputObjectSchema: SchemaType = z
    .object({
        time: z.bigint(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        createdBy: z.lazy(() => UserCreateNestedOneWithoutCodeRunsInputObjectSchema),
    })
    .strict() as SchemaType;
