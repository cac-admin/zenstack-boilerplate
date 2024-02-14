/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutCodeRunsInputObjectSchema } from './UserCreateWithoutCodeRunsInput.schema';
import { UserUncheckedCreateWithoutCodeRunsInputObjectSchema } from './UserUncheckedCreateWithoutCodeRunsInput.schema';
import { UserCreateOrConnectWithoutCodeRunsInputObjectSchema } from './UserCreateOrConnectWithoutCodeRunsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutCodeRunsInput>;
export const UserCreateNestedOneWithoutCodeRunsInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutCodeRunsInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutCodeRunsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCodeRunsInputObjectSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
