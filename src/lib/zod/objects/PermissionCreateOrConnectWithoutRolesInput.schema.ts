/* eslint-disable */
import { z } from 'zod';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';
import { PermissionCreateWithoutRolesInputObjectSchema } from './PermissionCreateWithoutRolesInput.schema';
import { PermissionUncheckedCreateWithoutRolesInputObjectSchema } from './PermissionUncheckedCreateWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionCreateOrConnectWithoutRolesInput>;
export const PermissionCreateOrConnectWithoutRolesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => PermissionCreateWithoutRolesInputObjectSchema),
            z.lazy(() => PermissionUncheckedCreateWithoutRolesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
