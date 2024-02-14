import { useState } from "react";
import { useCreateSubject } from "~/lib/hooks";

export default function NewSubjectForm() {
    const { trigger: mutate } = useCreateSubject();
    const [err, setErr] = useState<string | undefined>();

    return (
        <>
            {err && <p>{err}</p>}
            <form className="container w-full rounded-3xl px-4 py-2 gap-2 flex flex-col max-w-xs bg-white/10"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    const name = data.get('name')?.toString();

                    if (!name) {
                        return;
                    }
                    try {
                        await mutate({ data: { name } });
                    }
                    catch (e: unknown) {
                        setErr(JSON.stringify(e));
                    }
                }}>
                <label htmlFor="name">Create a New Subject</label>
                <div className="flex flex-row gap-2">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter a subject title..."
                        className="w-full rounded-full px-2 py-2 text-black"
                        required
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="rounded-full px-2 py-2 bg-white/10"
                    />
                </div>
            </form>
        </>
    );
}
