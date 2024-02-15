/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutRolesInputObjectSchema } from './UserCreateWithoutRolesInput.schema';
import { UserUncheckedCreateWithoutRolesInputObjectSchema } from './UserUncheckedCreateWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutRolesInput>;
export const UserCreateOrConnectWithoutRolesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutRolesInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutRolesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
