/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    sessionToken: z.string(),
    expires: z.date(),
});
const relationSchema = z.object({
    user: z.record(z.unknown()),
    userId: z.string(),
});
const fkSchema = z.object({
    userId: z.string(),
});
export const SessionScalarSchema = baseSchema.partial();
export const SessionSchema = SessionScalarSchema.merge(relationSchema.partial());
export const SessionPrismaCreateSchema = baseSchema.partial();
export const SessionPrismaUpdateSchema = z
    .object({
        id: z.string(),
        sessionToken: z.string(),
        expires: z.date(),
    })
    .partial();
export const SessionCreateScalarSchema = baseSchema.partial({
    id: true,
});
export const SessionCreateSchema = SessionCreateScalarSchema.merge(fkSchema);
export const SessionUpdateScalarSchema = baseSchema.partial();
export const SessionUpdateSchema = SessionUpdateScalarSchema.merge(fkSchema.partial());
