/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutLessonsInputObjectSchema } from './UserCreateWithoutLessonsInput.schema';
import { UserUncheckedCreateWithoutLessonsInputObjectSchema } from './UserUncheckedCreateWithoutLessonsInput.schema';
import { UserCreateOrConnectWithoutLessonsInputObjectSchema } from './UserCreateOrConnectWithoutLessonsInput.schema';
import { UserUpsertWithoutLessonsInputObjectSchema } from './UserUpsertWithoutLessonsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutLessonsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutLessonsInput.schema';
import { UserUpdateWithoutLessonsInputObjectSchema } from './UserUpdateWithoutLessonsInput.schema';
import { UserUncheckedUpdateWithoutLessonsInputObjectSchema } from './UserUncheckedUpdateWithoutLessonsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateOneWithoutLessonsNestedInput>;
export const UserUpdateOneWithoutLessonsNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutLessonsInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutLessonsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutLessonsInputObjectSchema).optional(),
        upsert: z.lazy(() => UserUpsertWithoutLessonsInputObjectSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => UserUpdateToOneWithWhereWithoutLessonsInputObjectSchema),
                z.lazy(() => UserUpdateWithoutLessonsInputObjectSchema),
                z.lazy(() => UserUncheckedUpdateWithoutLessonsInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
