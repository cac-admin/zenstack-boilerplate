/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    content: z.union([z.string(), z.instanceof(Uint8Array)]),
});
const relationSchema = z.object({
    author: z.record(z.unknown()).optional(),
    subject: z.record(z.unknown()),
    subName: z.string(),
    authorId: z.string(),
});
const fkSchema = z.object({
    subName: z.string(),
    authorId: z.string(),
});
export const LessonScalarSchema = baseSchema.partial();
export const LessonSchema = LessonScalarSchema.merge(relationSchema.partial());
export const LessonPrismaCreateSchema = baseSchema.partial();
export const LessonPrismaUpdateSchema = z
    .object({
        id: z.string(),
        content: z.union([z.string(), z.instanceof(Uint8Array)]),
    })
    .partial();
export const LessonCreateScalarSchema = baseSchema.partial({
    id: true,
});
export const LessonCreateSchema = LessonCreateScalarSchema.merge(fkSchema);
export const LessonUpdateScalarSchema = baseSchema.partial();
export const LessonUpdateSchema = LessonUpdateScalarSchema.merge(fkSchema.partial());
