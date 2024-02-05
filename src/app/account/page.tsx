import { unstable_noStore as noStore } from "next/cache";
import { getServerAuthSession } from "~/server/auth";
import CompleteRegistrationForm from "../components/CompleteRegistrationForm";
import { api } from "~/trpc/server";
import Link from "next/link";

export default async function MyAccount() {
    noStore();
    const session = await getServerAuthSession();
    const user = await api.user.getMe.query();
    return (
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            {session ?
                <>
                    <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                        My Account</h1>
                    <p>Edit your account details here.</p>
                    <CompleteRegistrationForm />
                    <div className="container flex flex-row justify-between content-between">
                        <Link href="/">Back</Link>
                        <Link href="/api/auth/signout">Logout</Link>
                    </div>
                </>
                :
                <>
                    <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                        Welcome to Ethan's Online Training Platform.
                    </h1>
                    <p>Create an account to get started, or log in if you're returning</p>
                </>
            }
        </div>
    );
}
