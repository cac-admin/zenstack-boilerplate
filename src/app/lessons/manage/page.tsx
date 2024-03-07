import { getServerAuthSession } from "~/server/auth";
import NewLessonForm from "~/app/components/lessons/NewLessonForm";

export default async function Page() {
    const session = await getServerAuthSession();

    if (session?.user.roles?.find((r) => r.name === "author" || r.name === "admin")) {
        return (
            <NewLessonForm />
        );
    }

    return (
        <div className="w-full flex flex-col gap-4 p-4">
            <p className="w-max rounded-full px-4 py-2 my-2 flex max-w-s bg-primary">
                Please select a lesson.</p>
        </div>
    );
}
