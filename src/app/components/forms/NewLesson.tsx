import { useCreateLesson, useFindManySubject } from "~/lib/hooks";
import { api } from "~/trpc/react";
import MDEditor, { commands } from "@uiw/react-md-editor";
import { useState } from "react";

export default function NewLessonForm() {
    const { trigger: createLesson, error } = useCreateLesson();
    const { data: user, isLoading } = api.user.getMe.useQuery();
    const { data: subjects, isLoading: isSubLoading } = useFindManySubject();
    const [content, setContent] = useState<string | undefined>();

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

                if (!user || !subject || !content) {
                    return;
                }

                await createLesson({
                    data: {
                        authorId: user.id,
                        subId: subject,
                        content: content
                    }
                });
            }}>
                <div className="container flex flex-row justify-between content-between">
                    <div className="container flex flex-row">
                        <label htmlFor="subject" className="px-4 py-2 my-2">Subject</label>
                        <select name="subject" className="rounded-full px-4 py-2 my-2 bg-white/10" required>
                            <option value="0" selected>None</option>
                            {subjects?.map((sub) => <option value={sub.id}>{sub.title}</option>)}
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
                    value={content}
                    onChange={setContent}
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


