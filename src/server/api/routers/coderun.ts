import { execFileSync, execSync } from "child_process";
import { writeFileSync } from "fs";
import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";

export const codeRunRouter = createTRPCRouter({
    top: publicProcedure
        .input(z.object({ num: z.bigint() }))
        .query(({ input }) => {
            return {
                greeting: `Hello ${input.num}`,
            };
        }),

    create: protectedProcedure
        .input(z.object({
            lang: z.string(), file: z.string()
        }))
        .mutation(async ({ ctx, input }) => {
            if (input.lang === 'C') {
                writeFileSync('./test.c', input.file);

                try {
                    execSync('gcc ./test.c');
                } catch (e: unknown) {
                    console.log(e);
                    return e;
                }

                try {
                    const start = process.hrtime();
                    if (process.platform === 'win32') {
                        const out = execFileSync('./a.exe');
                    } else {
                        const out = execFileSync('./a.out');
                    }
                    const end = process.hrtime();
                    return `Time (ns): ${end[1] - start[1]}`;
                } catch (e: unknown) {
                    console.log(e);
                    return e;
                }
            }
            return "WRONG";
        }),
});
