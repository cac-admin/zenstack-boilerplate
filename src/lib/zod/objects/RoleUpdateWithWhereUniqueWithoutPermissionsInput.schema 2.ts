/* eslint-disable */
import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutPermissionsInputObjectSchema } from './RoleUpdateWithoutPermissionsInput.schema';
import { RoleUncheckedUpdateWithoutPermissionsInputObjectSchema } from './RoleUncheckedUpdateWithoutPermissionsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutPermissionsInput>;
export const RoleUpdateWithWhereUniqueWithoutPermissionsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => RoleUpdateWithoutPermissionsInputObjectSchema),
            z.lazy(() => RoleUncheckedUpdateWithoutPermissionsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
