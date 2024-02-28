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

    return (
        <div className="w-max flex items-center rounded-3xl px-4 py-2 my-2 bg-white/10">
            {!isDeleting ?
                <Button className="rounded-full bg-white/10 px-4 py-2 my-2 font-semibold no-underline transition hover:bg-white/20"
                    onClick={async () => {
                        deleteLesson({ where: { id: lesson.id } });
                    }}>Delete</Button>
                :
                <Spinner className="w-6 h-6 place-self-center" />}
        </div>
    );
}


