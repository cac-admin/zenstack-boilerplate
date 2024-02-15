/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutCodeRunsInputObjectSchema } from './UserUpdateWithoutCodeRunsInput.schema';
import { UserUncheckedUpdateWithoutCodeRunsInputObjectSchema } from './UserUncheckedUpdateWithoutCodeRunsInput.schema';
import { UserCreateWithoutCodeRunsInputObjectSchema } from './UserCreateWithoutCodeRunsInput.schema';
import { UserUncheckedCreateWithoutCodeRunsInputObjectSchema } from './UserUncheckedCreateWithoutCodeRunsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutCodeRunsInput>;
export const UserUpsertWithoutCodeRunsInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutCodeRunsInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutCodeRunsInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutCodeRunsInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutCodeRunsInputObjectSchema),
        ]),
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
