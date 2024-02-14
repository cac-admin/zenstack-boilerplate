/* eslint-disable */
import { z } from 'zod';
import { RoleCreateWithoutPermissionsInputObjectSchema } from './RoleCreateWithoutPermissionsInput.schema';
import { RoleUncheckedCreateWithoutPermissionsInputObjectSchema } from './RoleUncheckedCreateWithoutPermissionsInput.schema';
import { RoleCreateOrConnectWithoutPermissionsInputObjectSchema } from './RoleCreateOrConnectWithoutPermissionsInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleCreateNestedManyWithoutPermissionsInput>;
export const RoleCreateNestedManyWithoutPermissionsInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => RoleCreateWithoutPermissionsInputObjectSchema),
                z.lazy(() => RoleCreateWithoutPermissionsInputObjectSchema).array(),
                z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputObjectSchema),
                z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => RoleCreateOrConnectWithoutPermissionsInputObjectSchema),
                z.lazy(() => RoleCreateOrConnectWithoutPermissionsInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => RoleWhereUniqueInputObjectSchema),
                z.lazy(() => RoleWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
