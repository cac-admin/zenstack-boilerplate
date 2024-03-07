import { useState } from "react";
import { api } from "~/trpc/react";
import Spinner from "../Spinner";
import { Popover, PopoverContent, PopoverTrigger } from "~/app/components/ui/popover";
import { Button } from "~/app/components/ui/button";

export default function NewSubjectPopover() {
    const { mutate, isError, isSuccess, isLoading } = api.zen.subject.create.useMutation();
    const [err, setErr] = useState<string | undefined>();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="rounded-full bg-white/10 px-4 py-2 my-2 font-semibold no-underline transition hover:bg-white/20">
                    New Subject
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                {isSuccess ?
                    (
                        <div className="container w-full rounded-3xl px-4 py-2 gap-2 flex flex-col max-w-xs bg-white/10">
                            <p className="text-green-500">&#10004;</p>;
                        </div>
                    )
                    :
                    isLoading ?
                        (
                            <div className="container w-full flex flex-row justify-center">
                                <Spinner className="w-6 h-6 place-self-center" />
                            </div>
                        )
                        :
                        <div className="px-4">
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
                                        className="rounded-full bg-white/10 px-4 py-2 mt-2 font-semibold no-underline transition hover:bg-white/20"
                                    />
                                </div>
                            </form>
                            {(isError || err) && <p className="text-red-500 px-2">Invalid Subject Name</p>}
                        </div>
                }
            </PopoverContent>
        </Popover >
    );
}
