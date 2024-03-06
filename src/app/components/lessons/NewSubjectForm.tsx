import { useState } from "react";
import { api } from "~/trpc/react";
import Spinner from "../Spinner";

export default function NewSubjectForm() {
    const { mutate, isError, isSuccess, isLoading } = api.zen.subject.create.useMutation();
    const [err, setErr] = useState<string | undefined>();

    if (isLoading) {
        return (
            <div className="container w-full rounded-3xl px-4 py-2 gap-2 flex flex-col max-w-xs bg-white/10">
                <Spinner className="w-6 h-6 place-self-center" />
            </div>
        );
    }

    if (isSuccess) {
        return (
            <div className="container w-full rounded-3xl px-4 py-2 gap-2 flex flex-col max-w-xs bg-white/10">
                <p>&check</p>
            </div>
        );
    }

    return (
        <div className="container w-full rounded-3xl px-2 py-2 gap-2 flex flex-col max-w-xs bg-white/10">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    const name = data.get('name')?.toString();

                    if (!name) {
                        return;
                    }
                    try {
                        mutate({ data: { name } });
                    }
                    catch (e: unknown) {
                        setErr(JSON.stringify(e));
                    }
                }}>
                <label htmlFor="name" className="px-2">Create a New Subject</label>
                <div className="flex flex-row gap-2">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter a subject title..."
                        className="w-full rounded-full p-2 mt-2 text-black"
                        required
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="rounded-full p-2 mt-2 bg-white/10"
                    />
                </div>
            </form>
            {(isError || err) && <p className="text-red-500 px-2">Invalid Subject Name</p>}
        </div>
    );
}
