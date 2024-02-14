/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { PermissionSelectObjectSchema } from '../objects/PermissionSelect.schema';
import { PermissionIncludeObjectSchema } from '../objects/PermissionInclude.schema';
import { PermissionWhereUniqueInputObjectSchema } from '../objects/PermissionWhereUniqueInput.schema';
import { PermissionWhereInputObjectSchema } from '../objects/PermissionWhereInput.schema';
import { PermissionOrderByWithRelationInputObjectSchema } from '../objects/PermissionOrderByWithRelationInput.schema';
import { PermissionScalarFieldEnumSchema } from '../enums/PermissionScalarFieldEnum.schema';
import { PermissionCreateInputObjectSchema } from '../objects/PermissionCreateInput.schema';
import { PermissionUncheckedCreateInputObjectSchema } from '../objects/PermissionUncheckedCreateInput.schema';
import { PermissionCreateManyInputObjectSchema } from '../objects/PermissionCreateManyInput.schema';
import { PermissionUpdateInputObjectSchema } from '../objects/PermissionUpdateInput.schema';
import { PermissionUncheckedUpdateInputObjectSchema } from '../objects/PermissionUncheckedUpdateInput.schema';
import { PermissionUpdateManyMutationInputObjectSchema } from '../objects/PermissionUpdateManyMutationInput.schema';
import { PermissionUncheckedUpdateManyInputObjectSchema } from '../objects/PermissionUncheckedUpdateManyInput.schema';
import { PermissionCountAggregateInputObjectSchema } from '../objects/PermissionCountAggregateInput.schema';
import { PermissionMinAggregateInputObjectSchema } from '../objects/PermissionMinAggregateInput.schema';
import { PermissionMaxAggregateInputObjectSchema } from '../objects/PermissionMaxAggregateInput.schema';
import { PermissionAvgAggregateInputObjectSchema } from '../objects/PermissionAvgAggregateInput.schema';
import { PermissionSumAggregateInputObjectSchema } from '../objects/PermissionSumAggregateInput.schema';
import { PermissionOrderByWithAggregationInputObjectSchema } from '../objects/PermissionOrderByWithAggregationInput.schema';
import { PermissionScalarWhereWithAggregatesInputObjectSchema } from '../objects/PermissionScalarWhereWithAggregatesInput.schema';

type PermissionInputSchemaType = {
    findUnique: z.ZodType<Prisma.PermissionFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.PermissionFindFirstArgs>;
    findMany: z.ZodType<Prisma.PermissionFindManyArgs>;
    create: z.ZodType<Prisma.PermissionCreateArgs>;
    createMany: z.ZodType<Prisma.PermissionCreateManyArgs>;
    delete: z.ZodType<Prisma.PermissionDeleteArgs>;
    deleteMany: z.ZodType<Prisma.PermissionDeleteManyArgs>;
    update: z.ZodType<Prisma.PermissionUpdateArgs>;
    updateMany: z.ZodType<Prisma.PermissionUpdateManyArgs>;
    upsert: z.ZodType<Prisma.PermissionUpsertArgs>;
    aggregate: z.ZodType<Prisma.PermissionAggregateArgs>;
    groupBy: z.ZodType<Prisma.PermissionGroupByArgs>;
    count: z.ZodType<Prisma.PermissionCountArgs>;
};

export const PermissionInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => PermissionSelectObjectSchema.optional()),
        include: z.lazy(() => PermissionIncludeObjectSchema.optional()),
        where: PermissionWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => PermissionSelectObjectSchema.optional()),
        include: z.lazy(() => PermissionIncludeObjectSchema.optional()),
        where: PermissionWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                PermissionOrderByWithRelationInputObjectSchema,
                PermissionOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: PermissionWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(PermissionScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => PermissionSelectObjectSchema.optional()),
        include: z.lazy(() => PermissionIncludeObjectSchema.optional()),
        where: PermissionWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                PermissionOrderByWithRelationInputObjectSchema,
                PermissionOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: PermissionWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(PermissionScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => PermissionSelectObjectSchema.optional()),
        include: z.lazy(() => PermissionIncludeObjectSchema.optional()),
        data: z.union([PermissionCreateInputObjectSchema, PermissionUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([PermissionCreateManyInputObjectSchema, z.array(PermissionCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => PermissionSelectObjectSchema.optional()),
        include: z.lazy(() => PermissionIncludeObjectSchema.optional()),
        where: PermissionWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: PermissionWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => PermissionSelectObjectSchema.optional()),
        include: z.lazy(() => PermissionIncludeObjectSchema.optional()),
        data: z.union([PermissionUpdateInputObjectSchema, PermissionUncheckedUpdateInputObjectSchema]),
        where: PermissionWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([PermissionUpdateManyMutationInputObjectSchema, PermissionUncheckedUpdateManyInputObjectSchema]),
        where: PermissionWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => PermissionSelectObjectSchema.optional()),
        include: z.lazy(() => PermissionIncludeObjectSchema.optional()),
        where: PermissionWhereUniqueInputObjectSchema,
        create: z.union([PermissionCreateInputObjectSchema, PermissionUncheckedCreateInputObjectSchema]),
        update: z.union([PermissionUpdateInputObjectSchema, PermissionUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: PermissionWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                PermissionOrderByWithRelationInputObjectSchema,
                PermissionOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: PermissionWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), PermissionCountAggregateInputObjectSchema]).optional(),
        _min: PermissionMinAggregateInputObjectSchema.optional(),
        _max: PermissionMaxAggregateInputObjectSchema.optional(),
        _avg: PermissionAvgAggregateInputObjectSchema.optional(),
        _sum: PermissionSumAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: PermissionWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                PermissionOrderByWithAggregationInputObjectSchema,
                PermissionOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: PermissionScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(PermissionScalarFieldEnumSchema),
        _count: z.union([z.literal(true), PermissionCountAggregateInputObjectSchema]).optional(),
        _min: PermissionMinAggregateInputObjectSchema.optional(),
        _max: PermissionMaxAggregateInputObjectSchema.optional(),
        _avg: PermissionAvgAggregateInputObjectSchema.optional(),
        _sum: PermissionSumAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: PermissionWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                PermissionOrderByWithRelationInputObjectSchema,
                PermissionOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: PermissionWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(PermissionScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), PermissionCountAggregateInputObjectSchema]).optional(),
    }),
} as PermissionInputSchemaType;
