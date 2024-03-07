"use client";

import Spinner from "~/app/components/Spinner";
import { api } from "~/trpc/react";
import type { UserWithRoles } from "~/app/components/users/UserList";

export default function EditUserForm({ user }: {
    user: UserWithRoles,
}) {
    const utils = api.useUtils();
    const { data: all_roles, isLoading: isRolesLoading } = api.zen.role.findMany.useQuery({});
    const { mutate, isLoading, isSuccess, error } = api.zen.user.update.useMutation();

    if (isLoading || isRolesLoading) {
        return (
            <div className="container w-full flex flex-row justify-center">
                <Spinner className="w-6 h-6 place-self-center" />
            </div>
        );
    }

    return (
        <div className="gap-4 flex py-4 flex-col">
            <form onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const roleVals = all_roles?.filter((role) => formData.get(role.name));

                try {
                    mutate({
                        data: {
                            roles: { connect: roleVals }
                        },
                        where: {
                            id: user.id
                        }
                    });

                    await utils.zen.role.invalidate();
                }
                catch (e: unknown) {
                    console.error(e);
                }
            }}>
                <div className="w-full border-b border-t py-2 mb-2">
                    <h3 className="text-3xl">User Details</h3>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        className="w-full rounded-full px-4 py-2 my-2 text-black"
                        disabled
                    />
                    {user.name && <input
                        type="text"
                        name="name"
                        value={user.name}
                        className="w-full rounded-full px-4 py-2 my-2 text-black"
                        disabled
                    />}
                </div>
                <div className="w-full border-b py-2 mb-2">
                    <h3 className="text-3xl">Roles</h3>
                    <div className="container flex flex-row gap-2">
                        {all_roles?.map((role) =>
                            <div className="container flex flex-row justify-center content-center items-center" key={role.id} >
                                <label htmlFor={role.name} className="pr-4 py-2 my-2">{role.name}</label>
                                <input
                                    type="checkbox"
                                    name={role.name}
                                    defaultChecked={user.roles?.find((r) => r.id === role.id) !== undefined}
                                    className="w-5 h-5 rounded-full text-purple-500 px-4 py-2 my-2 bg-white/10 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>)}
                    </div>
                </div>
                <div className="flex flex-row content-center justify-end gap-4">
                    {isLoading ?
                        <div className="container w-full flex flex-row justify-center">
                            <Spinner className="w-6 h-6 place-self-center" />
                        </div>
                        :
                        <input
                            type="submit"
                            value="Submit"
                            className="rounded-full bg-white/10 px-4 py-2 my-2 font-semibold no-underline transition hover:bg-white/20"
                        />
                    }
                </div>
            </form>
            {isSuccess && <p>User updated successfully</p>}
        </div>
    );
}
