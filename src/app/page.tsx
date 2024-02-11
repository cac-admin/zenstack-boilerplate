import { unstable_noStore as noStore } from "next/cache";
import { getServerAuthSession } from "~/server/auth";
import CompleteRegistrationForm from "~/app/components/forms/CompleteRegistration";
import { api } from "~/trpc/server";

export default async function Home() {
    noStore();
    const session = await getServerAuthSession();
    const user = await api.user.getMe.query();
    return (
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            {
                session ?
                    user?.name ?
                        <>
                            <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                                Welcome back, {user.name}.
                            </h1>
                        </>
                        :
                        <>
                            <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                                Complete your registration.
                            </h1>
                            <p>There's still some more info we need from you before you can start your learning.</p>
                            <CompleteRegistrationForm />
                        </>
                    :
                    <>
                        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                            Welcome to Ethan's Online Training Platform.
                        </h1>
                        <p>Create an account to get started, or log in if you're an existing user.</p>
                    </>
            }
        </div>
    );
}
