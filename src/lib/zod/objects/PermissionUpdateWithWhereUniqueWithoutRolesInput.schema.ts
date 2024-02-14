/* eslint-disable */
import { z } from 'zod';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';
import { PermissionUpdateWithoutRolesInputObjectSchema } from './PermissionUpdateWithoutRolesInput.schema';
import { PermissionUncheckedUpdateWithoutRolesInputObjectSchema } from './PermissionUncheckedUpdateWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PermissionUpdateWithWhereUniqueWithoutRolesInput>;
export const PermissionUpdateWithWhereUniqueWithoutRolesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => PermissionUpdateWithoutRolesInputObjectSchema),
            z.lazy(() => PermissionUncheckedUpdateWithoutRolesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
