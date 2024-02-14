/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCodeRunsInputObjectSchema } from './UserCreateWithoutCodeRunsInput.schema';
import { UserUncheckedCreateWithoutCodeRunsInputObjectSchema } from './UserUncheckedCreateWithoutCodeRunsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutCodeRunsInput>;
export const UserCreateOrConnectWithoutCodeRunsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutCodeRunsInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutCodeRunsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
