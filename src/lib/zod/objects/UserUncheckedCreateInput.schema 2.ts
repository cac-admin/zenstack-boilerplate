/* eslint-disable */
import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { CodeRunUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './CodeRunUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { LessonUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './LessonUncheckedCreateNestedManyWithoutAuthorInput.schema';
import { RoleUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './RoleUncheckedCreateNestedManyWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectSchema: SchemaType = z
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
        accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
        sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
        codeRuns: z.lazy(() => CodeRunUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
        lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
        roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutUsersInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
