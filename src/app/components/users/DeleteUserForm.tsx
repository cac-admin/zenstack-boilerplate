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
        <div className="w-max flex items-center rounded-3xl px-4 py-2 my-2 bg-white/10">
            {!isDeleting ?
                <Button className="rounded-full bg-white/10 px-4 py-2 my-2 font-semibold no-underline transition hover:bg-white/20"
                    onClick={async () => {
                        deleteUser({ where: { id: user.id } });
                    }}>Delete</Button>
                :
                <Spinner className="w-6 h-6 place-self-center" />}
        </div>
    );
}


