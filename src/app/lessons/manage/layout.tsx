import LessonList from "~/app/components/lessons/LessonList";

export default function Layout({
    children
}: {
    children: React.ReactNode
}
) {
    return (
        <div className="w-full flex flex-col">
            <div className="w-full flex flex-row items-center justify-between">
                <div className="py-2 px-4 font-bold bg-secondary w-full">
                    <h1 className="py-2 text-7xl">
                        Manage Lessons
                    </h1>
                </div>
            </div>
            <div className="flex flex-row items-start">
                <div className="w-1/4">
                    <LessonList />
                </div>
                <div className="w-3/4">
                    {children}
                </div>
            </div>
        </div>
    );
}
