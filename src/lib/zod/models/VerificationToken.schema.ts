/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    identifier: z.string(),
    token: z.string(),
    expires: z.date(),
});
export const VerificationTokenSchema = baseSchema.partial();
export const VerificationTokenPrismaCreateSchema = baseSchema.partial();
export const VerificationTokenPrismaUpdateSchema = z
    .object({
        identifier: z.string(),
        token: z.string(),
        expires: z.date(),
    })
    .partial();
export const VerificationTokenCreateSchema = baseSchema;
export const VerificationTokenUpdateSchema = baseSchema.partial();
