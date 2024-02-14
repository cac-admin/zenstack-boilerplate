/* eslint-disable */
import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
    'id',
    'name',
    'netid',
    'student_number',
    'email',
    'emailVerified',
    'password',
    'image',
]);
