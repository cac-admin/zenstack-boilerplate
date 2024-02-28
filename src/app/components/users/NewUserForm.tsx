"use client";

import { api } from "~/trpc/react";
import Spinner from "~/app/components/Spinner";

export default function NewUserForm() {
    const utils = api.useUtils();
    const { data: all_roles, isLoading: isRolesLoading } = api.zen.role.findMany.useQuery({});
    const { mutate: createUser, isLoading, isSuccess, error } = api.zen.user.create.useMutation();

    if (isLoading || isRolesLoading) {
        return (
            <div className="w-max flex items-center rounded-3xl px-4 py-2 my-2 bg-white/10">
                <Spinner className="w-6 h-6 place-self-center" />
            </div>
        );
    }

    return (
        <div className="w-full rounded-3xl px-4 py-2 flex flex-col max-w-xs bg-white/10">
            <form onSubmit={async (e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const name = data.get('name')?.toString();
                const email = data.get('email')?.toString();
                const roleVals = all_roles?.filter((role) => data.get(role.name));

                if (name &&
                    email &&
                    roleVals
                ) {
                    try {
                        createUser({
                            data: {
                                email,
                                name,
                                roles: { connect: roleVals }
                            },
                        });

                        await utils.zen.role.invalidate();
                    }
                    catch (e: unknown) {
                        console.error(e);
                    }
                }
            }}>
                <div className="container flex flex-col gap-4">
                    {all_roles?.map((role) =>
                        <div className="container flex flex-row justify-center content-center items-center" key={role.id} >
                            <label htmlFor={role.name} className="pr-4 py-2 my-2">{role.name}</label>
                            <input
                                type="checkbox"
                                name={role.name}
                                className="w-5 h-5 rounded-full text-purple-500 px-4 py-2 my-2 bg-white/10 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        </div>)}
                </div>
                <label htmlFor="name">Full Name</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter an email address..."
                    className="w-full rounded-full px-4 py-2 my-2 text-black"
                    required
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Enter a name..."
                    className="w-full rounded-full px-4 py-2 my-2 text-black"
                    required
                />
                {isLoading ?
                    <Spinner className="w-6 h-6 place-self-center" />
                    :
                    <input
                        type="submit"
                        value="Submit"
                        className="rounded-full px-4 py-2 my-2 bg-white/10"
                    />
                }
            </form>
        </div >
    );
}
