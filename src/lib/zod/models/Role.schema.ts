/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.number(),
    name: z.string(),
});
const relationSchema = z.object({
    permissions: z.array(z.unknown()).optional(),
    users: z.array(z.unknown()).optional(),
});
export const RoleScalarSchema = baseSchema.partial();
export const RoleSchema = RoleScalarSchema.merge(relationSchema.partial());
export const RolePrismaCreateSchema = baseSchema.partial();
export const RolePrismaUpdateSchema = z
    .object({
        id: z.union([z.number(), z.record(z.unknown())]),
        name: z.string(),
    })
    .partial();
export const RoleCreateSchema = baseSchema.partial({
    id: true,
});
export const RoleUpdateSchema = baseSchema.partial();
