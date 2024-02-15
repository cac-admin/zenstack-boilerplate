/* eslint-disable */
import { z } from 'zod';
import { SubjectWhereInputObjectSchema } from './SubjectWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectRelationFilter>;
export const SubjectRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => SubjectWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => SubjectWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
