/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';
import { CodeRunListRelationFilterObjectSchema } from './CodeRunListRelationFilter.schema';
import { LessonListRelationFilterObjectSchema } from './LessonListRelationFilter.schema';
import { RoleListRelationFilterObjectSchema } from './RoleListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserWhereUniqueInput>;
export const UserWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        email: z.string().optional(),
        AND: z
            .union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()])
            .optional(),
        OR: z
            .lazy(() => UserWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()])
            .optional(),
        name: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        netid: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        student_number: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        emailVerified: z
            .union([
                z.lazy(() => DateTimeNullableFilterObjectSchema),
                z.union([z.date(), z.string().datetime().optional()]),
                z.null(),
            ])
            .optional()
            .nullable(),
        password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        image: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
        sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
        codeRuns: z.lazy(() => CodeRunListRelationFilterObjectSchema).optional(),
        lessons: z.lazy(() => LessonListRelationFilterObjectSchema).optional(),
        roles: z.lazy(() => RoleListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
