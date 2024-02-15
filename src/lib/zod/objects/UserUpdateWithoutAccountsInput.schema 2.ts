/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUpdateManyWithoutUserNestedInput.schema';
import { CodeRunUpdateManyWithoutCreatedByNestedInputObjectSchema } from './CodeRunUpdateManyWithoutCreatedByNestedInput.schema';
import { LessonUpdateManyWithoutAuthorNestedInputObjectSchema } from './LessonUpdateManyWithoutAuthorNestedInput.schema';
import { RoleUpdateManyWithoutUsersNestedInputObjectSchema } from './RoleUpdateManyWithoutUsersNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateWithoutAccountsInput>;
export const UserUpdateWithoutAccountsInputObjectSchema: SchemaType = z
    .object({
        id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        name: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        netid: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        student_number: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        emailVerified: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
                z.null(),
            ])
            .optional()
            .nullable(),
        password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        image: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
        codeRuns: z.lazy(() => CodeRunUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
        lessons: z.lazy(() => LessonUpdateManyWithoutAuthorNestedInputObjectSchema).optional(),
        roles: z.lazy(() => RoleUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
