/* eslint-disable */
import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleCreateWithoutUsersInputObjectSchema } from './RoleCreateWithoutUsersInput.schema';
import { RoleUncheckedCreateWithoutUsersInputObjectSchema } from './RoleUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleCreateOrConnectWithoutUsersInput>;
export const RoleCreateOrConnectWithoutUsersInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => RoleCreateWithoutUsersInputObjectSchema),
            z.lazy(() => RoleUncheckedCreateWithoutUsersInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
