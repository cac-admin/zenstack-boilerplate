/* eslint-disable */
import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleCreateWithoutPermissionsInputObjectSchema } from './RoleCreateWithoutPermissionsInput.schema';
import { RoleUncheckedCreateWithoutPermissionsInputObjectSchema } from './RoleUncheckedCreateWithoutPermissionsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleCreateOrConnectWithoutPermissionsInput>;
export const RoleCreateOrConnectWithoutPermissionsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => RoleCreateWithoutPermissionsInputObjectSchema),
            z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
