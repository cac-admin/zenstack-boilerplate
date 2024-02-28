import { api } from "~/trpc/server";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "~/app/components/ui/command";
import Link from "next/link";

export default async function Page() {
    const lessons = await api.zen.lesson.findMany.query({});
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
