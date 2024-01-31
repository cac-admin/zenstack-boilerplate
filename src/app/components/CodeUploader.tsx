'use client'

import { api } from "~/trpc/react";

export default function CodeUploader() {
    const { mutate, error } = api.code.create.useMutation();

    return (
        <div
            className="w-full rounded-3xl px-4 py-2 my-2 flex max-w-xs bg-white/10"
        >
            {error?.data?.zodError?.fieldErrors.lang && (
                <span className="mb-8 text-red-500">{error.data.zodError.fieldErrors.lang}</span>
            )}
            <form onSubmit={async (e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const lang = data.get('lang')?.toString();
                const file = data.get('file');

                if (lang && file instanceof File) {
                    const content = await file.text();
                    mutate({ lang, file: content });
                }
            }}>
                <input
                    type="text"
                    name="lang"
                    placeholder="Language"
                    className="w-full rounded-full px-4 py-2 my-2 text-black"
                />
                <input
                    type="file"
                    name="file"
                    placeholder="Upload File"
                    className="w-full rounded-full px-4 py-2 my-2 text-black bg-white"
                />
                <input
                    type="submit"
                    value="Submit"
                    className="w-full rounded-full px-4 py-2 my-2 bg-white/10"
                />
            </form>
        </div>
    );
}

