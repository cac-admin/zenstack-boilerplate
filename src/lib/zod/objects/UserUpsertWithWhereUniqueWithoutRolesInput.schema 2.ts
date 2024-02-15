/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutRolesInputObjectSchema } from './UserUpdateWithoutRolesInput.schema';
import { UserUncheckedUpdateWithoutRolesInputObjectSchema } from './UserUncheckedUpdateWithoutRolesInput.schema';
import { UserCreateWithoutRolesInputObjectSchema } from './UserCreateWithoutRolesInput.schema';
import { UserUncheckedCreateWithoutRolesInputObjectSchema } from './UserUncheckedCreateWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutRolesInput>;
export const UserUpsertWithWhereUniqueWithoutRolesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => UserUpdateWithoutRolesInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutRolesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutRolesInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutRolesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
