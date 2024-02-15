/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.number(),
    time: z.bigint(),
    createdAt: z.date().default(() => new Date()),
});
const relationSchema = z.object({
    createdBy: z.record(z.unknown()),
    createdById: z.string(),
});
const fkSchema = z.object({
    createdById: z.string(),
});
export const CodeRunScalarSchema = baseSchema.partial({
    id: true,
    time: true,
});
export const CodeRunSchema = CodeRunScalarSchema.merge(relationSchema.partial());
export const CodeRunPrismaCreateSchema = baseSchema.partial();
export const CodeRunPrismaUpdateSchema = z
    .object({
        id: z.union([z.number(), z.record(z.unknown())]),
        time: z.bigint(),
        createdAt: z.date(),
    })
    .partial();
export const CodeRunCreateScalarSchema = baseSchema.partial({
    id: true,
    createdAt: true,
});
export const CodeRunCreateSchema = CodeRunCreateScalarSchema.merge(fkSchema);
export const CodeRunUpdateScalarSchema = baseSchema.partial();
export const CodeRunUpdateSchema = CodeRunUpdateScalarSchema.merge(fkSchema.partial());
