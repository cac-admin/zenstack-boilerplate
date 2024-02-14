/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutCodeRunsInputObjectSchema } from './UserCreateWithoutCodeRunsInput.schema';
import { UserUncheckedCreateWithoutCodeRunsInputObjectSchema } from './UserUncheckedCreateWithoutCodeRunsInput.schema';
import { UserCreateOrConnectWithoutCodeRunsInputObjectSchema } from './UserCreateOrConnectWithoutCodeRunsInput.schema';
import { UserUpsertWithoutCodeRunsInputObjectSchema } from './UserUpsertWithoutCodeRunsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCodeRunsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCodeRunsInput.schema';
import { UserUpdateWithoutCodeRunsInputObjectSchema } from './UserUpdateWithoutCodeRunsInput.schema';
import { UserUncheckedUpdateWithoutCodeRunsInputObjectSchema } from './UserUncheckedUpdateWithoutCodeRunsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutCodeRunsNestedInput>;
export const UserUpdateOneRequiredWithoutCodeRunsNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutCodeRunsInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutCodeRunsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCodeRunsInputObjectSchema).optional(),
        upsert: z.lazy(() => UserUpsertWithoutCodeRunsInputObjectSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => UserUpdateToOneWithWhereWithoutCodeRunsInputObjectSchema),
                z.lazy(() => UserUpdateWithoutCodeRunsInputObjectSchema),
                z.lazy(() => UserUncheckedUpdateWithoutCodeRunsInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
