/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { SessionSelectObjectSchema } from '../objects/SessionSelect.schema';
import { SessionIncludeObjectSchema } from '../objects/SessionInclude.schema';
import { SessionWhereUniqueInputObjectSchema } from '../objects/SessionWhereUniqueInput.schema';
import { SessionWhereInputObjectSchema } from '../objects/SessionWhereInput.schema';
import { SessionOrderByWithRelationInputObjectSchema } from '../objects/SessionOrderByWithRelationInput.schema';
import { SessionScalarFieldEnumSchema } from '../enums/SessionScalarFieldEnum.schema';
import { SessionCreateInputObjectSchema } from '../objects/SessionCreateInput.schema';
import { SessionUncheckedCreateInputObjectSchema } from '../objects/SessionUncheckedCreateInput.schema';
import { SessionCreateManyInputObjectSchema } from '../objects/SessionCreateManyInput.schema';
import { SessionUpdateInputObjectSchema } from '../objects/SessionUpdateInput.schema';
import { SessionUncheckedUpdateInputObjectSchema } from '../objects/SessionUncheckedUpdateInput.schema';
import { SessionUpdateManyMutationInputObjectSchema } from '../objects/SessionUpdateManyMutationInput.schema';
import { SessionUncheckedUpdateManyInputObjectSchema } from '../objects/SessionUncheckedUpdateManyInput.schema';
import { SessionCountAggregateInputObjectSchema } from '../objects/SessionCountAggregateInput.schema';
import { SessionMinAggregateInputObjectSchema } from '../objects/SessionMinAggregateInput.schema';
import { SessionMaxAggregateInputObjectSchema } from '../objects/SessionMaxAggregateInput.schema';
import { SessionOrderByWithAggregationInputObjectSchema } from '../objects/SessionOrderByWithAggregationInput.schema';
import { SessionScalarWhereWithAggregatesInputObjectSchema } from '../objects/SessionScalarWhereWithAggregatesInput.schema';

type SessionInputSchemaType = {
    findUnique: z.ZodType<Prisma.SessionFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.SessionFindFirstArgs>;
    findMany: z.ZodType<Prisma.SessionFindManyArgs>;
    create: z.ZodType<Prisma.SessionCreateArgs>;
    createMany: z.ZodType<Prisma.SessionCreateManyArgs>;
    delete: z.ZodType<Prisma.SessionDeleteArgs>;
    deleteMany: z.ZodType<Prisma.SessionDeleteManyArgs>;
    update: z.ZodType<Prisma.SessionUpdateArgs>;
    updateMany: z.ZodType<Prisma.SessionUpdateManyArgs>;
    upsert: z.ZodType<Prisma.SessionUpsertArgs>;
    aggregate: z.ZodType<Prisma.SessionAggregateArgs>;
    groupBy: z.ZodType<Prisma.SessionGroupByArgs>;
    count: z.ZodType<Prisma.SessionCountArgs>;
};

export const SessionInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => SessionSelectObjectSchema.optional()),
        include: z.lazy(() => SessionIncludeObjectSchema.optional()),
        where: SessionWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => SessionSelectObjectSchema.optional()),
        include: z.lazy(() => SessionIncludeObjectSchema.optional()),
        where: SessionWhereInputObjectSchema.optional(),
        orderBy: z
            .union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: SessionWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(SessionScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => SessionSelectObjectSchema.optional()),
        include: z.lazy(() => SessionIncludeObjectSchema.optional()),
        where: SessionWhereInputObjectSchema.optional(),
        orderBy: z
            .union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: SessionWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(SessionScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => SessionSelectObjectSchema.optional()),
        include: z.lazy(() => SessionIncludeObjectSchema.optional()),
        data: z.union([SessionCreateInputObjectSchema, SessionUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([SessionCreateManyInputObjectSchema, z.array(SessionCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => SessionSelectObjectSchema.optional()),
        include: z.lazy(() => SessionIncludeObjectSchema.optional()),
        where: SessionWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: SessionWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => SessionSelectObjectSchema.optional()),
        include: z.lazy(() => SessionIncludeObjectSchema.optional()),
        data: z.union([SessionUpdateInputObjectSchema, SessionUncheckedUpdateInputObjectSchema]),
        where: SessionWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([SessionUpdateManyMutationInputObjectSchema, SessionUncheckedUpdateManyInputObjectSchema]),
        where: SessionWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => SessionSelectObjectSchema.optional()),
        include: z.lazy(() => SessionIncludeObjectSchema.optional()),
        where: SessionWhereUniqueInputObjectSchema,
        create: z.union([SessionCreateInputObjectSchema, SessionUncheckedCreateInputObjectSchema]),
        update: z.union([SessionUpdateInputObjectSchema, SessionUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: SessionWhereInputObjectSchema.optional(),
        orderBy: z
            .union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: SessionWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), SessionCountAggregateInputObjectSchema]).optional(),
        _min: SessionMinAggregateInputObjectSchema.optional(),
        _max: SessionMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: SessionWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                SessionOrderByWithAggregationInputObjectSchema,
                SessionOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: SessionScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(SessionScalarFieldEnumSchema),
        _count: z.union([z.literal(true), SessionCountAggregateInputObjectSchema]).optional(),
        _min: SessionMinAggregateInputObjectSchema.optional(),
        _max: SessionMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: SessionWhereInputObjectSchema.optional(),
        orderBy: z
            .union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: SessionWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(SessionScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), SessionCountAggregateInputObjectSchema]).optional(),
    }),
} as SessionInputSchemaType;
