/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    name: z.string().nullish(),
    netid: z.string().nullish(),
    student_number: z.string().nullish(),
    email: z.string(),
    emailVerified: z.date().nullish(),
    password: z.string(),
    image: z.string().nullish(),
});
const relationSchema = z.object({
    accounts: z.array(z.unknown()).optional(),
    sessions: z.array(z.unknown()).optional(),
    codeRuns: z.array(z.unknown()).optional(),
    lessons: z.array(z.unknown()).optional(),
    roles: z.array(z.unknown()).optional(),
});
export const UserScalarSchema = baseSchema.partial().omit({
    password: true,
});
export const UserSchema = UserScalarSchema.merge(relationSchema.partial());
export const UserPrismaCreateSchema = baseSchema.partial();
export const UserPrismaUpdateSchema = z
    .object({
        id: z.string(),
        name: z.string().nullish(),
        netid: z.string().nullish(),
        student_number: z.string().nullish(),
        email: z.string(),
        emailVerified: z.date().nullish(),
        password: z.string(),
        image: z.string().nullish(),
    })
    .partial();
export const UserCreateSchema = baseSchema.partial({
    id: true,
});
export const UserUpdateSchema = baseSchema.partial();
