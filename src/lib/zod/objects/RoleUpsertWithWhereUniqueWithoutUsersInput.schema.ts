/* eslint-disable */
import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutUsersInputObjectSchema } from './RoleUpdateWithoutUsersInput.schema';
import { RoleUncheckedUpdateWithoutUsersInputObjectSchema } from './RoleUncheckedUpdateWithoutUsersInput.schema';
import { RoleCreateWithoutUsersInputObjectSchema } from './RoleCreateWithoutUsersInput.schema';
import { RoleUncheckedCreateWithoutUsersInputObjectSchema } from './RoleUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleUpsertWithWhereUniqueWithoutUsersInput>;
export const RoleUpsertWithWhereUniqueWithoutUsersInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => RoleUpdateWithoutUsersInputObjectSchema),
            z.lazy(() => RoleUncheckedUpdateWithoutUsersInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => RoleCreateWithoutUsersInputObjectSchema),
            z.lazy(() => RoleUncheckedCreateWithoutUsersInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
