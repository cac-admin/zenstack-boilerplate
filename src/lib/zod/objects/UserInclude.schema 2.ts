/* eslint-disable */
import { z } from 'zod';
import { AccountInputSchema } from '../input/AccountInput.schema';
import { SessionInputSchema } from '../input/SessionInput.schema';
import { CodeRunInputSchema } from '../input/CodeRunInput.schema';
import { LessonInputSchema } from '../input/LessonInput.schema';
import { RoleInputSchema } from '../input/RoleInput.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectSchema: SchemaType = z
    .object({
        accounts: z.union([z.boolean(), z.lazy(() => AccountInputSchema.findMany)]).optional(),
        sessions: z.union([z.boolean(), z.lazy(() => SessionInputSchema.findMany)]).optional(),
        codeRuns: z.union([z.boolean(), z.lazy(() => CodeRunInputSchema.findMany)]).optional(),
        lessons: z.union([z.boolean(), z.lazy(() => LessonInputSchema.findMany)]).optional(),
        roles: z.union([z.boolean(), z.lazy(() => RoleInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
