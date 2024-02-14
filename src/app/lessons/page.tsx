'use client'

import { useState } from "react";
import LessonList from "~/app/components/lessons/LessonList";
import { Lesson } from "@prisma/client";
import EditLessonForm from "~/app/components/lessons/EditLessonForm";
import Link from "next/link";

export default function Lessons() {
    const [selected, setSelected] = useState<Lesson | undefined>();

    return (
        <div className="w-full flex flex-col gap-4 p-4">
            <div className="w-full flex flex-row items-center justify-between">
                <h1 className="text-3xl font-bold sm:text-[5rem]">
                    Lessons</h1>
                <Link href="/lessons/new" className="w-max rounded-full px-4 py-2 my-2 flex max-w-s bg-white/10">New Lesson</Link>
            </div>
            <br />
            <div className="container flex flex-row items-start">
                <div className="container w-1/4 p-2">
                    <LessonList selected={selected} setSelected={setSelected} />
                </div>
                <div className="container w-3/4">
                    {selected ?
                        <EditLessonForm lesson={selected} setLesson={setSelected} />
                        :
                        <p className="w-max rounded-full px-4 py-2 my-2 flex max-w-s bg-white/10">
                            Please select a lesson.</p>
                    }
                </div>
            </div>
        </div>
    );
}
