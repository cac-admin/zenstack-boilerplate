/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { VerificationTokenSelectObjectSchema } from '../objects/VerificationTokenSelect.schema';
import { VerificationTokenWhereUniqueInputObjectSchema } from '../objects/VerificationTokenWhereUniqueInput.schema';
import { VerificationTokenWhereInputObjectSchema } from '../objects/VerificationTokenWhereInput.schema';
import { VerificationTokenOrderByWithRelationInputObjectSchema } from '../objects/VerificationTokenOrderByWithRelationInput.schema';
import { VerificationTokenScalarFieldEnumSchema } from '../enums/VerificationTokenScalarFieldEnum.schema';
import { VerificationTokenCreateInputObjectSchema } from '../objects/VerificationTokenCreateInput.schema';
import { VerificationTokenUncheckedCreateInputObjectSchema } from '../objects/VerificationTokenUncheckedCreateInput.schema';
import { VerificationTokenCreateManyInputObjectSchema } from '../objects/VerificationTokenCreateManyInput.schema';
import { VerificationTokenUpdateInputObjectSchema } from '../objects/VerificationTokenUpdateInput.schema';
import { VerificationTokenUncheckedUpdateInputObjectSchema } from '../objects/VerificationTokenUncheckedUpdateInput.schema';
import { VerificationTokenUpdateManyMutationInputObjectSchema } from '../objects/VerificationTokenUpdateManyMutationInput.schema';
import { VerificationTokenUncheckedUpdateManyInputObjectSchema } from '../objects/VerificationTokenUncheckedUpdateManyInput.schema';
import { VerificationTokenCountAggregateInputObjectSchema } from '../objects/VerificationTokenCountAggregateInput.schema';
import { VerificationTokenMinAggregateInputObjectSchema } from '../objects/VerificationTokenMinAggregateInput.schema';
import { VerificationTokenMaxAggregateInputObjectSchema } from '../objects/VerificationTokenMaxAggregateInput.schema';
import { VerificationTokenOrderByWithAggregationInputObjectSchema } from '../objects/VerificationTokenOrderByWithAggregationInput.schema';
import { VerificationTokenScalarWhereWithAggregatesInputObjectSchema } from '../objects/VerificationTokenScalarWhereWithAggregatesInput.schema';

type VerificationTokenInputSchemaType = {
    findUnique: z.ZodType<Prisma.VerificationTokenFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.VerificationTokenFindFirstArgs>;
    findMany: z.ZodType<Prisma.VerificationTokenFindManyArgs>;
    create: z.ZodType<Prisma.VerificationTokenCreateArgs>;
    createMany: z.ZodType<Prisma.VerificationTokenCreateManyArgs>;
    delete: z.ZodType<Prisma.VerificationTokenDeleteArgs>;
    deleteMany: z.ZodType<Prisma.VerificationTokenDeleteManyArgs>;
    update: z.ZodType<Prisma.VerificationTokenUpdateArgs>;
    updateMany: z.ZodType<Prisma.VerificationTokenUpdateManyArgs>;
    upsert: z.ZodType<Prisma.VerificationTokenUpsertArgs>;
    aggregate: z.ZodType<Prisma.VerificationTokenAggregateArgs>;
    groupBy: z.ZodType<Prisma.VerificationTokenGroupByArgs>;
    count: z.ZodType<Prisma.VerificationTokenCountArgs>;
};

export const VerificationTokenInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => VerificationTokenSelectObjectSchema.optional()),
        where: VerificationTokenWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => VerificationTokenSelectObjectSchema.optional()),
        where: VerificationTokenWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                VerificationTokenOrderByWithRelationInputObjectSchema,
                VerificationTokenOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: VerificationTokenWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(VerificationTokenScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => VerificationTokenSelectObjectSchema.optional()),
        where: VerificationTokenWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                VerificationTokenOrderByWithRelationInputObjectSchema,
                VerificationTokenOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: VerificationTokenWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(VerificationTokenScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => VerificationTokenSelectObjectSchema.optional()),
        data: z.union([VerificationTokenCreateInputObjectSchema, VerificationTokenUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([
            VerificationTokenCreateManyInputObjectSchema,
            z.array(VerificationTokenCreateManyInputObjectSchema),
        ]),
    }),
    delete: z.object({
        select: z.lazy(() => VerificationTokenSelectObjectSchema.optional()),
        where: VerificationTokenWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: VerificationTokenWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => VerificationTokenSelectObjectSchema.optional()),
        data: z.union([VerificationTokenUpdateInputObjectSchema, VerificationTokenUncheckedUpdateInputObjectSchema]),
        where: VerificationTokenWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            VerificationTokenUpdateManyMutationInputObjectSchema,
            VerificationTokenUncheckedUpdateManyInputObjectSchema,
        ]),
        where: VerificationTokenWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => VerificationTokenSelectObjectSchema.optional()),
        where: VerificationTokenWhereUniqueInputObjectSchema,
        create: z.union([VerificationTokenCreateInputObjectSchema, VerificationTokenUncheckedCreateInputObjectSchema]),
        update: z.union([VerificationTokenUpdateInputObjectSchema, VerificationTokenUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: VerificationTokenWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                VerificationTokenOrderByWithRelationInputObjectSchema,
                VerificationTokenOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: VerificationTokenWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), VerificationTokenCountAggregateInputObjectSchema]).optional(),
        _min: VerificationTokenMinAggregateInputObjectSchema.optional(),
        _max: VerificationTokenMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: VerificationTokenWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                VerificationTokenOrderByWithAggregationInputObjectSchema,
                VerificationTokenOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: VerificationTokenScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(VerificationTokenScalarFieldEnumSchema),
        _count: z.union([z.literal(true), VerificationTokenCountAggregateInputObjectSchema]).optional(),
        _min: VerificationTokenMinAggregateInputObjectSchema.optional(),
        _max: VerificationTokenMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: VerificationTokenWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                VerificationTokenOrderByWithRelationInputObjectSchema,
                VerificationTokenOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: VerificationTokenWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(VerificationTokenScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), VerificationTokenCountAggregateInputObjectSchema]).optional(),
    }),
} as VerificationTokenInputSchemaType;