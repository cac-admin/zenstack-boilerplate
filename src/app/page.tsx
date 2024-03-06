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
    const learning = await api.zen.learning.findFirst.query({ where: { userId: user?.id }, include: { pinnedSubject: true } }) as LearningWithSubject;
    if (!user) {
        return (
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                    Welcome to Ethan&apos;s Online Training Platform.
                </h1>
                <p>Create an account to get started, or log in if you&apos;re an existing user.</p>
            </div>
        );
    }

    if (!user.name) {
        return (
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                    Complete your registration.
                </h1>
                <p>There&apos;s still some more info we need from you before you can start your learning.</p>
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

    return (
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                Welcome back, {user.name}.
            </h1>
            {learning?.pinnedSubject && <SubjectCompletion subject={learning.pinnedSubject} />}
        </div>
    );
}
