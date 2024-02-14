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
export function useMutateCodeRun() {
    const { endpoint, fetch } = useHooksContext();
    const invalidate = request.useInvalidation('CodeRun', metadata);

    /** @deprecated Use `useCreateCodeRun` hook instead. */
    async function createCodeRun<T extends Prisma.CodeRunCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.CodeRunCreateArgs>,
    ) {
        return await request.mutationRequest<Prisma.CodeRunGetPayload<Prisma.CodeRunCreateArgs> | undefined, true>(
            'POST',
            `${endpoint}/codeRun/create`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useCreateManyCodeRun` hook instead. */
    async function createManyCodeRun<T extends Prisma.CodeRunCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.CodeRunCreateManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'POST',
            `${endpoint}/codeRun/createMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }

    /** @deprecated Use `useUpdateCodeRun` hook instead. */
    async function updateCodeRun<T extends Prisma.CodeRunUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.CodeRunUpdateArgs>,
    ) {
        return await request.mutationRequest<Prisma.CodeRunGetPayload<Prisma.CodeRunUpdateArgs> | undefined, true>(
            'PUT',
            `${endpoint}/codeRun/update`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useUpdateManyCodeRun` hook instead. */
    async function updateManyCodeRun<T extends Prisma.CodeRunUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.CodeRunUpdateManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'PUT',
            `${endpoint}/codeRun/updateMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }

    /** @deprecated Use `useUpsertCodeRun` hook instead. */
    async function upsertCodeRun<T extends Prisma.CodeRunUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.CodeRunUpsertArgs>,
    ) {
        return await request.mutationRequest<Prisma.CodeRunGetPayload<Prisma.CodeRunUpsertArgs> | undefined, true>(
            'POST',
            `${endpoint}/codeRun/upsert`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteCodeRun` hook instead. */
    async function deleteCodeRun<T extends Prisma.CodeRunDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.CodeRunDeleteArgs>,
    ) {
        return await request.mutationRequest<Prisma.CodeRunGetPayload<Prisma.CodeRunDeleteArgs> | undefined, true>(
            'DELETE',
            `${endpoint}/codeRun/delete`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteManyCodeRun` hook instead. */
    async function deleteManyCodeRun<T extends Prisma.CodeRunDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.CodeRunDeleteManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'DELETE',
            `${endpoint}/codeRun/deleteMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }
    return {
        createCodeRun,
        createManyCodeRun,
        updateCodeRun,
        updateManyCodeRun,
        upsertCodeRun,
        deleteCodeRun,
        deleteManyCodeRun,
    };
}

export function useCreateCodeRun(
    options?: MutationOptions<
        Prisma.CodeRunGetPayload<Prisma.CodeRunCreateArgs> | undefined,
        unknown,
        Prisma.CodeRunCreateArgs
    >,
) {
    const mutation = request.useModelMutation('CodeRun', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.CodeRunCreateArgs>(args: Prisma.SelectSubset<T, Prisma.CodeRunCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.CodeRunGetPayload<T> | undefined>;
        },
    };
}

export function useCreateManyCodeRun(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.CodeRunCreateManyArgs>,
) {
    const mutation = request.useModelMutation('CodeRun', 'POST', 'createMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.CodeRunCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CodeRunCreateManyArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useFindManyCodeRun<T extends Prisma.CodeRunFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CodeRunFindManyArgs>,
    options?: QueryOptions<Array<Prisma.CodeRunGetPayload<T> & { $optimistic?: boolean }>>,
) {
    return request.useModelQuery('CodeRun', 'findMany', args, options);
}

export function useInfiniteFindManyCodeRun<
    T extends Prisma.CodeRunFindManyArgs,
    R extends Array<Prisma.CodeRunGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.CodeRunFindManyArgs> | undefined, R>,
    options?: InfiniteQueryOptions<Array<Prisma.CodeRunGetPayload<T>>>,
) {
    return request.useInfiniteModelQuery('CodeRun', 'findMany', getNextArgs, options);
}

export function useFindUniqueCodeRun<T extends Prisma.CodeRunFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CodeRunFindUniqueArgs>,
    options?: QueryOptions<Prisma.CodeRunGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('CodeRun', 'findUnique', args, options);
}

export function useFindFirstCodeRun<T extends Prisma.CodeRunFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CodeRunFindFirstArgs>,
    options?: QueryOptions<Prisma.CodeRunGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('CodeRun', 'findFirst', args, options);
}

export function useUpdateCodeRun(
    options?: MutationOptions<
        Prisma.CodeRunGetPayload<Prisma.CodeRunUpdateArgs> | undefined,
        unknown,
        Prisma.CodeRunUpdateArgs
    >,
) {
    const mutation = request.useModelMutation('CodeRun', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.CodeRunUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.CodeRunUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.CodeRunGetPayload<T> | undefined>;
        },
    };
}

export function useUpdateManyCodeRun(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.CodeRunUpdateManyArgs>,
) {
    const mutation = request.useModelMutation('CodeRun', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.CodeRunUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CodeRunUpdateManyArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useUpsertCodeRun(
    options?: MutationOptions<
        Prisma.CodeRunGetPayload<Prisma.CodeRunUpsertArgs> | undefined,
        unknown,
        Prisma.CodeRunUpsertArgs
    >,
) {
    const mutation = request.useModelMutation('CodeRun', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.CodeRunUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.CodeRunUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.CodeRunGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteCodeRun(
    options?: MutationOptions<
        Prisma.CodeRunGetPayload<Prisma.CodeRunDeleteArgs> | undefined,
        unknown,
        Prisma.CodeRunDeleteArgs
    >,
) {
    const mutation = request.useModelMutation('CodeRun', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.CodeRunDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.CodeRunDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.CodeRunGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteManyCodeRun(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.CodeRunDeleteManyArgs>,
) {
    const mutation = request.useModelMutation('CodeRun', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.CodeRunDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CodeRunDeleteManyArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useAggregateCodeRun<T extends Prisma.CodeRunAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.CodeRunAggregateArgs>,
    options?: QueryOptions<Prisma.GetCodeRunAggregateType<T>>,
) {
    return request.useModelQuery('CodeRun', 'aggregate', args, options);
}

export function useGroupByCodeRun<
    T extends Prisma.CodeRunGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.CodeRunGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.CodeRunGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.CodeRunGroupByArgs, OrderByArg> & InputErrors,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.CodeRunGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.CodeRunGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.CodeRunGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.CodeRunGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    return request.useModelQuery('CodeRun', 'groupBy', args, options);
}

export function useCountCodeRun<T extends Prisma.CodeRunCountArgs>(
    args?: Prisma.Subset<T, Prisma.CodeRunCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.CodeRunCountAggregateOutputType>
            : number
    >,
) {
    return request.useModelQuery('CodeRun', 'count', args, options);
}
