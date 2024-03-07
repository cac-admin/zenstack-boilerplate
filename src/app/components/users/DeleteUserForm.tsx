"use client";

import { api } from "~/trpc/react";
import { User } from "@prisma/client";
import Spinner from "../Spinner";
import { Button } from "../ui/button";

export default function DeleteUserForm({ user }: {
    user: User
}) {
    const utils = api.useUtils();
    const { mutate: deleteUser, isLoading: isDeleting } = api.zen.user.delete.useMutation({
        onSuccess: () => utils.zen.user.invalidate()
    });

    return (
        <div className="w-max flex items-center rounded-3xl px-4 py-2 my-2 bg-primary">
            {!isDeleting ?
                <Button className="rounded-full bg-primary px-4 py-2 my-2 font-semibold no-underline transition hover:bg-white/20"
                    onClick={async () => {
                        deleteUser({ where: { id: user.id } });
                    }}>Delete</Button>
                :
                <div className="container w-full flex flex-row justify-center">
                    <Spinner className="w-6 h-6 place-self-center" />
                </div>
            }
        </div>
    );
}


