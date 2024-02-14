/* eslint-disable */
import { z } from 'zod';
import { PermissionCreateWithoutRolesInputObjectSchema } from './PermissionCreateWithoutRolesInput.schema';
import { PermissionUncheckedCreateWithoutRolesInputObjectSchema } from './PermissionUncheckedCreateWithoutRolesInput.schema';
import { PermissionCreateOrConnectWithoutRolesInputObjectSchema } from './PermissionCreateOrConnectWithoutRolesInput.schema';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionUncheckedCreateNestedManyWithoutRolesInput>;
export const PermissionUncheckedCreateNestedManyWithoutRolesInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => PermissionCreateWithoutRolesInputObjectSchema),
                z.lazy(() => PermissionCreateWithoutRolesInputObjectSchema).array(),
                z.lazy(() => PermissionUncheckedCreateWithoutRolesInputObjectSchema),
                z.lazy(() => PermissionUncheckedCreateWithoutRolesInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => PermissionCreateOrConnectWithoutRolesInputObjectSchema),
                z.lazy(() => PermissionCreateOrConnectWithoutRolesInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => PermissionWhereUniqueInputObjectSchema),
                z.lazy(() => PermissionWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
