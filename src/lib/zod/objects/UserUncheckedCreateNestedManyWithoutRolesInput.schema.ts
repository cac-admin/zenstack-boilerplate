/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutRolesInputObjectSchema } from './UserCreateWithoutRolesInput.schema';
import { UserUncheckedCreateWithoutRolesInputObjectSchema } from './UserUncheckedCreateWithoutRolesInput.schema';
import { UserCreateOrConnectWithoutRolesInputObjectSchema } from './UserCreateOrConnectWithoutRolesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutRolesInput>;
export const UserUncheckedCreateNestedManyWithoutRolesInputObjectSchema: SchemaType = z
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
        connect: z
            .union([
                z.lazy(() => UserWhereUniqueInputObjectSchema),
                z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
