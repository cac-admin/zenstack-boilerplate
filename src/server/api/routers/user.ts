import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";
import { env } from "~/env";

const MAX_SIZE = 5000000;
const ACCEPTED_TYPES = ["image/jpeg", "image/jpg"];

export const userRouter = createTRPCRouter({
    getMe: publicProcedure
        .query(({ ctx }) => {
            if (ctx.session) {
                return ctx.prisma.user.findUnique({ where: { id: ctx.session.user.id }, include: { roles: { include: { permissions: true } } } });
            } else {
                return null;
            }
        }),
    updateMe: protectedProcedure
        .input(z.object({
            name: z.string(),
            netid: z.string(),
            student_number: z.string(),
            image: z.object({
                data: z.string().optional(),
                type: z.string().refine(
                    (tp) => ACCEPTED_TYPES.includes(tp),
                    {
                        message: `Image type not supported. Supported types are: ${ACCEPTED_TYPES.reduce((prev, cur) => `${prev}, ${cur}`)}`,
                    }).optional(),
                size: z.number().refine((sz) => sz <= MAX_SIZE).optional()
            }).optional()
        }))
        .mutation(async ({ ctx, input }) => {
            if (input.image?.data) {
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
                    await client.send(command);
                } catch (e: unknown) {
                    console.log(e);
                }

                return ctx.prisma.user.update({
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
                return ctx.prisma.user.update({
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
