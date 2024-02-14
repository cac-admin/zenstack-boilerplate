/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { SubjectArgsObjectSchema } from './SubjectArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonInclude>;
export const LessonIncludeObjectSchema: SchemaType = z
    .object({
        author: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        subject: z.union([z.boolean(), z.lazy(() => SubjectArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
