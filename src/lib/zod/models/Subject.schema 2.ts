/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    name: z.string(),
    createdAt: z.date().default(() => new Date()),
});
const relationSchema = z.object({
    lessons: z.array(z.unknown()).optional(),
});
export const SubjectScalarSchema = baseSchema.partial({
    name: true,
});
export const SubjectSchema = SubjectScalarSchema.merge(relationSchema.partial());
export const SubjectPrismaCreateSchema = baseSchema.partial();
export const SubjectPrismaUpdateSchema = z
    .object({
        name: z.string(),
        createdAt: z.date(),
    })
    .partial();
export const SubjectCreateSchema = baseSchema.partial({
    createdAt: true,
});
export const SubjectUpdateSchema = baseSchema.partial();
