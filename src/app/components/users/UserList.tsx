import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "~/app/components/ui/command"
import { Dispatch, SetStateAction } from "react";
import { Role, User } from "@prisma/client";
import { api } from "~/trpc/react";
import Spinner from "~/app/components/Spinner";

export interface UserWithRoles extends User {
    roles?: Role[],
}

export default function UserList(
    { selected, setSelected }:
        {
            selected: UserWithRoles | undefined,
            setSelected: Dispatch<SetStateAction<UserWithRoles | undefined>>
        }
) {
    const { data: users, isLoading } = api.zen.user.findMany.useQuery({ include: { roles: true } });

    if (isLoading) {
        return (
            <div className="w-max rounded-3xl px-4 py-2 my-2 flex max-w-s bg-white/10">
                <Spinner className="w-6 h-6 place-self-center" />
            </div>
        );
    }

    return (
        <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
                <CommandEmpty>No lessons found.</CommandEmpty>
                <CommandGroup heading="Lessons">
                    {
                        users?.map(
                            (user) => {
                                return (
                                    <CommandItem key={user.id} onSelect={() => setSelected(user)}>
                                        <div className="flex flex-col gap-1 justify-start">
                                            <p className="text-lg">{user.name}</p>
                                            <p>{user.email}</p>
                                        </div>
                                    </CommandItem>
                                );
                            }
                        )
                    }
                </CommandGroup>
            </CommandList>
        </Command>
    );
}

