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
            .input($Schema.AccountInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).account.aggregate(input as any))),

        create: procedure
            .input($Schema.AccountInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.create(input as any))),

        deleteMany: procedure
            .input($Schema.AccountInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.deleteMany(input as any))),

        delete: procedure
            .input($Schema.AccountInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.delete(input as any))),

        findFirst: procedure
            .input($Schema.AccountInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findFirst(input as any))),

        findFirstOrThrow: procedure
            .input($Schema.AccountInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findFirstOrThrow(input as any))),

        findMany: procedure
            .input($Schema.AccountInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findMany(input as any))),

        findUnique: procedure
            .input($Schema.AccountInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findUnique(input as any))),

        findUniqueOrThrow: procedure
            .input($Schema.AccountInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findUniqueOrThrow(input as any))),

        groupBy: procedure
            .input($Schema.AccountInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).account.groupBy(input as any))),

        updateMany: procedure
            .input($Schema.AccountInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.updateMany(input as any))),

        update: procedure
            .input($Schema.AccountInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.update(input as any))),

        upsert: procedure
            .input($Schema.AccountInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.upsert(input as any))),

        count: procedure
            .input($Schema.AccountInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).account.count(input as any))),
    });
}
