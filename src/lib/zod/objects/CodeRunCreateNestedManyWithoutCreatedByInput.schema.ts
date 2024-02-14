/* eslint-disable */
import { z } from 'zod';
import { CodeRunCreateWithoutCreatedByInputObjectSchema } from './CodeRunCreateWithoutCreatedByInput.schema';
import { CodeRunUncheckedCreateWithoutCreatedByInputObjectSchema } from './CodeRunUncheckedCreateWithoutCreatedByInput.schema';
import { CodeRunCreateOrConnectWithoutCreatedByInputObjectSchema } from './CodeRunCreateOrConnectWithoutCreatedByInput.schema';
import { CodeRunCreateManyCreatedByInputEnvelopeObjectSchema } from './CodeRunCreateManyCreatedByInputEnvelope.schema';
import { CodeRunWhereUniqueInputObjectSchema } from './CodeRunWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunCreateNestedManyWithoutCreatedByInput>;
export const CodeRunCreateNestedManyWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => CodeRunCreateWithoutCreatedByInputObjectSchema),
                z.lazy(() => CodeRunCreateWithoutCreatedByInputObjectSchema).array(),
                z.lazy(() => CodeRunUncheckedCreateWithoutCreatedByInputObjectSchema),
                z.lazy(() => CodeRunUncheckedCreateWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => CodeRunCreateOrConnectWithoutCreatedByInputObjectSchema),
                z.lazy(() => CodeRunCreateOrConnectWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => CodeRunCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => CodeRunWhereUniqueInputObjectSchema),
                z.lazy(() => CodeRunWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
