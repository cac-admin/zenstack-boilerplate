import { unstable_noStore as noStore } from "next/cache";
import { Suspense } from "react";
import CompleteRegistrationForm from "~/app/components/users/CompleteRegistrationForm";
import { api } from "~/trpc/server";
import Spinner from "./components/Spinner";
import SubjectCompletion from "./components/learning/SubjectCompletion";
import { Learning, Subject } from "@prisma/client";

export interface LearningWithSubject extends Learning {
    pinnedSubject: Subject
}
export default async function Page() {
    noStore();

    const user = await api.user.getMe.query();
    const learning = await api.zen.learning.findFirst.query({ where: { userId: user?.id }, include: { pinnedSubject: true } }) as LearningWithSubject | undefined;
    if (!user) {
        return (
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                    This is a sample application scaffolded using Create T3 App and ZenStack.
                </h1>
                <p>This application is designed as a learning platform with lessons in various subjects. Users can register with their email addresses to track their learning as they complete lessons. There are also roles for administrators and editors, to create and manage lessons and users, respectively.</p>
                <p>Create an account to track your learning, or follow the provided lessons at your own pace.</p>
            </div>
        );
    }

    if (!user.name) {
        return (
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                    Complete your registration.
                </h1>
                <p>There&apos;s still some more info we need from you before you can complete your registration.</p>
                <Suspense fallback={
                    <div className="container w-full flex flex-row justify-center">
                        <Spinner className="w-6 h-6 place-self-center" />
                    </div>
                }>
                    <CompleteRegistrationForm user={user} />
                </Suspense>
            </div>
        );
    }

    return (
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                Welcome back, {user.name}.
            </h1>
            {learning?.pinnedSubject && <SubjectCompletion subject={learning.pinnedSubject} />}
        </div>
    );
}
