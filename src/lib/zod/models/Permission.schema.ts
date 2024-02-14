/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.number(),
    name: z.string(),
});
const relationSchema = z.object({
    roles: z.array(z.unknown()).optional(),
});
export const PermissionScalarSchema = baseSchema.partial();
export const PermissionSchema = PermissionScalarSchema.merge(relationSchema.partial());
export const PermissionPrismaCreateSchema = baseSchema.partial();
export const PermissionPrismaUpdateSchema = z
    .object({
        id: z.union([z.number(), z.record(z.unknown())]),
        name: z.string(),
    })
    .partial();
export const PermissionCreateSchema = baseSchema.partial({
    id: true,
});
export const PermissionUpdateSchema = baseSchema.partial();
