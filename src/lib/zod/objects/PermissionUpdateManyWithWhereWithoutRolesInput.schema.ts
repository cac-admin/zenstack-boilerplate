/* eslint-disable */
import { z } from 'zod';
import { PermissionScalarWhereInputObjectSchema } from './PermissionScalarWhereInput.schema';
import { PermissionUpdateManyMutationInputObjectSchema } from './PermissionUpdateManyMutationInput.schema';
import { PermissionUncheckedUpdateManyWithoutRolesInputObjectSchema } from './PermissionUncheckedUpdateManyWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionUpdateManyWithWhereWithoutRolesInput>;
export const PermissionUpdateManyWithWhereWithoutRolesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => PermissionScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => PermissionUpdateManyMutationInputObjectSchema),
            z.lazy(() => PermissionUncheckedUpdateManyWithoutRolesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
