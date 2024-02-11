'use client'

import { api } from "~/trpc/react";
import { useState } from "react";
import Lessons from "~/app/components/Lessons";
import { Lesson } from "@prisma/client";
import EditLesson from "~/app/components/forms/EditLesson";
import NewSubject from "~/app/components/forms/NewSubject";
import NewLessonForm from "~/app/components/forms/NewLesson";

export default function Learning() {
    const user = api.user.getMe.useQuery();
    const [selected, setSelected] = useState<Lesson | undefined>();

    if (!user) {
        return <></>;
    }

    return (
        <div className="container flex flex-col items-center justify-center">
            <NewSubject />
            <NewLessonForm />
            <div className="container flex flex-row items-center justify-center gap-12 px-4 py-16 ">
                <Lessons selected={selected} setSelected={setSelected} />
                {selected ?
                    <EditLesson lesson={selected} />
                    :
                    <p className="w-max rounded-full px-4 py-2 my-2 flex max-w-s bg-white/10 align-center">
                        Please select a lesson.</p>
                }
            </div>
        </div>
    );
}
