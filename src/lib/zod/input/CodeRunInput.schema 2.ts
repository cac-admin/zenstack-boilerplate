/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { CodeRunSelectObjectSchema } from '../objects/CodeRunSelect.schema';
import { CodeRunIncludeObjectSchema } from '../objects/CodeRunInclude.schema';
import { CodeRunWhereUniqueInputObjectSchema } from '../objects/CodeRunWhereUniqueInput.schema';
import { CodeRunWhereInputObjectSchema } from '../objects/CodeRunWhereInput.schema';
import { CodeRunOrderByWithRelationInputObjectSchema } from '../objects/CodeRunOrderByWithRelationInput.schema';
import { CodeRunScalarFieldEnumSchema } from '../enums/CodeRunScalarFieldEnum.schema';
import { CodeRunCreateInputObjectSchema } from '../objects/CodeRunCreateInput.schema';
import { CodeRunUncheckedCreateInputObjectSchema } from '../objects/CodeRunUncheckedCreateInput.schema';
import { CodeRunCreateManyInputObjectSchema } from '../objects/CodeRunCreateManyInput.schema';
import { CodeRunUpdateInputObjectSchema } from '../objects/CodeRunUpdateInput.schema';
import { CodeRunUncheckedUpdateInputObjectSchema } from '../objects/CodeRunUncheckedUpdateInput.schema';
import { CodeRunUpdateManyMutationInputObjectSchema } from '../objects/CodeRunUpdateManyMutationInput.schema';
import { CodeRunUncheckedUpdateManyInputObjectSchema } from '../objects/CodeRunUncheckedUpdateManyInput.schema';
import { CodeRunCountAggregateInputObjectSchema } from '../objects/CodeRunCountAggregateInput.schema';
import { CodeRunMinAggregateInputObjectSchema } from '../objects/CodeRunMinAggregateInput.schema';
import { CodeRunMaxAggregateInputObjectSchema } from '../objects/CodeRunMaxAggregateInput.schema';
import { CodeRunAvgAggregateInputObjectSchema } from '../objects/CodeRunAvgAggregateInput.schema';
import { CodeRunSumAggregateInputObjectSchema } from '../objects/CodeRunSumAggregateInput.schema';
import { CodeRunOrderByWithAggregationInputObjectSchema } from '../objects/CodeRunOrderByWithAggregationInput.schema';
import { CodeRunScalarWhereWithAggregatesInputObjectSchema } from '../objects/CodeRunScalarWhereWithAggregatesInput.schema';

type CodeRunInputSchemaType = {
    findUnique: z.ZodType<Prisma.CodeRunFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.CodeRunFindFirstArgs>;
    findMany: z.ZodType<Prisma.CodeRunFindManyArgs>;
    create: z.ZodType<Prisma.CodeRunCreateArgs>;
    createMany: z.ZodType<Prisma.CodeRunCreateManyArgs>;
    delete: z.ZodType<Prisma.CodeRunDeleteArgs>;
    deleteMany: z.ZodType<Prisma.CodeRunDeleteManyArgs>;
    update: z.ZodType<Prisma.CodeRunUpdateArgs>;
    updateMany: z.ZodType<Prisma.CodeRunUpdateManyArgs>;
    upsert: z.ZodType<Prisma.CodeRunUpsertArgs>;
    aggregate: z.ZodType<Prisma.CodeRunAggregateArgs>;
    groupBy: z.ZodType<Prisma.CodeRunGroupByArgs>;
    count: z.ZodType<Prisma.CodeRunCountArgs>;
};

export const CodeRunInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => CodeRunSelectObjectSchema.optional()),
        include: z.lazy(() => CodeRunIncludeObjectSchema.optional()),
        where: CodeRunWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => CodeRunSelectObjectSchema.optional()),
        include: z.lazy(() => CodeRunIncludeObjectSchema.optional()),
        where: CodeRunWhereInputObjectSchema.optional(),
        orderBy: z
            .union([CodeRunOrderByWithRelationInputObjectSchema, CodeRunOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: CodeRunWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(CodeRunScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => CodeRunSelectObjectSchema.optional()),
        include: z.lazy(() => CodeRunIncludeObjectSchema.optional()),
        where: CodeRunWhereInputObjectSchema.optional(),
        orderBy: z
            .union([CodeRunOrderByWithRelationInputObjectSchema, CodeRunOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: CodeRunWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(CodeRunScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => CodeRunSelectObjectSchema.optional()),
        include: z.lazy(() => CodeRunIncludeObjectSchema.optional()),
        data: z.union([CodeRunCreateInputObjectSchema, CodeRunUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([CodeRunCreateManyInputObjectSchema, z.array(CodeRunCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => CodeRunSelectObjectSchema.optional()),
        include: z.lazy(() => CodeRunIncludeObjectSchema.optional()),
        where: CodeRunWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: CodeRunWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => CodeRunSelectObjectSchema.optional()),
        include: z.lazy(() => CodeRunIncludeObjectSchema.optional()),
        data: z.union([CodeRunUpdateInputObjectSchema, CodeRunUncheckedUpdateInputObjectSchema]),
        where: CodeRunWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([CodeRunUpdateManyMutationInputObjectSchema, CodeRunUncheckedUpdateManyInputObjectSchema]),
        where: CodeRunWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => CodeRunSelectObjectSchema.optional()),
        include: z.lazy(() => CodeRunIncludeObjectSchema.optional()),
        where: CodeRunWhereUniqueInputObjectSchema,
        create: z.union([CodeRunCreateInputObjectSchema, CodeRunUncheckedCreateInputObjectSchema]),
        update: z.union([CodeRunUpdateInputObjectSchema, CodeRunUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: CodeRunWhereInputObjectSchema.optional(),
        orderBy: z
            .union([CodeRunOrderByWithRelationInputObjectSchema, CodeRunOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: CodeRunWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), CodeRunCountAggregateInputObjectSchema]).optional(),
        _min: CodeRunMinAggregateInputObjectSchema.optional(),
        _max: CodeRunMaxAggregateInputObjectSchema.optional(),
        _avg: CodeRunAvgAggregateInputObjectSchema.optional(),
        _sum: CodeRunSumAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: CodeRunWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                CodeRunOrderByWithAggregationInputObjectSchema,
                CodeRunOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: CodeRunScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(CodeRunScalarFieldEnumSchema),
        _count: z.union([z.literal(true), CodeRunCountAggregateInputObjectSchema]).optional(),
        _min: CodeRunMinAggregateInputObjectSchema.optional(),
        _max: CodeRunMaxAggregateInputObjectSchema.optional(),
        _avg: CodeRunAvgAggregateInputObjectSchema.optional(),
        _sum: CodeRunSumAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: CodeRunWhereInputObjectSchema.optional(),
        orderBy: z
            .union([CodeRunOrderByWithRelationInputObjectSchema, CodeRunOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: CodeRunWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(CodeRunScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), CodeRunCountAggregateInputObjectSchema]).optional(),
    }),
} as CodeRunInputSchemaType;
