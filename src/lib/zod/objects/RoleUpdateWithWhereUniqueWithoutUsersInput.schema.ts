/* eslint-disable */
import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutUsersInputObjectSchema } from './RoleUpdateWithoutUsersInput.schema';
import { RoleUncheckedUpdateWithoutUsersInputObjectSchema } from './RoleUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutUsersInput>;
export const RoleUpdateWithWhereUniqueWithoutUsersInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => RoleUpdateWithoutUsersInputObjectSchema),
            z.lazy(() => RoleUncheckedUpdateWithoutUsersInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
