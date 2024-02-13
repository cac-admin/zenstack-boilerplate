import { useFindManyLesson, useGroupByLesson } from "~/lib/hooks";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command"
import { Dispatch, SetStateAction } from "react";
import { Lesson } from "@prisma/client";

export default function Lessons(
    { selected, setSelected }:
        {
            selected: Lesson | undefined,
            setSelected: Dispatch<SetStateAction<Lesson | undefined>>
        }
) {
    const { data: lessons, isLoading: isLessonsLoading } = useFindManyLesson({});

    if (isLessonsLoading) {
        return (
            <div className="w-max rounded-3xl px-4 py-2 my-2 flex max-w-s bg-white/10">
                <p>Loading...</p>
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
                        lessons?.map(
                            (lesson) => {
                                return <CommandItem key={lesson.id} onSelect={() => setSelected(lesson)}>{
                                    /# .*/.exec(lesson.content) ?? lesson.id}</CommandItem>;
                            }
                        )
                    }
                </CommandGroup>
            </CommandList>
        </Command>
    );
}

