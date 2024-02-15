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
            .input($Schema.CodeRunInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).codeRun.aggregate(input as any))),

        createMany: procedure
            .input($Schema.CodeRunInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).codeRun.createMany(input as any))),

        create: procedure
            .input($Schema.CodeRunInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).codeRun.create(input as any))),

        deleteMany: procedure
            .input($Schema.CodeRunInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).codeRun.deleteMany(input as any))),

        delete: procedure
            .input($Schema.CodeRunInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).codeRun.delete(input as any))),

        findFirst: procedure
            .input($Schema.CodeRunInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).codeRun.findFirst(input as any))),

        findFirstOrThrow: procedure
            .input($Schema.CodeRunInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).codeRun.findFirstOrThrow(input as any))),

        findMany: procedure
            .input($Schema.CodeRunInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).codeRun.findMany(input as any))),

        findUnique: procedure
            .input($Schema.CodeRunInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).codeRun.findUnique(input as any))),

        findUniqueOrThrow: procedure
            .input($Schema.CodeRunInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).codeRun.findUniqueOrThrow(input as any))),

        groupBy: procedure
            .input($Schema.CodeRunInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).codeRun.groupBy(input as any))),

        updateMany: procedure
            .input($Schema.CodeRunInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).codeRun.updateMany(input as any))),

        update: procedure
            .input($Schema.CodeRunInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).codeRun.update(input as any))),

        upsert: procedure
            .input($Schema.CodeRunInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).codeRun.upsert(input as any))),

        count: procedure
            .input($Schema.CodeRunInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).codeRun.count(input as any))),
    });
}
