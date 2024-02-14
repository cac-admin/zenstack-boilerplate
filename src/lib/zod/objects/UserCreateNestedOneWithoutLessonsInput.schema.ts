/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutLessonsInputObjectSchema } from './UserCreateWithoutLessonsInput.schema';
import { UserUncheckedCreateWithoutLessonsInputObjectSchema } from './UserUncheckedCreateWithoutLessonsInput.schema';
import { UserCreateOrConnectWithoutLessonsInputObjectSchema } from './UserCreateOrConnectWithoutLessonsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutLessonsInput>;
export const UserCreateNestedOneWithoutLessonsInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutLessonsInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutLessonsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutLessonsInputObjectSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
