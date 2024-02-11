import { useGroupByLesson } from "~/lib/hooks";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command"
import { Dispatch, SetStateAction } from "react";
import { Lesson } from "@prisma/client";
import { api } from "~/trpc/react";

export default function Lessons(
    { selected, setSelected }:
        {
            selected: Lesson | undefined,
            setSelected: Dispatch<SetStateAction<Lesson | undefined>>
        }
) {
    const { data: user, isLoading: isUserLoading } = api.user.getMe.useQuery();
    const { data: lessonsBySubject, isLoading: isSubsLoading } = useGroupByLesson(
        {
            by: ['subId']
        }
    );

    if (isUserLoading || isSubsLoading) {
        return (
            <div className="w-max rounded-3xl px-4 py-2 my-2 flex max-w-s bg-white/10">
                <p>Loading...</p>
            </div>
        );
    }

    console.log(lessonsBySubject);

    return (
        <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
                <CommandEmpty>No lessons found.</CommandEmpty>
                <CommandGroup heading="Lessons">
                    {//lessonsBySubject?.map(
                        //(lesson) => <CommandItem onSelect={() => setSelected(lesson)}>{lesson.id}</CommandItem>
                        //   )
                    }
                </CommandGroup>
            </CommandList>
        </Command>
    );
}

