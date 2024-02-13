'use client'

import { api } from "~/trpc/react";
import Spinner from "../Spinner";

export default function CompleteRegistration() {
    const updateMe = api.user.updateMe.useMutation();
    const { data: user, isLoading } = api.user.getMe.useQuery();

    if (isLoading || updateMe.isLoading) {
        return (
            <div className="w-max flex items-center rounded-3xl px-4 py-2 my-2 bg-white/10">
                <Spinner className="w-6 h-6 place-self-center" />
            </div>
        );
    }

    return (
        <div className="w-full rounded-3xl px-4 py-2 my-2 flex flex-col max-w-xs bg-white/10">
            <form onSubmit={async (e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const name = data.get('name')?.toString();
                const netid = data.get('netid')?.toString();
                const student_number = data.get('student_number')?.toString();
                const image = data.get('image');

                if (name &&
                    netid &&
                    student_number
                ) {
                    if (image instanceof (File)) {
                        const imgData = await image.arrayBuffer();

                        // Absolutely horrible, no good, very bad code.
                        const b64 = btoa(
                            new Uint8Array(imgData).reduce(
                                (data, byte) => data + String.fromCharCode(byte),
                                ''
                            )
                        );

                        updateMe.mutate({
                            name,
                            netid,
                            student_number,
                            image: {
                                data: b64,
                                type: image.type,
                                size: image.size
                            }
                        });
                    } else {
                        updateMe.mutate({ name, netid, student_number });
                    }
                }
            }}>
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name..."
                    defaultValue={user?.name ?? undefined}
                    className="w-full rounded-full px-4 py-2 my-2 text-black"
                    required
                />
                <label htmlFor="netid">Queen's Student NetID</label>
                <input
                    type="text"
                    name="netid"
                    defaultValue={user?.netid ?? undefined}
                    placeholder="Enter your NetID..."
                    className="w-full rounded-full px-4 py-2 my-2 text-black"
                    required
                />
                <label htmlFor="student_number">Queen's Student Number</label>
                <input
                    type="number"
                    defaultValue={user?.student_number ?? undefined}
                    name="student_number"
                    placeholder="Enter your student number..."
                    className="w-full rounded-full px-4 py-2 my-2 text-black"
                    required
                />
                <label htmlFor="student_number">Profile Photo (Optional)</label>
                <input
                    type="file"
                    accept="image/*"
                    name="image"
                    className="w-full rounded-full px-4 py-2 my-2 text-black bg-white"
                />
                <input
                    type="submit"
                    value="Submit"
                    className="w-full rounded-full px-4 py-2 my-2 bg-white/10"
                />
            </form>
            {updateMe.error && updateMe.error.shape?.data.zodError?.fieldErrors["image"]?.map((e) => (<p className="text-red-500" key={e}>{e}</p>))}
        </div>
    );
}
