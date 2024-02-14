/* eslint-disable */
import { z } from 'zod';
import { CodeRunCreateWithoutCreatedByInputObjectSchema } from './CodeRunCreateWithoutCreatedByInput.schema';
import { CodeRunUncheckedCreateWithoutCreatedByInputObjectSchema } from './CodeRunUncheckedCreateWithoutCreatedByInput.schema';
import { CodeRunCreateOrConnectWithoutCreatedByInputObjectSchema } from './CodeRunCreateOrConnectWithoutCreatedByInput.schema';
import { CodeRunUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './CodeRunUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { CodeRunCreateManyCreatedByInputEnvelopeObjectSchema } from './CodeRunCreateManyCreatedByInputEnvelope.schema';
import { CodeRunWhereUniqueInputObjectSchema } from './CodeRunWhereUniqueInput.schema';
import { CodeRunUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './CodeRunUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { CodeRunUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './CodeRunUpdateManyWithWhereWithoutCreatedByInput.schema';
import { CodeRunScalarWhereInputObjectSchema } from './CodeRunScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CodeRunUpdateManyWithoutCreatedByNestedInput>;
export const CodeRunUpdateManyWithoutCreatedByNestedInputObjectSchema: SchemaType = z
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
        upsert: z
            .union([
                z.lazy(() => CodeRunUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
                z.lazy(() => CodeRunUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => CodeRunCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
        set: z
            .union([
                z.lazy(() => CodeRunWhereUniqueInputObjectSchema),
                z.lazy(() => CodeRunWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => CodeRunWhereUniqueInputObjectSchema),
                z.lazy(() => CodeRunWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => CodeRunWhereUniqueInputObjectSchema),
                z.lazy(() => CodeRunWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => CodeRunWhereUniqueInputObjectSchema),
                z.lazy(() => CodeRunWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => CodeRunUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
                z.lazy(() => CodeRunUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => CodeRunUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
                z.lazy(() => CodeRunUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => CodeRunScalarWhereInputObjectSchema),
                z.lazy(() => CodeRunScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
