import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
} from "~/server/api/trpc";

export const subjectRouter = createTRPCRouter({
    create: protectedProcedure
        .input(z.object({
            title: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.subject.create({ data: { title: input.title } });
        }),
});
