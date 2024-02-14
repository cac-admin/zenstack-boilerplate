/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutRolesInputObjectSchema } from './UserUpdateWithoutRolesInput.schema';
import { UserUncheckedUpdateWithoutRolesInputObjectSchema } from './UserUncheckedUpdateWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutRolesInput>;
export const UserUpdateWithWhereUniqueWithoutRolesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => UserUpdateWithoutRolesInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutRolesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
