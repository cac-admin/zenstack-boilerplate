
import LessonList from "~/app/components/lessons/LessonList";

export default function LessonsLayout({
    children
}: {
    children: React.ReactNode
}
) {
    return (
        <div className="w-full flex flex-col gap-4 p-4">
            <div className="w-full flex flex-row items-center justify-between">
                <h1 className="text-3xl font-bold sm:text-[5rem]">
                    Lessons</h1>
            </div>
            <br />
            <div className="container flex flex-row items-start">
                <div className="container w-1/4 p-2">
                    <LessonList />
                </div>
                <div className="container w-3/4">
                    {children}
                </div>
            </div>
        </div>
    );
}
