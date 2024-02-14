/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    type: z.string(),
    provider: z.string(),
    providerAccountId: z.string(),
    refresh_token: z.string().nullish(),
    access_token: z.string().nullish(),
    expires_at: z.number().nullish(),
    token_type: z.string().nullish(),
    scope: z.string().nullish(),
    id_token: z.string().nullish(),
    session_state: z.string().nullish(),
});
const relationSchema = z.object({
    user: z.record(z.unknown()),
    userId: z.string(),
});
const fkSchema = z.object({
    userId: z.string(),
});
export const AccountScalarSchema = baseSchema.partial();
export const AccountSchema = AccountScalarSchema.merge(relationSchema.partial());
export const AccountPrismaCreateSchema = baseSchema.partial();
export const AccountPrismaUpdateSchema = z
    .object({
        id: z.string(),
        type: z.string(),
        provider: z.string(),
        providerAccountId: z.string(),
        refresh_token: z.string().nullish(),
        access_token: z.string().nullish(),
        expires_at: z.union([z.number().nullish(), z.record(z.unknown())]),
        token_type: z.string().nullish(),
        scope: z.string().nullish(),
        id_token: z.string().nullish(),
        session_state: z.string().nullish(),
    })
    .partial();
export const AccountCreateScalarSchema = baseSchema.partial({
    id: true,
});
export const AccountCreateSchema = AccountCreateScalarSchema.merge(fkSchema);
export const AccountUpdateScalarSchema = baseSchema.partial();
export const AccountUpdateSchema = AccountUpdateScalarSchema.merge(fkSchema.partial());
