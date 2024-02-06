import { writeFileSync } from "fs";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
} from "~/server/api/trpc";
import { env } from "~/env";

const MAX_SIZE = 5000000;
const ACCEPTED_TYPES = ["image/jpeg", "image/jpg"];

export const userRouter = createTRPCRouter({
    getMe: protectedProcedure
        .query(({ ctx }) => {
            return ctx.db.user.findUnique({ where: { id: ctx.session.user.id } });
        }),
    updateMe: protectedProcedure
        .input(z.object({
            name: z.string(),
            netid: z.string(),
            student_number: z.string(),
            image: z.object({
                data: z.string(),
                type: z.string().refine((tp) => ACCEPTED_TYPES.includes(tp)),
                size: z.number().refine((sz) => sz <= MAX_SIZE)
            }).optional()
        }))
        .mutation(async ({ ctx, input }) => {
            if (input.image) {
                console.log(input.image.data.length);
                const buf = Buffer.from(input.image.data, 'base64');

                const client = new S3Client({
                    endpoint: env.CLOUDFLARE_URL,
                    region: 'auto',
                    credentials: {
                        accessKeyId: env.CLOUDFLARE_KEY_ID,
                        secretAccessKey: env.CLOUDFLARE_KEY
                    }
                });

                const command = new PutObjectCommand({
                    Bucket: "qsccmedia",
                    ContentType: "image/jpeg",
                    Key: `${ctx.session.user.id}.jpg`,
                    Body: buf,
                    ContentEncoding: 'binary'
                });

                try {
                    const resp = await client.send(command);
                } catch (e: any) {
                    console.log(`Error: ${e}`);
                }

                return ctx.db.user.update({
                    data: {
                        name: input.name,
                        netid: input.netid,
                        student_number:
                            input.student_number,
                        image: `${env.PUBLIC_BUCKET_URL}/${ctx.session.user.id}.jpg`
                    },
                    where: {
                        id: ctx.session.user.id
                    }
                });
            } else {
                return ctx.db.user.update({
                    data: {
                        name: input.name,
                        netid: input.netid,
                        student_number: input.student_number,
                    },
                    where: {
                        id: ctx.session.user.id
                    }
                });
            }
        }),
});
