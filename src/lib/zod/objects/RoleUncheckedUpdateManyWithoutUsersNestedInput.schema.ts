/* eslint-disable */
import { z } from 'zod';
import { RoleCreateWithoutUsersInputObjectSchema } from './RoleCreateWithoutUsersInput.schema';
import { RoleUncheckedCreateWithoutUsersInputObjectSchema } from './RoleUncheckedCreateWithoutUsersInput.schema';
import { RoleCreateOrConnectWithoutUsersInputObjectSchema } from './RoleCreateOrConnectWithoutUsersInput.schema';
import { RoleUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './RoleUpsertWithWhereUniqueWithoutUsersInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './RoleUpdateWithWhereUniqueWithoutUsersInput.schema';
import { RoleUpdateManyWithWhereWithoutUsersInputObjectSchema } from './RoleUpdateManyWithWhereWithoutUsersInput.schema';
import { RoleScalarWhereInputObjectSchema } from './RoleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutUsersNestedInput>;
export const RoleUncheckedUpdateManyWithoutUsersNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => RoleCreateWithoutUsersInputObjectSchema),
                z.lazy(() => RoleCreateWithoutUsersInputObjectSchema).array(),
                z.lazy(() => RoleUncheckedCreateWithoutUsersInputObjectSchema),
                z.lazy(() => RoleUncheckedCreateWithoutUsersInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => RoleCreateOrConnectWithoutUsersInputObjectSchema),
                z.lazy(() => RoleCreateOrConnectWithoutUsersInputObjectSchema).array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => RoleUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
                z.lazy(() => RoleUpsertWithWhereUniqueWithoutUsersInputObjectSchema).array(),
            ])
            .optional(),
        set: z
            .union([
                z.lazy(() => RoleWhereUniqueInputObjectSchema),
                z.lazy(() => RoleWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => RoleWhereUniqueInputObjectSchema),
                z.lazy(() => RoleWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => RoleWhereUniqueInputObjectSchema),
                z.lazy(() => RoleWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => RoleWhereUniqueInputObjectSchema),
                z.lazy(() => RoleWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => RoleUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
                z.lazy(() => RoleUpdateWithWhereUniqueWithoutUsersInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => RoleUpdateManyWithWhereWithoutUsersInputObjectSchema),
                z.lazy(() => RoleUpdateManyWithWhereWithoutUsersInputObjectSchema).array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => RoleScalarWhereInputObjectSchema),
                z.lazy(() => RoleScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
