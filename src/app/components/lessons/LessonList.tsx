import Link from "next/link";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "~/app/components/ui/command"
import { api } from "~/trpc/server";

export default async function LessonList() {
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
                                return (
                                    <Link href={`/lessons/${lesson.id}`} key={lesson.id}>
                                        <CommandItem>
                                            {/# .*/.exec(lesson.content) ?? lesson.id}
                                        </CommandItem>
                                    </Link>
                                );
                            }
                        )
                    }
                </CommandGroup>
            </CommandList>
        </Command>
    );
}

