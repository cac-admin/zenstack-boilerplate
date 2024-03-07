"use client";

import { api } from "~/trpc/react";
import { Lesson } from "@prisma/client";
import Spinner from "../Spinner";
import { Button } from "../ui/button";

export default function DeleteLessonForm({ lesson }: {
    lesson: Lesson
}) {
    const utils = api.useUtils();
    const { mutate: deleteLesson, isLoading: isDeleting } = api.zen.lesson.delete.useMutation({
        onSuccess: () => utils.zen.lesson.invalidate()
    });

    if (isDeleting) {
        return (
            <div className="container w-full flex flex-row justify-center">
                <Spinner className="w-6 h-6 place-self-center" />
            </div>
        );
    }

    return (
        <Button className="rounded-full bg-white/10 px-4 py-2 my-2 font-semibold no-underline transition hover:bg-white/20"
            onClick={async () => {
                deleteLesson({ where: { id: lesson.id } });
            }}>Delete Lesson</Button>
    );
}


