/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { CodeRunOrderByRelationAggregateInputObjectSchema } from './CodeRunOrderByRelationAggregateInput.schema';
import { LessonOrderByRelationAggregateInputObjectSchema } from './LessonOrderByRelationAggregateInput.schema';
import { RoleOrderByRelationAggregateInputObjectSchema } from './RoleOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        netid: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        student_number: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        email: z.lazy(() => SortOrderSchema).optional(),
        emailVerified: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        password: z.lazy(() => SortOrderSchema).optional(),
        image: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        accounts: z.lazy(() => AccountOrderByRelationAggregateInputObjectSchema).optional(),
        sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional(),
        codeRuns: z.lazy(() => CodeRunOrderByRelationAggregateInputObjectSchema).optional(),
        lessons: z.lazy(() => LessonOrderByRelationAggregateInputObjectSchema).optional(),
        roles: z.lazy(() => RoleOrderByRelationAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
