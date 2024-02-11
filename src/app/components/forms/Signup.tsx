'use client'

import Link from "next/link";
import { useCreateUser } from "~/lib/hooks";
import { useState } from "react";

export default function SignupForm() {
    const { trigger: signup } = useCreateUser();
    const [err, setErr] = useState<string>('');
    const [succ, setSucc] = useState<boolean>(false);

    return (
        <div className="w-full rounded-3xl px-4 py-2 flex flex-col max-w-xs bg-white/10">
            {!succ ?
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    const email = data.get('email')?.toString();
                    const password = data.get('password')?.toString();

                    if (email && password) {
                        try {
                            await signup({ data: { email, password } });
                            setSucc(true);
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
