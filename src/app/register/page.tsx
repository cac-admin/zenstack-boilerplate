import { getServerAuthSession } from "~/server/auth";
import SignupForm from "~/app/components/forms/Signup";

export default async function Signup() {
    const session = await getServerAuthSession();

    return (
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            {session ?
                <div className="w-full rounded-3xl px-4 py-2 my-2 flex max-w-xs bg-white/10">
                    <p>You are already signed in.</p >
                </div>
                :
                <SignupForm />
            }
        </div>
    );
}
