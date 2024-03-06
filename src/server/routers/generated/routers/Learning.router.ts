/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from '.';
import $Schema from '@zenstackhq/runtime/zod/input';
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Config extends BaseConfig>(
    router: RouterFactory<Config>,
    procedure: ProcBuilder<Config>,
) {
    return router({
        aggregate: procedure
            .input($Schema.LearningInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).learning.aggregate(input as any))),

        createMany: procedure
            .input($Schema.LearningInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).learning.createMany(input as any))),

        create: procedure
            .input($Schema.LearningInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).learning.create(input as any))),

        deleteMany: procedure
            .input($Schema.LearningInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).learning.deleteMany(input as any))),

        delete: procedure
            .input($Schema.LearningInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).learning.delete(input as any))),

        findFirst: procedure
            .input($Schema.LearningInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).learning.findFirst(input as any))),

        findFirstOrThrow: procedure
            .input($Schema.LearningInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).learning.findFirstOrThrow(input as any))),

        findMany: procedure
            .input($Schema.LearningInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).learning.findMany(input as any))),

        findUnique: procedure
            .input($Schema.LearningInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).learning.findUnique(input as any))),

        findUniqueOrThrow: procedure
            .input($Schema.LearningInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).learning.findUniqueOrThrow(input as any))),

        groupBy: procedure
            .input($Schema.LearningInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).learning.groupBy(input as any))),

        updateMany: procedure
            .input($Schema.LearningInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).learning.updateMany(input as any))),

        update: procedure
            .input($Schema.LearningInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).learning.update(input as any))),

        upsert: procedure
            .input($Schema.LearningInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).learning.upsert(input as any))),

        count: procedure
            .input($Schema.LearningInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).learning.count(input as any))),
    });
}
