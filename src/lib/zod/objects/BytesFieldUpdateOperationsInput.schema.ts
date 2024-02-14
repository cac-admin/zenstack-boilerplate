/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BytesFieldUpdateOperationsInput>;
export const BytesFieldUpdateOperationsInputObjectSchema: SchemaType = z
    .object({
        set: z.instanceof(Uint8Array).optional(),
    })
    .strict() as SchemaType;
