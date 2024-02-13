import { useFindManySubject, useUpdateLesson } from "~/lib/hooks";
import { api } from "~/trpc/react";
import MDEditor, { commands } from "@uiw/react-md-editor";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Lesson } from "@prisma/client";

export default function EditLesson({ lesson, setLesson }: {
    lesson: Lesson
    setLesson: Dispatch<SetStateAction<Lesson | undefined>>
}) {
    const { trigger: updateLesson, error } = useUpdateLesson();
    const { data: user, isLoading } = api.user.getMe.useQuery();
    const { data: subjects, isLoading: isSubLoading } = useFindManySubject();
    const [val, setVal] = useState<string | undefined>(lesson.content);

    useEffect(() => {
        setVal(lesson.content);
    }, [lesson]);

    if (isLoading || isSubLoading) {
        return (
            <div className="w-max rounded-3xl px-4 py-2 my-2 flex max-w-s bg-white/10">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="container rounded-3xl px-4 py-4 gap-4 flex flex-col w-11/12 bg-white/10">
            {error !== undefined && <p>{JSON.stringify(error)}</p>}
            <form onSubmit={async (e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = data.get('subject')?.toString();

                if (!user || !val || !subject) {
                    return;
                }

                await updateLesson({
                    data: {
                        subName: subject,
                        content: val
                    },
                    where: {
                        id: lesson.id
                    }
                });
            }}>
                <div className="container flex flex-row justify-between content-between">
                    <div className="container flex flex-row">
                        <label htmlFor="subject" className="px-4 py-2 my-2">Subject</label>
                        <select name="subject" value={lesson.subName} className="rounded-full px-4 py-2 my-2 bg-white/10" required>
                            {subjects?.map((sub) => <option key={sub.name} value={sub.name}>{sub.name}</option>)}
                        </select>
                    </div>
                    <input
                        type="submit"
                        value="Submit"
                        className="rounded-full px-4 py-2 my-2 bg-white/10"
                    />
                </div>
            </form>
            <div className="container min-h-96">
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
                        minHeight: "24rem",
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


