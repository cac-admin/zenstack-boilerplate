/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutLessonsInputObjectSchema } from './UserCreateWithoutLessonsInput.schema';
import { UserUncheckedCreateWithoutLessonsInputObjectSchema } from './UserUncheckedCreateWithoutLessonsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutLessonsInput>;
export const UserCreateOrConnectWithoutLessonsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutLessonsInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutLessonsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
