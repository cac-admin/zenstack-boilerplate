/* eslint-disable */
import { z } from 'zod';
import { RoleCreateWithoutUsersInputObjectSchema } from './RoleCreateWithoutUsersInput.schema';
import { RoleUncheckedCreateWithoutUsersInputObjectSchema } from './RoleUncheckedCreateWithoutUsersInput.schema';
import { RoleCreateOrConnectWithoutUsersInputObjectSchema } from './RoleCreateOrConnectWithoutUsersInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleCreateNestedManyWithoutUsersInput>;
export const RoleCreateNestedManyWithoutUsersInputObjectSchema: SchemaType = z
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
        connect: z
            .union([
                z.lazy(() => RoleWhereUniqueInputObjectSchema),
                z.lazy(() => RoleWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
