/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutLessonsInputObjectSchema } from './UserUpdateWithoutLessonsInput.schema';
import { UserUncheckedUpdateWithoutLessonsInputObjectSchema } from './UserUncheckedUpdateWithoutLessonsInput.schema';
import { UserCreateWithoutLessonsInputObjectSchema } from './UserCreateWithoutLessonsInput.schema';
import { UserUncheckedCreateWithoutLessonsInputObjectSchema } from './UserUncheckedCreateWithoutLessonsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutLessonsInput>;
export const UserUpsertWithoutLessonsInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutLessonsInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutLessonsInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutLessonsInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutLessonsInputObjectSchema),
        ]),
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
