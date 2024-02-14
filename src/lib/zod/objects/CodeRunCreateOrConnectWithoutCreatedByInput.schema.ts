/* eslint-disable */
import { z } from 'zod';
import { CodeRunWhereUniqueInputObjectSchema } from './CodeRunWhereUniqueInput.schema';
import { CodeRunCreateWithoutCreatedByInputObjectSchema } from './CodeRunCreateWithoutCreatedByInput.schema';
import { CodeRunUncheckedCreateWithoutCreatedByInputObjectSchema } from './CodeRunUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunCreateOrConnectWithoutCreatedByInput>;
export const CodeRunCreateOrConnectWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => CodeRunWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => CodeRunCreateWithoutCreatedByInputObjectSchema),
            z.lazy(() => CodeRunUncheckedCreateWithoutCreatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
