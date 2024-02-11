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
            .input($Schema.SubjectInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).subject.aggregate(input as any))),

        create: procedure
            .input($Schema.SubjectInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).subject.create(input as any))),

        deleteMany: procedure
            .input($Schema.SubjectInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).subject.deleteMany(input as any))),

        delete: procedure
            .input($Schema.SubjectInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).subject.delete(input as any))),

        findFirst: procedure
            .input($Schema.SubjectInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).subject.findFirst(input as any))),

        findFirstOrThrow: procedure
            .input($Schema.SubjectInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).subject.findFirstOrThrow(input as any))),

        findMany: procedure
            .input($Schema.SubjectInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).subject.findMany(input as any))),

        findUnique: procedure
            .input($Schema.SubjectInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).subject.findUnique(input as any))),

        findUniqueOrThrow: procedure
            .input($Schema.SubjectInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).subject.findUniqueOrThrow(input as any))),

        groupBy: procedure
            .input($Schema.SubjectInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).subject.groupBy(input as any))),

        updateMany: procedure
            .input($Schema.SubjectInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).subject.updateMany(input as any))),

        update: procedure
            .input($Schema.SubjectInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).subject.update(input as any))),

        upsert: procedure
            .input($Schema.SubjectInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).subject.upsert(input as any))),

        count: procedure
            .input($Schema.SubjectInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).subject.count(input as any))),
    });
}
