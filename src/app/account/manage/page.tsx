'use client'

import { useState } from "react";
import UserList, { UserWithRoles } from "~/app/components/users/UserList";
import EditUserForm from "~/app/components/users/EditUserForm";

export default function ManageUsers() {
    const [selected, setSelected] = useState<UserWithRoles | undefined>();

    return (
        <div className="w-full flex flex-col gap-4 p-4">
            <h1 className="text-3xl font-bold sm:text-[5rem]">
                Manage Users</h1>
            <br />
            <div className="container flex flex-row items-start">
                <div className="container w-1/4 p-2">
                    <UserList selected={selected} setSelected={setSelected} />
                </div>
                <div className="container w-3/4">
                    {selected ?
                        <EditUserForm user={selected} setUser={setSelected} />
                        :
                        <p className="w-max rounded-full px-4 py-2 my-2 flex max-w-s bg-white/10">
                            Please select a user.</p>
                    }
                </div>
            </div>
        </div>
    );
}

