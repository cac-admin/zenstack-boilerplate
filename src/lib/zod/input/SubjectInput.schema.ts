/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { SubjectSelectObjectSchema } from '../objects/SubjectSelect.schema';
import { SubjectIncludeObjectSchema } from '../objects/SubjectInclude.schema';
import { SubjectWhereUniqueInputObjectSchema } from '../objects/SubjectWhereUniqueInput.schema';
import { SubjectWhereInputObjectSchema } from '../objects/SubjectWhereInput.schema';
import { SubjectOrderByWithRelationInputObjectSchema } from '../objects/SubjectOrderByWithRelationInput.schema';
import { SubjectScalarFieldEnumSchema } from '../enums/SubjectScalarFieldEnum.schema';
import { SubjectCreateInputObjectSchema } from '../objects/SubjectCreateInput.schema';
import { SubjectUncheckedCreateInputObjectSchema } from '../objects/SubjectUncheckedCreateInput.schema';
import { SubjectCreateManyInputObjectSchema } from '../objects/SubjectCreateManyInput.schema';
import { SubjectUpdateInputObjectSchema } from '../objects/SubjectUpdateInput.schema';
import { SubjectUncheckedUpdateInputObjectSchema } from '../objects/SubjectUncheckedUpdateInput.schema';
import { SubjectUpdateManyMutationInputObjectSchema } from '../objects/SubjectUpdateManyMutationInput.schema';
import { SubjectUncheckedUpdateManyInputObjectSchema } from '../objects/SubjectUncheckedUpdateManyInput.schema';
import { SubjectCountAggregateInputObjectSchema } from '../objects/SubjectCountAggregateInput.schema';
import { SubjectMinAggregateInputObjectSchema } from '../objects/SubjectMinAggregateInput.schema';
import { SubjectMaxAggregateInputObjectSchema } from '../objects/SubjectMaxAggregateInput.schema';
import { SubjectOrderByWithAggregationInputObjectSchema } from '../objects/SubjectOrderByWithAggregationInput.schema';
import { SubjectScalarWhereWithAggregatesInputObjectSchema } from '../objects/SubjectScalarWhereWithAggregatesInput.schema';

type SubjectInputSchemaType = {
    findUnique: z.ZodType<Prisma.SubjectFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.SubjectFindFirstArgs>;
    findMany: z.ZodType<Prisma.SubjectFindManyArgs>;
    create: z.ZodType<Prisma.SubjectCreateArgs>;
    createMany: z.ZodType<Prisma.SubjectCreateManyArgs>;
    delete: z.ZodType<Prisma.SubjectDeleteArgs>;
    deleteMany: z.ZodType<Prisma.SubjectDeleteManyArgs>;
    update: z.ZodType<Prisma.SubjectUpdateArgs>;
    updateMany: z.ZodType<Prisma.SubjectUpdateManyArgs>;
    upsert: z.ZodType<Prisma.SubjectUpsertArgs>;
    aggregate: z.ZodType<Prisma.SubjectAggregateArgs>;
    groupBy: z.ZodType<Prisma.SubjectGroupByArgs>;
    count: z.ZodType<Prisma.SubjectCountArgs>;
};

export const SubjectInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => SubjectSelectObjectSchema.optional()),
        include: z.lazy(() => SubjectIncludeObjectSchema.optional()),
        where: SubjectWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => SubjectSelectObjectSchema.optional()),
        include: z.lazy(() => SubjectIncludeObjectSchema.optional()),
        where: SubjectWhereInputObjectSchema.optional(),
        orderBy: z
            .union([SubjectOrderByWithRelationInputObjectSchema, SubjectOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: SubjectWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(SubjectScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => SubjectSelectObjectSchema.optional()),
        include: z.lazy(() => SubjectIncludeObjectSchema.optional()),
        where: SubjectWhereInputObjectSchema.optional(),
        orderBy: z
            .union([SubjectOrderByWithRelationInputObjectSchema, SubjectOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: SubjectWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(SubjectScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => SubjectSelectObjectSchema.optional()),
        include: z.lazy(() => SubjectIncludeObjectSchema.optional()),
        data: z.union([SubjectCreateInputObjectSchema, SubjectUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([SubjectCreateManyInputObjectSchema, z.array(SubjectCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => SubjectSelectObjectSchema.optional()),
        include: z.lazy(() => SubjectIncludeObjectSchema.optional()),
        where: SubjectWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: SubjectWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => SubjectSelectObjectSchema.optional()),
        include: z.lazy(() => SubjectIncludeObjectSchema.optional()),
        data: z.union([SubjectUpdateInputObjectSchema, SubjectUncheckedUpdateInputObjectSchema]),
        where: SubjectWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([SubjectUpdateManyMutationInputObjectSchema, SubjectUncheckedUpdateManyInputObjectSchema]),
        where: SubjectWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => SubjectSelectObjectSchema.optional()),
        include: z.lazy(() => SubjectIncludeObjectSchema.optional()),
        where: SubjectWhereUniqueInputObjectSchema,
        create: z.union([SubjectCreateInputObjectSchema, SubjectUncheckedCreateInputObjectSchema]),
        update: z.union([SubjectUpdateInputObjectSchema, SubjectUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: SubjectWhereInputObjectSchema.optional(),
        orderBy: z
            .union([SubjectOrderByWithRelationInputObjectSchema, SubjectOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: SubjectWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), SubjectCountAggregateInputObjectSchema]).optional(),
        _min: SubjectMinAggregateInputObjectSchema.optional(),
        _max: SubjectMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: SubjectWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                SubjectOrderByWithAggregationInputObjectSchema,
                SubjectOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: SubjectScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(SubjectScalarFieldEnumSchema),
        _count: z.union([z.literal(true), SubjectCountAggregateInputObjectSchema]).optional(),
        _min: SubjectMinAggregateInputObjectSchema.optional(),
        _max: SubjectMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: SubjectWhereInputObjectSchema.optional(),
        orderBy: z
            .union([SubjectOrderByWithRelationInputObjectSchema, SubjectOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: SubjectWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(SubjectScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), SubjectCountAggregateInputObjectSchema]).optional(),
    }),
} as SubjectInputSchemaType;
