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
            .input($Schema.LessonInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).lesson.aggregate(input as any))),

        create: procedure
            .input($Schema.LessonInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).lesson.create(input as any))),

        deleteMany: procedure
            .input($Schema.LessonInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).lesson.deleteMany(input as any))),

        delete: procedure
            .input($Schema.LessonInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).lesson.delete(input as any))),

        findFirst: procedure
            .input($Schema.LessonInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).lesson.findFirst(input as any))),

        findFirstOrThrow: procedure
            .input($Schema.LessonInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).lesson.findFirstOrThrow(input as any))),

        findMany: procedure
            .input($Schema.LessonInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).lesson.findMany(input as any))),

        findUnique: procedure
            .input($Schema.LessonInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).lesson.findUnique(input as any))),

        findUniqueOrThrow: procedure
            .input($Schema.LessonInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).lesson.findUniqueOrThrow(input as any))),

        groupBy: procedure
            .input($Schema.LessonInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).lesson.groupBy(input as any))),

        updateMany: procedure
            .input($Schema.LessonInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).lesson.updateMany(input as any))),

        update: procedure
            .input($Schema.LessonInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).lesson.update(input as any))),

        upsert: procedure
            .input($Schema.LessonInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).lesson.upsert(input as any))),

        count: procedure
            .input($Schema.LessonInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).lesson.count(input as any))),
    });
}
