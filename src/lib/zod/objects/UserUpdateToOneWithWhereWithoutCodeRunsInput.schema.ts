/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCodeRunsInputObjectSchema } from './UserUpdateWithoutCodeRunsInput.schema';
import { UserUncheckedUpdateWithoutCodeRunsInputObjectSchema } from './UserUncheckedUpdateWithoutCodeRunsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCodeRunsInput>;
export const UserUpdateToOneWithWhereWithoutCodeRunsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutCodeRunsInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutCodeRunsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
