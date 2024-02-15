/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutLessonsInputObjectSchema } from './UserUpdateWithoutLessonsInput.schema';
import { UserUncheckedUpdateWithoutLessonsInputObjectSchema } from './UserUncheckedUpdateWithoutLessonsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutLessonsInput>;
export const UserUpdateToOneWithWhereWithoutLessonsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutLessonsInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutLessonsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
