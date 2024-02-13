'use client'

import { api } from "~/trpc/react";
import { useState } from "react";
import Lessons from "~/app/components/Lessons";
import { Lesson } from "@prisma/client";
import EditLesson from "~/app/components/forms/EditLesson";
import NewSubject from "~/app/components/forms/NewSubject";
import NewLessonForm from "~/app/components/forms/NewLesson";
import Link from "next/link";

export default function Learning() {
    const user = api.user.getMe.useQuery();
    const [selected, setSelected] = useState<Lesson | undefined>();

    if (!user) {
        return <></>;
    }

    return (
        <div className="w-full flex flex-col gap-4 p-4">
            <div className="w-full flex flex-row items-center justify-between">
                <h1 className="text-3xl font-bold sm:text-[5rem]">
                    Lessons</h1>
                <Link href="/dashboard/lessons/new" className="w-max rounded-full px-4 py-2 my-2 flex max-w-s bg-white/10">New Lesson</Link>
            </div>
            <br />
            <div className="container flex flex-row items-center">
                <div className="container w-1/4 p-2">
                    <Lessons selected={selected} setSelected={setSelected} />
                </div>
                <div className="container w-3/4">
                    {selected ?
                        <EditLesson lesson={selected} />
                        :
                        <p className="w-max rounded-full px-4 py-2 my-2 flex max-w-s bg-white/10">
                            Please select a lesson.</p>
                    }
                </div>
            </div>
        </div>
    );
}
