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
            .input($Schema.PermissionInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).permission.aggregate(input as any))),

        createMany: procedure
            .input($Schema.PermissionInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).permission.createMany(input as any))),

        create: procedure
            .input($Schema.PermissionInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).permission.create(input as any))),

        deleteMany: procedure
            .input($Schema.PermissionInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).permission.deleteMany(input as any))),

        delete: procedure
            .input($Schema.PermissionInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).permission.delete(input as any))),

        findFirst: procedure
            .input($Schema.PermissionInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).permission.findFirst(input as any))),

        findFirstOrThrow: procedure
            .input($Schema.PermissionInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).permission.findFirstOrThrow(input as any))),

        findMany: procedure
            .input($Schema.PermissionInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).permission.findMany(input as any))),

        findUnique: procedure
            .input($Schema.PermissionInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).permission.findUnique(input as any))),

        findUniqueOrThrow: procedure
            .input($Schema.PermissionInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).permission.findUniqueOrThrow(input as any))),

        groupBy: procedure
            .input($Schema.PermissionInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).permission.groupBy(input as any))),

        updateMany: procedure
            .input($Schema.PermissionInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).permission.updateMany(input as any))),

        update: procedure
            .input($Schema.PermissionInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).permission.update(input as any))),

        upsert: procedure
            .input($Schema.PermissionInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).permission.upsert(input as any))),

        count: procedure
            .input($Schema.PermissionInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).permission.count(input as any))),
    });
}
