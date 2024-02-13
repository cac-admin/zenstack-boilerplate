import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";
import { codeRunRouter } from "./routers/coderun";
import { userRouter } from "./routers/user";
import { createRouter } from "../routers/generated/routers";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter(
    {
        // ZenStack automatically generated routes. (Both public and private)
        zen: createRouter(createTRPCRouter, publicProcedure),
        code: codeRunRouter,
        user: userRouter
    });

// export type definition of API
export type AppRouter = typeof appRouter;
