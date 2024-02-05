import CompleteRegistrationForm from "~/app/components/CompleteRegistrationForm";
import { getServerAuthSession } from "../../../server/auth";

export default async function CompleteRegistration() {
    const session = await getServerAuthSession();

    return (
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            {session?.user.name ?
                <div className="w-full rounded-3xl px-4 py-2 my-2 flex max-w-xs bg-white/10">
                    <p>You've completed your registration.</p >
                </div>
                :
                <CompleteRegistrationForm />
            }
        </div>
    );
}
