/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutSessionsInputObjectSchema } from './UserCreateWithoutSessionsInput.schema';
import { UserUncheckedCreateWithoutSessionsInputObjectSchema } from './UserUncheckedCreateWithoutSessionsInput.schema';
import { UserCreateOrConnectWithoutSessionsInputObjectSchema } from './UserCreateOrConnectWithoutSessionsInput.schema';
import { UserUpsertWithoutSessionsInputObjectSchema } from './UserUpsertWithoutSessionsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutSessionsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutSessionsInput.schema';
import { UserUpdateWithoutSessionsInputObjectSchema } from './UserUpdateWithoutSessionsInput.schema';
import { UserUncheckedUpdateWithoutSessionsInputObjectSchema } from './UserUncheckedUpdateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput>;
export const UserUpdateOneRequiredWithoutSessionsNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutSessionsInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutSessionsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputObjectSchema).optional(),
        upsert: z.lazy(() => UserUpsertWithoutSessionsInputObjectSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => UserUpdateToOneWithWhereWithoutSessionsInputObjectSchema),
                z.lazy(() => UserUpdateWithoutSessionsInputObjectSchema),
                z.lazy(() => UserUncheckedUpdateWithoutSessionsInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
