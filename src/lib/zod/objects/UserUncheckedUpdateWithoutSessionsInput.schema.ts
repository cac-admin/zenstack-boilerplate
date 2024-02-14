/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema';
import { CodeRunUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './CodeRunUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { LessonUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from './LessonUncheckedUpdateManyWithoutAuthorNestedInput.schema';
import { RoleUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './RoleUncheckedUpdateManyWithoutUsersNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput>;
export const UserUncheckedUpdateWithoutSessionsInputObjectSchema: SchemaType = z
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
        accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
        codeRuns: z.lazy(() => CodeRunUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
        lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema).optional(),
        roles: z.lazy(() => RoleUncheckedUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
