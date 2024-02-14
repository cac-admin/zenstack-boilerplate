/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { SubjectOrderByWithRelationInputObjectSchema } from './SubjectOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LessonOrderByWithRelationInput>;
export const LessonOrderByWithRelationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        subName: z.lazy(() => SortOrderSchema).optional(),
        authorId: z.lazy(() => SortOrderSchema).optional(),
        content: z.lazy(() => SortOrderSchema).optional(),
        author: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
        subject: z.lazy(() => SubjectOrderByWithRelationInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
