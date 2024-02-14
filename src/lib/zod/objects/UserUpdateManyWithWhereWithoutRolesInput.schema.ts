/* eslint-disable */
import { z } from 'zod';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutRolesInputObjectSchema } from './UserUncheckedUpdateManyWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateManyWithWhereWithoutRolesInput>;
export const UserUpdateManyWithWhereWithoutRolesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => UserUpdateManyMutationInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateManyWithoutRolesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
