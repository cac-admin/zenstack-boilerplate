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
            .input($Schema.RoleInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).role.aggregate(input as any))),

        createMany: procedure
            .input($Schema.RoleInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.createMany(input as any))),

        create: procedure
            .input($Schema.RoleInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.create(input as any))),

        deleteMany: procedure
            .input($Schema.RoleInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.deleteMany(input as any))),

        delete: procedure
            .input($Schema.RoleInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.delete(input as any))),

        findFirst: procedure
            .input($Schema.RoleInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).role.findFirst(input as any))),

        findFirstOrThrow: procedure
            .input($Schema.RoleInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).role.findFirstOrThrow(input as any))),

        findMany: procedure
            .input($Schema.RoleInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).role.findMany(input as any))),

        findUnique: procedure
            .input($Schema.RoleInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).role.findUnique(input as any))),

        findUniqueOrThrow: procedure
            .input($Schema.RoleInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).role.findUniqueOrThrow(input as any))),

        groupBy: procedure
            .input($Schema.RoleInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).role.groupBy(input as any))),

        updateMany: procedure
            .input($Schema.RoleInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.updateMany(input as any))),

        update: procedure
            .input($Schema.RoleInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.update(input as any))),

        upsert: procedure
            .input($Schema.RoleInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.upsert(input as any))),

        count: procedure
            .input($Schema.RoleInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).role.count(input as any))),
    });
}
