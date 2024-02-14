/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { LessonSelectObjectSchema } from '../objects/LessonSelect.schema';
import { LessonIncludeObjectSchema } from '../objects/LessonInclude.schema';
import { LessonWhereUniqueInputObjectSchema } from '../objects/LessonWhereUniqueInput.schema';
import { LessonWhereInputObjectSchema } from '../objects/LessonWhereInput.schema';
import { LessonOrderByWithRelationInputObjectSchema } from '../objects/LessonOrderByWithRelationInput.schema';
import { LessonScalarFieldEnumSchema } from '../enums/LessonScalarFieldEnum.schema';
import { LessonCreateInputObjectSchema } from '../objects/LessonCreateInput.schema';
import { LessonUncheckedCreateInputObjectSchema } from '../objects/LessonUncheckedCreateInput.schema';
import { LessonCreateManyInputObjectSchema } from '../objects/LessonCreateManyInput.schema';
import { LessonUpdateInputObjectSchema } from '../objects/LessonUpdateInput.schema';
import { LessonUncheckedUpdateInputObjectSchema } from '../objects/LessonUncheckedUpdateInput.schema';
import { LessonUpdateManyMutationInputObjectSchema } from '../objects/LessonUpdateManyMutationInput.schema';
import { LessonUncheckedUpdateManyInputObjectSchema } from '../objects/LessonUncheckedUpdateManyInput.schema';
import { LessonCountAggregateInputObjectSchema } from '../objects/LessonCountAggregateInput.schema';
import { LessonMinAggregateInputObjectSchema } from '../objects/LessonMinAggregateInput.schema';
import { LessonMaxAggregateInputObjectSchema } from '../objects/LessonMaxAggregateInput.schema';
import { LessonOrderByWithAggregationInputObjectSchema } from '../objects/LessonOrderByWithAggregationInput.schema';
import { LessonScalarWhereWithAggregatesInputObjectSchema } from '../objects/LessonScalarWhereWithAggregatesInput.schema';

type LessonInputSchemaType = {
    findUnique: z.ZodType<Prisma.LessonFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.LessonFindFirstArgs>;
    findMany: z.ZodType<Prisma.LessonFindManyArgs>;
    create: z.ZodType<Prisma.LessonCreateArgs>;
    createMany: z.ZodType<Prisma.LessonCreateManyArgs>;
    delete: z.ZodType<Prisma.LessonDeleteArgs>;
    deleteMany: z.ZodType<Prisma.LessonDeleteManyArgs>;
    update: z.ZodType<Prisma.LessonUpdateArgs>;
    updateMany: z.ZodType<Prisma.LessonUpdateManyArgs>;
    upsert: z.ZodType<Prisma.LessonUpsertArgs>;
    aggregate: z.ZodType<Prisma.LessonAggregateArgs>;
    groupBy: z.ZodType<Prisma.LessonGroupByArgs>;
    count: z.ZodType<Prisma.LessonCountArgs>;
};

export const LessonInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => LessonSelectObjectSchema.optional()),
        include: z.lazy(() => LessonIncludeObjectSchema.optional()),
        where: LessonWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => LessonSelectObjectSchema.optional()),
        include: z.lazy(() => LessonIncludeObjectSchema.optional()),
        where: LessonWhereInputObjectSchema.optional(),
        orderBy: z
            .union([LessonOrderByWithRelationInputObjectSchema, LessonOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: LessonWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(LessonScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => LessonSelectObjectSchema.optional()),
        include: z.lazy(() => LessonIncludeObjectSchema.optional()),
        where: LessonWhereInputObjectSchema.optional(),
        orderBy: z
            .union([LessonOrderByWithRelationInputObjectSchema, LessonOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: LessonWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(LessonScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => LessonSelectObjectSchema.optional()),
        include: z.lazy(() => LessonIncludeObjectSchema.optional()),
        data: z.union([LessonCreateInputObjectSchema, LessonUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([LessonCreateManyInputObjectSchema, z.array(LessonCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => LessonSelectObjectSchema.optional()),
        include: z.lazy(() => LessonIncludeObjectSchema.optional()),
        where: LessonWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: LessonWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => LessonSelectObjectSchema.optional()),
        include: z.lazy(() => LessonIncludeObjectSchema.optional()),
        data: z.union([LessonUpdateInputObjectSchema, LessonUncheckedUpdateInputObjectSchema]),
        where: LessonWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([LessonUpdateManyMutationInputObjectSchema, LessonUncheckedUpdateManyInputObjectSchema]),
        where: LessonWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => LessonSelectObjectSchema.optional()),
        include: z.lazy(() => LessonIncludeObjectSchema.optional()),
        where: LessonWhereUniqueInputObjectSchema,
        create: z.union([LessonCreateInputObjectSchema, LessonUncheckedCreateInputObjectSchema]),
        update: z.union([LessonUpdateInputObjectSchema, LessonUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: LessonWhereInputObjectSchema.optional(),
        orderBy: z
            .union([LessonOrderByWithRelationInputObjectSchema, LessonOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: LessonWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), LessonCountAggregateInputObjectSchema]).optional(),
        _min: LessonMinAggregateInputObjectSchema.optional(),
        _max: LessonMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: LessonWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                LessonOrderByWithAggregationInputObjectSchema,
                LessonOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: LessonScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(LessonScalarFieldEnumSchema),
        _count: z.union([z.literal(true), LessonCountAggregateInputObjectSchema]).optional(),
        _min: LessonMinAggregateInputObjectSchema.optional(),
        _max: LessonMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: LessonWhereInputObjectSchema.optional(),
        orderBy: z
            .union([LessonOrderByWithRelationInputObjectSchema, LessonOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: LessonWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(LessonScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), LessonCountAggregateInputObjectSchema]).optional(),
    }),
} as LessonInputSchemaType;
