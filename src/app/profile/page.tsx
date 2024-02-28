import { unstable_noStore as noStore } from "next/cache";
import { getServerAuthSession } from "~/server/auth";
import CompleteRegistrationForm from "~/app/components/users/CompleteRegistrationForm";
import Link from "next/link";

export default async function Page() {
    noStore();
    const session = await getServerAuthSession();
    return (
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            {session ?
                <>
                    <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                        My Account</h1>
                    <p>Edit your account details here.</p>
                    <CompleteRegistrationForm />
                    <div className="container flex flex-row justify-between content-between">
                        <Link href="/" className="rounded-full bg-white/10 px-4 py-2 my-2 font-semibold no-underline transition hover:bg-white/20">Back</Link>
                        <Link href="/api/auth/signout" className="rounded-full bg-white/10 px-4 py-2 my-2 font-semibold no-underline transition hover:bg-white/20">Logout</Link>
                    </div>
                </>
                :
                <>
                    <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                        Welcome to Ethan&apos;s Online Training Platform.
                    </h1>
                    <p>Create an account to get started, or log in if you&apos;re returning</p>
                </>
            }
        </div>
    );
}
