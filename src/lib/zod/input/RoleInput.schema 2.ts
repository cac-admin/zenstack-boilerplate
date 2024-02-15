/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { RoleSelectObjectSchema } from '../objects/RoleSelect.schema';
import { RoleIncludeObjectSchema } from '../objects/RoleInclude.schema';
import { RoleWhereUniqueInputObjectSchema } from '../objects/RoleWhereUniqueInput.schema';
import { RoleWhereInputObjectSchema } from '../objects/RoleWhereInput.schema';
import { RoleOrderByWithRelationInputObjectSchema } from '../objects/RoleOrderByWithRelationInput.schema';
import { RoleScalarFieldEnumSchema } from '../enums/RoleScalarFieldEnum.schema';
import { RoleCreateInputObjectSchema } from '../objects/RoleCreateInput.schema';
import { RoleUncheckedCreateInputObjectSchema } from '../objects/RoleUncheckedCreateInput.schema';
import { RoleCreateManyInputObjectSchema } from '../objects/RoleCreateManyInput.schema';
import { RoleUpdateInputObjectSchema } from '../objects/RoleUpdateInput.schema';
import { RoleUncheckedUpdateInputObjectSchema } from '../objects/RoleUncheckedUpdateInput.schema';
import { RoleUpdateManyMutationInputObjectSchema } from '../objects/RoleUpdateManyMutationInput.schema';
import { RoleUncheckedUpdateManyInputObjectSchema } from '../objects/RoleUncheckedUpdateManyInput.schema';
import { RoleCountAggregateInputObjectSchema } from '../objects/RoleCountAggregateInput.schema';
import { RoleMinAggregateInputObjectSchema } from '../objects/RoleMinAggregateInput.schema';
import { RoleMaxAggregateInputObjectSchema } from '../objects/RoleMaxAggregateInput.schema';
import { RoleAvgAggregateInputObjectSchema } from '../objects/RoleAvgAggregateInput.schema';
import { RoleSumAggregateInputObjectSchema } from '../objects/RoleSumAggregateInput.schema';
import { RoleOrderByWithAggregationInputObjectSchema } from '../objects/RoleOrderByWithAggregationInput.schema';
import { RoleScalarWhereWithAggregatesInputObjectSchema } from '../objects/RoleScalarWhereWithAggregatesInput.schema';

type RoleInputSchemaType = {
    findUnique: z.ZodType<Prisma.RoleFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.RoleFindFirstArgs>;
    findMany: z.ZodType<Prisma.RoleFindManyArgs>;
    create: z.ZodType<Prisma.RoleCreateArgs>;
    createMany: z.ZodType<Prisma.RoleCreateManyArgs>;
    delete: z.ZodType<Prisma.RoleDeleteArgs>;
    deleteMany: z.ZodType<Prisma.RoleDeleteManyArgs>;
    update: z.ZodType<Prisma.RoleUpdateArgs>;
    updateMany: z.ZodType<Prisma.RoleUpdateManyArgs>;
    upsert: z.ZodType<Prisma.RoleUpsertArgs>;
    aggregate: z.ZodType<Prisma.RoleAggregateArgs>;
    groupBy: z.ZodType<Prisma.RoleGroupByArgs>;
    count: z.ZodType<Prisma.RoleCountArgs>;
};

export const RoleInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => RoleSelectObjectSchema.optional()),
        include: z.lazy(() => RoleIncludeObjectSchema.optional()),
        where: RoleWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => RoleSelectObjectSchema.optional()),
        include: z.lazy(() => RoleIncludeObjectSchema.optional()),
        where: RoleWhereInputObjectSchema.optional(),
        orderBy: z
            .union([RoleOrderByWithRelationInputObjectSchema, RoleOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: RoleWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(RoleScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => RoleSelectObjectSchema.optional()),
        include: z.lazy(() => RoleIncludeObjectSchema.optional()),
        where: RoleWhereInputObjectSchema.optional(),
        orderBy: z
            .union([RoleOrderByWithRelationInputObjectSchema, RoleOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: RoleWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(RoleScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => RoleSelectObjectSchema.optional()),
        include: z.lazy(() => RoleIncludeObjectSchema.optional()),
        data: z.union([RoleCreateInputObjectSchema, RoleUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([RoleCreateManyInputObjectSchema, z.array(RoleCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => RoleSelectObjectSchema.optional()),
        include: z.lazy(() => RoleIncludeObjectSchema.optional()),
        where: RoleWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: RoleWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => RoleSelectObjectSchema.optional()),
        include: z.lazy(() => RoleIncludeObjectSchema.optional()),
        data: z.union([RoleUpdateInputObjectSchema, RoleUncheckedUpdateInputObjectSchema]),
        where: RoleWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([RoleUpdateManyMutationInputObjectSchema, RoleUncheckedUpdateManyInputObjectSchema]),
        where: RoleWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => RoleSelectObjectSchema.optional()),
        include: z.lazy(() => RoleIncludeObjectSchema.optional()),
        where: RoleWhereUniqueInputObjectSchema,
        create: z.union([RoleCreateInputObjectSchema, RoleUncheckedCreateInputObjectSchema]),
        update: z.union([RoleUpdateInputObjectSchema, RoleUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: RoleWhereInputObjectSchema.optional(),
        orderBy: z
            .union([RoleOrderByWithRelationInputObjectSchema, RoleOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: RoleWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), RoleCountAggregateInputObjectSchema]).optional(),
        _min: RoleMinAggregateInputObjectSchema.optional(),
        _max: RoleMaxAggregateInputObjectSchema.optional(),
        _avg: RoleAvgAggregateInputObjectSchema.optional(),
        _sum: RoleSumAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: RoleWhereInputObjectSchema.optional(),
        orderBy: z
            .union([RoleOrderByWithAggregationInputObjectSchema, RoleOrderByWithAggregationInputObjectSchema.array()])
            .optional(),
        having: RoleScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(RoleScalarFieldEnumSchema),
        _count: z.union([z.literal(true), RoleCountAggregateInputObjectSchema]).optional(),
        _min: RoleMinAggregateInputObjectSchema.optional(),
        _max: RoleMaxAggregateInputObjectSchema.optional(),
        _avg: RoleAvgAggregateInputObjectSchema.optional(),
        _sum: RoleSumAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: RoleWhereInputObjectSchema.optional(),
        orderBy: z
            .union([RoleOrderByWithRelationInputObjectSchema, RoleOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: RoleWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(RoleScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), RoleCountAggregateInputObjectSchema]).optional(),
    }),
} as RoleInputSchemaType;
