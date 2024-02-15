/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutRolesInputObjectSchema } from './UserCreateWithoutRolesInput.schema';
import { UserUncheckedCreateWithoutRolesInputObjectSchema } from './UserUncheckedCreateWithoutRolesInput.schema';
import { UserCreateOrConnectWithoutRolesInputObjectSchema } from './UserCreateOrConnectWithoutRolesInput.schema';
import { UserUpsertWithWhereUniqueWithoutRolesInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutRolesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutRolesInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutRolesInput.schema';
import { UserUpdateManyWithWhereWithoutRolesInputObjectSchema } from './UserUpdateManyWithWhereWithoutRolesInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUncheckedUpdateManyWithoutRolesNestedInput>;
export const UserUncheckedUpdateManyWithoutRolesNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutRolesInputObjectSchema),
                z.lazy(() => UserCreateWithoutRolesInputObjectSchema).array(),
                z.lazy(() => UserUncheckedCreateWithoutRolesInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutRolesInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => UserCreateOrConnectWithoutRolesInputObjectSchema),
                z.lazy(() => UserCreateOrConnectWithoutRolesInputObjectSchema).array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => UserUpsertWithWhereUniqueWithoutRolesInputObjectSchema),
                z.lazy(() => UserUpsertWithWhereUniqueWithoutRolesInputObjectSchema).array(),
            ])
            .optional(),
        set: z
            .union([
                z.lazy(() => UserWhereUniqueInputObjectSchema),
                z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => UserWhereUniqueInputObjectSchema),
                z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => UserWhereUniqueInputObjectSchema),
                z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => UserWhereUniqueInputObjectSchema),
                z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => UserUpdateWithWhereUniqueWithoutRolesInputObjectSchema),
                z.lazy(() => UserUpdateWithWhereUniqueWithoutRolesInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => UserUpdateManyWithWhereWithoutRolesInputObjectSchema),
                z.lazy(() => UserUpdateManyWithWhereWithoutRolesInputObjectSchema).array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => UserScalarWhereInputObjectSchema),
                z.lazy(() => UserScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
