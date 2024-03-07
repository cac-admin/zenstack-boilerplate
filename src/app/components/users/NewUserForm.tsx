"use client";

import { api } from "~/trpc/react";
import Spinner from "~/app/components/Spinner";

export default function NewUserForm() {
    const utils = api.useUtils();
    const { data: all_roles, isLoading: isRolesLoading } = api.zen.role.findMany.useQuery({});
    const { mutate: createUser, isLoading, isSuccess, error } = api.zen.user.create.useMutation();

    if (isLoading || isRolesLoading) {
        return (
            <div className="container w-full flex flex-row justify-center">
                <Spinner className="w-6 h-6 place-self-center" />
            </div>
        );
    }

    if (isSuccess) {
        return (
            <div className="container w-full rounded-3xl px-4 py-2 gap-2 flex flex-col max-w-xs bg-primary">
                <p className="text-green-500">User Created &#10004;.</p>;
            </div>
        );
    }

    return (
        <div className="gap-4 flex py-4 flex-col">
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
                <div className="w-full border-b border-t py-2 mb-2">
                    <h3 className="text-3xl">User Details</h3>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter an email address..."
                        className="w-full rounded-full px-4 py-2 my-2 bg-muted placeholder:text-secondary-foreground"
                        required
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter a name..."
                        className="w-full rounded-full px-4 py-2 my-2 bg-muted placeholder:text-secondary-foreground"
                        required
                    />
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
                                    className="w-5 h-5 rounded-full text-purple-500 px-4 py-2 my-2 bg-muted" />
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
                            className="rounded-full bg-primary px-4 py-2 my-2 font-semibold no-underline transition hover:bg-white/20"
                        />
                    }
                </div>
            </form>
        </div >
    );
}
