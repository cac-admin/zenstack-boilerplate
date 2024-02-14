/* eslint-disable */
import type { Prisma } from '@prisma/client';
import {
    type GetNextArgs,
    type QueryOptions,
    type InfiniteQueryOptions,
    type MutationOptions,
    type PickEnumerable,
    useHooksContext,
} from '@zenstackhq/swr/runtime';
import metadata from './__model_meta';
import * as request from '@zenstackhq/swr/runtime';

/** @deprecated Use mutation hooks (useCreateXXX, useUpdateXXX, etc.) instead. */
export function useMutateLesson() {
    const { endpoint, fetch } = useHooksContext();
    const invalidate = request.useInvalidation('Lesson', metadata);

    /** @deprecated Use `useCreateLesson` hook instead. */
    async function createLesson<T extends Prisma.LessonCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.LessonCreateArgs>,
    ) {
        return await request.mutationRequest<Prisma.LessonGetPayload<Prisma.LessonCreateArgs> | undefined, true>(
            'POST',
            `${endpoint}/lesson/create`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useCreateManyLesson` hook instead. */
    async function createManyLesson<T extends Prisma.LessonCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.LessonCreateManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'POST',
            `${endpoint}/lesson/createMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }

    /** @deprecated Use `useUpdateLesson` hook instead. */
    async function updateLesson<T extends Prisma.LessonUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.LessonUpdateArgs>,
    ) {
        return await request.mutationRequest<Prisma.LessonGetPayload<Prisma.LessonUpdateArgs> | undefined, true>(
            'PUT',
            `${endpoint}/lesson/update`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useUpdateManyLesson` hook instead. */
    async function updateManyLesson<T extends Prisma.LessonUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.LessonUpdateManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'PUT',
            `${endpoint}/lesson/updateMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }

    /** @deprecated Use `useUpsertLesson` hook instead. */
    async function upsertLesson<T extends Prisma.LessonUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.LessonUpsertArgs>,
    ) {
        return await request.mutationRequest<Prisma.LessonGetPayload<Prisma.LessonUpsertArgs> | undefined, true>(
            'POST',
            `${endpoint}/lesson/upsert`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteLesson` hook instead. */
    async function deleteLesson<T extends Prisma.LessonDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.LessonDeleteArgs>,
    ) {
        return await request.mutationRequest<Prisma.LessonGetPayload<Prisma.LessonDeleteArgs> | undefined, true>(
            'DELETE',
            `${endpoint}/lesson/delete`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteManyLesson` hook instead. */
    async function deleteManyLesson<T extends Prisma.LessonDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.LessonDeleteManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'DELETE',
            `${endpoint}/lesson/deleteMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }
    return {
        createLesson,
        createManyLesson,
        updateLesson,
        updateManyLesson,
        upsertLesson,
        deleteLesson,
        deleteManyLesson,
    };
}

export function useCreateLesson(
    options?: MutationOptions<
        Prisma.LessonGetPayload<Prisma.LessonCreateArgs> | undefined,
        unknown,
        Prisma.LessonCreateArgs
    >,
) {
    const mutation = request.useModelMutation('Lesson', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.LessonCreateArgs>(args: Prisma.SelectSubset<T, Prisma.LessonCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.LessonGetPayload<T> | undefined>;
        },
    };
}

export function useCreateManyLesson(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.LessonCreateManyArgs>,
) {
    const mutation = request.useModelMutation('Lesson', 'POST', 'createMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.LessonCreateManyArgs>(args: Prisma.SelectSubset<T, Prisma.LessonCreateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useFindManyLesson<T extends Prisma.LessonFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.LessonFindManyArgs>,
    options?: QueryOptions<Array<Prisma.LessonGetPayload<T> & { $optimistic?: boolean }>>,
) {
    return request.useModelQuery('Lesson', 'findMany', args, options);
}

export function useInfiniteFindManyLesson<
    T extends Prisma.LessonFindManyArgs,
    R extends Array<Prisma.LessonGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.LessonFindManyArgs> | undefined, R>,
    options?: InfiniteQueryOptions<Array<Prisma.LessonGetPayload<T>>>,
) {
    return request.useInfiniteModelQuery('Lesson', 'findMany', getNextArgs, options);
}

export function useFindUniqueLesson<T extends Prisma.LessonFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.LessonFindUniqueArgs>,
    options?: QueryOptions<Prisma.LessonGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Lesson', 'findUnique', args, options);
}

export function useFindFirstLesson<T extends Prisma.LessonFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.LessonFindFirstArgs>,
    options?: QueryOptions<Prisma.LessonGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Lesson', 'findFirst', args, options);
}

export function useUpdateLesson(
    options?: MutationOptions<
        Prisma.LessonGetPayload<Prisma.LessonUpdateArgs> | undefined,
        unknown,
        Prisma.LessonUpdateArgs
    >,
) {
    const mutation = request.useModelMutation('Lesson', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.LessonUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.LessonUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.LessonGetPayload<T> | undefined>;
        },
    };
}

export function useUpdateManyLesson(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.LessonUpdateManyArgs>,
) {
    const mutation = request.useModelMutation('Lesson', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.LessonUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.LessonUpdateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useUpsertLesson(
    options?: MutationOptions<
        Prisma.LessonGetPayload<Prisma.LessonUpsertArgs> | undefined,
        unknown,
        Prisma.LessonUpsertArgs
    >,
) {
    const mutation = request.useModelMutation('Lesson', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.LessonUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.LessonUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.LessonGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteLesson(
    options?: MutationOptions<
        Prisma.LessonGetPayload<Prisma.LessonDeleteArgs> | undefined,
        unknown,
        Prisma.LessonDeleteArgs
    >,
) {
    const mutation = request.useModelMutation('Lesson', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.LessonDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.LessonDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.LessonGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteManyLesson(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.LessonDeleteManyArgs>,
) {
    const mutation = request.useModelMutation('Lesson', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.LessonDeleteManyArgs>(args: Prisma.SelectSubset<T, Prisma.LessonDeleteManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useAggregateLesson<T extends Prisma.LessonAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.LessonAggregateArgs>,
    options?: QueryOptions<Prisma.GetLessonAggregateType<T>>,
) {
    return request.useModelQuery('Lesson', 'aggregate', args, options);
}

export function useGroupByLesson<
    T extends Prisma.LessonGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.LessonGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.LessonGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
          ? {
                [P in HavingFields]: P extends ByFields
                    ? never
                    : P extends string
                      ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                      : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
                ? ByValid extends Prisma.True
                    ? {}
                    : {
                          [P in OrderFields]: P extends ByFields
                              ? never
                              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                      }[OrderFields]
                : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
              ? 'orderBy' extends Prisma.Keys<T>
                  ? ByValid extends Prisma.True
                      ? {}
                      : {
                            [P in OrderFields]: P extends ByFields
                                ? never
                                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                        }[OrderFields]
                  : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
>(
    args?: Prisma.SubsetIntersection<T, Prisma.LessonGroupByArgs, OrderByArg> & InputErrors,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.LessonGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.LessonGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.LessonGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.LessonGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    return request.useModelQuery('Lesson', 'groupBy', args, options);
}

export function useCountLesson<T extends Prisma.LessonCountArgs>(
    args?: Prisma.Subset<T, Prisma.LessonCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.LessonCountAggregateOutputType>
            : number
    >,
) {
    return request.useModelQuery('Lesson', 'count', args, options);
}
