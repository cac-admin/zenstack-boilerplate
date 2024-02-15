/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LessonOrderByRelationAggregateInputObjectSchema } from './LessonOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SubjectOrderByWithRelationInput>;
export const SubjectOrderByWithRelationInputObjectSchema: SchemaType = z
    .object({
        name: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        lessons: z.lazy(() => LessonOrderByRelationAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
