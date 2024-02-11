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
export function useMutatePermission() {
    const { endpoint, fetch } = useHooksContext();
    const invalidate = request.useInvalidation('Permission', metadata);

    /** @deprecated Use `useCreatePermission` hook instead. */
    async function createPermission<T extends Prisma.PermissionCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.PermissionCreateArgs>,
    ) {
        return await request.mutationRequest<
            Prisma.PermissionGetPayload<Prisma.PermissionCreateArgs> | undefined,
            true
        >('POST', `${endpoint}/permission/create`, args, invalidate, fetch, true);
    }

    /** @deprecated Use `useUpdatePermission` hook instead. */
    async function updatePermission<T extends Prisma.PermissionUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.PermissionUpdateArgs>,
    ) {
        return await request.mutationRequest<
            Prisma.PermissionGetPayload<Prisma.PermissionUpdateArgs> | undefined,
            true
        >('PUT', `${endpoint}/permission/update`, args, invalidate, fetch, true);
    }

    /** @deprecated Use `useUpdateManyPermission` hook instead. */
    async function updateManyPermission<T extends Prisma.PermissionUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.PermissionUpdateManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'PUT',
            `${endpoint}/permission/updateMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }

    /** @deprecated Use `useUpsertPermission` hook instead. */
    async function upsertPermission<T extends Prisma.PermissionUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.PermissionUpsertArgs>,
    ) {
        return await request.mutationRequest<
            Prisma.PermissionGetPayload<Prisma.PermissionUpsertArgs> | undefined,
            true
        >('POST', `${endpoint}/permission/upsert`, args, invalidate, fetch, true);
    }

    /** @deprecated Use `useDeletePermission` hook instead. */
    async function deletePermission<T extends Prisma.PermissionDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.PermissionDeleteArgs>,
    ) {
        return await request.mutationRequest<
            Prisma.PermissionGetPayload<Prisma.PermissionDeleteArgs> | undefined,
            true
        >('DELETE', `${endpoint}/permission/delete`, args, invalidate, fetch, true);
    }

    /** @deprecated Use `useDeleteManyPermission` hook instead. */
    async function deleteManyPermission<T extends Prisma.PermissionDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.PermissionDeleteManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'DELETE',
            `${endpoint}/permission/deleteMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }
    return {
        createPermission,
        updatePermission,
        updateManyPermission,
        upsertPermission,
        deletePermission,
        deleteManyPermission,
    };
}

export function useCreatePermission(
    options?: MutationOptions<
        Prisma.PermissionGetPayload<Prisma.PermissionCreateArgs> | undefined,
        unknown,
        Prisma.PermissionCreateArgs
    >,
) {
    const mutation = request.useModelMutation('Permission', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.PermissionCreateArgs>(args: Prisma.SelectSubset<T, Prisma.PermissionCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.PermissionGetPayload<T> | undefined>;
        },
    };
}

export function useFindManyPermission<T extends Prisma.PermissionFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PermissionFindManyArgs>,
    options?: QueryOptions<Array<Prisma.PermissionGetPayload<T> & { $optimistic?: boolean }>>,
) {
    return request.useModelQuery('Permission', 'findMany', args, options);
}

export function useInfiniteFindManyPermission<
    T extends Prisma.PermissionFindManyArgs,
    R extends Array<Prisma.PermissionGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.PermissionFindManyArgs> | undefined, R>,
    options?: InfiniteQueryOptions<Array<Prisma.PermissionGetPayload<T>>>,
) {
    return request.useInfiniteModelQuery('Permission', 'findMany', getNextArgs, options);
}

export function useFindUniquePermission<T extends Prisma.PermissionFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PermissionFindUniqueArgs>,
    options?: QueryOptions<Prisma.PermissionGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Permission', 'findUnique', args, options);
}

export function useFindFirstPermission<T extends Prisma.PermissionFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PermissionFindFirstArgs>,
    options?: QueryOptions<Prisma.PermissionGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Permission', 'findFirst', args, options);
}

export function useUpdatePermission(
    options?: MutationOptions<
        Prisma.PermissionGetPayload<Prisma.PermissionUpdateArgs> | undefined,
        unknown,
        Prisma.PermissionUpdateArgs
    >,
) {
    const mutation = request.useModelMutation('Permission', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.PermissionUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.PermissionUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.PermissionGetPayload<T> | undefined>;
        },
    };
}

export function useUpdateManyPermission(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.PermissionUpdateManyArgs>,
) {
    const mutation = request.useModelMutation('Permission', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.PermissionUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.PermissionUpdateManyArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useUpsertPermission(
    options?: MutationOptions<
        Prisma.PermissionGetPayload<Prisma.PermissionUpsertArgs> | undefined,
        unknown,
        Prisma.PermissionUpsertArgs
    >,
) {
    const mutation = request.useModelMutation('Permission', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.PermissionUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.PermissionUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.PermissionGetPayload<T> | undefined>;
        },
    };
}

export function useDeletePermission(
    options?: MutationOptions<
        Prisma.PermissionGetPayload<Prisma.PermissionDeleteArgs> | undefined,
        unknown,
        Prisma.PermissionDeleteArgs
    >,
) {
    const mutation = request.useModelMutation('Permission', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.PermissionDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.PermissionDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.PermissionGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteManyPermission(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.PermissionDeleteManyArgs>,
) {
    const mutation = request.useModelMutation('Permission', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.PermissionDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.PermissionDeleteManyArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useAggregatePermission<T extends Prisma.PermissionAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.PermissionAggregateArgs>,
    options?: QueryOptions<Prisma.GetPermissionAggregateType<T>>,
) {
    return request.useModelQuery('Permission', 'aggregate', args, options);
}

export function useGroupByPermission<
    T extends Prisma.PermissionGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.PermissionGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.PermissionGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.PermissionGroupByArgs, OrderByArg> & InputErrors,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.PermissionGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.PermissionGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.PermissionGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.PermissionGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    return request.useModelQuery('Permission', 'groupBy', args, options);
}

export function useCountPermission<T extends Prisma.PermissionCountArgs>(
    args?: Prisma.Subset<T, Prisma.PermissionCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PermissionCountAggregateOutputType>
            : number
    >,
) {
    return request.useModelQuery('Permission', 'count', args, options);
}
