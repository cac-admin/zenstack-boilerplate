/* eslint-disable */
import { z } from 'zod';
import { RoleScalarWhereInputObjectSchema } from './RoleScalarWhereInput.schema';
import { RoleUpdateManyMutationInputObjectSchema } from './RoleUpdateManyMutationInput.schema';
import { RoleUncheckedUpdateManyWithoutPermissionsInputObjectSchema } from './RoleUncheckedUpdateManyWithoutPermissionsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleUpdateManyWithWhereWithoutPermissionsInput>;
export const RoleUpdateManyWithWhereWithoutPermissionsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => RoleScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => RoleUpdateManyMutationInputObjectSchema),
            z.lazy(() => RoleUncheckedUpdateManyWithoutPermissionsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
