/* eslint-disable */
import { z } from 'zod';
import { RoleScalarWhereInputObjectSchema } from './RoleScalarWhereInput.schema';
import { RoleUpdateManyMutationInputObjectSchema } from './RoleUpdateManyMutationInput.schema';
import { RoleUncheckedUpdateManyWithoutUsersInputObjectSchema } from './RoleUncheckedUpdateManyWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleUpdateManyWithWhereWithoutUsersInput>;
export const RoleUpdateManyWithWhereWithoutUsersInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => RoleScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => RoleUpdateManyMutationInputObjectSchema),
            z.lazy(() => RoleUncheckedUpdateManyWithoutUsersInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
