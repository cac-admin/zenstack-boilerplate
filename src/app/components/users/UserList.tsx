import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "~/app/components/ui/command"
import { Role, User } from "@prisma/client";
import { api } from "~/trpc/server";
import Link from "next/link";

export interface UserWithRoles extends User {
    roles?: Role[],
}

export default async function UserList() {
    const users = await api.zen.user.findMany.query({});

    return (
        <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
                <CommandEmpty>No users found.</CommandEmpty>
                <CommandGroup heading="Users">
                    {
                        users?.map(
                            (user) => {
                                return (
                                    <CommandItem key={user.id}>
                                        <Link href={`/users/manage/${user.id}`}>
                                            <div className="flex flex-col gap-1 justify-start">
                                                <p className="text-lg">{user.name}</p>
                                                <p>{user.email}</p>
                                            </div>
                                        </Link>
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

