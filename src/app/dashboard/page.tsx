"use client";

import { api } from "~/trpc/react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "~/app/components/ui/command";
import Link from "next/link";

export default function Dashboard() {
    const { data: lessons } = api.zen.lesson.findMany.useQuery({});
    return (
        <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
                <CommandEmpty>No lessons found.</CommandEmpty>
                <CommandGroup heading="Lessons">
                    {
                        lessons?.map(
                            (lesson) => {
                                return <CommandItem key={lesson.id}>
                                    <Link href={`/lessons/${lesson.id}`}>
                                        {/# .*/.exec(lesson.content) ?? lesson.id}
                                    </Link>
                                </CommandItem>;
                            }
                        )
                    }
                </CommandGroup>
            </CommandList>
        </Command>

    );
}
