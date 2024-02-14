'use client'

import Link from "next/link";
import { useState } from "react";
import { api } from "~/trpc/react";
import Spinner from "~/app/components/Spinner";

export default function SignupForm() {
    const { mutate: signup, isLoading, isSuccess } = api.zen.user.create.useMutation();
    const [err, setErr] = useState<string>('');

    if (isLoading) {
        return (
            <div className="w-max flex items-center rounded-3xl px-4 py-2 my-2 bg-white/10">
                <Spinner className="w-6 h-6 place-self-center" />
            </div>
        );
    }

    return (
        <div className="w-full rounded-3xl px-4 py-2 flex flex-col max-w-xs bg-white/10">
            {!isSuccess ?
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    const email = data.get('email')?.toString();
                    const password = data.get('password')?.toString();

                    if (email && password) {
                        try {
                            signup({ data: { email, password } });
                        } catch (err: any) {
                            setErr("An error occured, please try again with different credentials.");
                        }
                    } else {
                        setErr("Please enter an email, and password.");
                    }
                }}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email..."
                        className="w-full rounded-full px-4 py-2 my-2 text-black"
                        required
                    />
                    <label htmlFor="email">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter a strong password..."
                        className="w-full rounded-full px-4 py-2 my-2 text-black"
                        required
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="w-full rounded-full px-4 py-2 my-2 bg-white/10"
                    />
                </form>
                :
                <p>You're signed up! <Link href="/api/auth/signin">Log in</Link>.</p>}
            {err !== '' && <p className="w-full rounded-3xl px-4 py-2 my-2 bg-[#15162c] text-red-500">{err}</p>}
        </div>
    );
}
