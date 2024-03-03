"use client";

import { api } from "~/trpc/react";
import MDEditor, { commands } from "@uiw/react-md-editor";
import { useState } from "react";
import { Lesson } from "@prisma/client";
import Link from "next/link";
import Spinner from "../Spinner";
import { Button } from "../ui/button";
import DeleteLessonForm from "./DeleteLessonForm";

export default function EditLessonForm({ lesson }: {
    lesson: Lesson
}) {
    const utils = api.useUtils();
    const { mutate: updateLesson, error, isLoading: isUpdating } = api.zen.lesson.update.useMutation({
        onSuccess: () => utils.zen.lesson.invalidate()
    });
    const { data: user, isLoading } = api.user.getMe.useQuery();
    const { data: subjects, isLoading: isSubLoading } = api.zen.subject.findMany.useQuery({});
    const [val, setVal] = useState<string | undefined>(lesson.content);

    if (isLoading || isSubLoading) {
        return (
            <div className="w-max flex items-center rounded-3xl px-4 py-2 my-2 bg-white/10">
                <Spinner className="w-6 h-6 place-self-center" />
            </div>
        );
    }

    return (
        <div className="rounded-3xl py-4 gap-4 flex flex-col bg-white/10">
            <div className="container flex flex-row content-center justify-end gap-4">
                <Button className="rounded-full bg-white/10 px-4 py-2 my-2 font-semibold no-underline transition hover:bg-white/20">
                    <Link
                        href={`/lessons/${lesson.id}`}
                    >View Lesson</Link>
                </Button>
                <DeleteLessonForm lesson={lesson} />
            </div>
            {error && <p>{JSON.stringify(error)}</p>}
            <form onSubmit={async (e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = data.get('subject')?.toString();

                if (!user || !val || !subject) {
                    return;
                }

                updateLesson({
                    data: {
                        subName: subject,
                        content: val
                    },
                    where: {
                        id: lesson.id
                    }
                });
            }}>
                <div className="flex flex-row justify-between content-between">
                    <div className="container flex flex-row">
                        <label htmlFor="subject" className="pr-4 py-2 my-2">Subject</label>
                        <select name="subject" defaultValue={lesson.subName} className="rounded-full px-4 py-2 my-2 bg-white/10" required>
                            {subjects?.map((sub) => <option key={sub.name} value={sub.name}>{sub.name}</option>)}
                        </select>
                    </div>
                    <div className="container flex flex-row content-center justify-end gap-4">
                        {!isUpdating ?
                            <input
                                type="submit"
                                value="Save"
                                className="rounded-full bg-white/10 px-4 py-2 my-2 font-semibold no-underline transition hover:bg-white/20"
                            />
                            :
                            <Spinner className="w-6 h-6 place-self-center" />
                        }
                    </div>
                </div>
            </form>
            <div className="container min-h-full" data-color-mode="dark">
                <MDEditor
                    value={val}
                    onChange={setVal}
                    commands={[
                        commands.codeEdit,
                        commands.codePreview]}
                    hideToolbar
                    style={{
                        backgroundColor: "#15162c",
                        borderRadius: "1.4rem",
                        padding: "0.5rem",
                        font: "inherit",
                        minHeight: "36rem",
                    }}
                    previewOptions={{
                        style: {
                            backgroundColor: "#15162c",
                        }
                    }}
                />
            </div>
        </div>
    );
}


