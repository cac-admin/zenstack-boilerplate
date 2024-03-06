import { unstable_noStore as noStore } from "next/cache";
import CompleteRegistrationForm from "~/app/components/users/CompleteRegistrationForm";
import { Suspense } from "react";
import Spinner from "../components/Spinner";
import { api } from "~/trpc/server";

export default async function Page() {
    noStore();
    const user = await api.user.getMe.query();
    if (!user) {
        return <></>;
    }

    return (
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                My Account</h1>
            <p>Edit your account details here.</p>
            <Suspense fallback={
                <div className="w-max flex items-center rounded-3xl px-4 py-2 my-2 bg-white/10">
                    <Spinner className="w-6 h-6 place-self-center" />
                </div>
            }>
                <CompleteRegistrationForm user={user} />
            </Suspense>
        </div>
    );
}
