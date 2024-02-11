import { api } from "~/trpc/react";
export default function NewSubject() {
    const { mutate, error } = api.subject.create.useMutation();

    return (
        <div className="w-full rounded-3xl px-4 py-2 flex flex-col max-w-xs bg-white/10">
            {error !== undefined ?? <p>{error?.message}</p>}
            <form onSubmit={async (e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const title = data.get('title')?.toString();

                if (!title) {
                    return;
                }
                mutate({ title });
            }}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter a subject title..."
                    className="w-full rounded-full px-4 py-2 my-2 text-black"
                    required
                />
                <input
                    type="submit"
                    value="Submit"
                    className="rounded-full px-4 py-2 my-2 bg-white/10"
                />
            </form>
        </div>
    );
}
