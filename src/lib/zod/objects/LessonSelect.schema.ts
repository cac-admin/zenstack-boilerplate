/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { SubjectArgsObjectSchema } from './SubjectArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonSelect>;
export const LessonSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        author: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        subject: z.union([z.boolean(), z.lazy(() => SubjectArgsObjectSchema)]).optional(),
        subName: z.boolean().optional(),
        authorId: z.boolean().optional(),
        content: z.boolean().optional(),
    })
    .strict() as SchemaType;
