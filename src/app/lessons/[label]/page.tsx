import MDViewer from '~/app/components/MDViewer';
import { api } from '~/trpc/server';
import { LessonWithAuthor } from '../manage/[label]/page';
import SaveProgressButton from '~/app/components/learning/SaveProgressButton';

export default async function Page({ params }: { params: { label: string } }) {
    const user = await api.user.getMe.query();
    const lesson = await api.zen.lesson.findFirst.query({ where: { id: params.label }, include: { author: true } }) as LessonWithAuthor;

    if (!lesson) return <></>;

    return (
        <div data-color-mode="dark">
            <MDViewer value={lesson.content} />
            <p className="my-2">Written by {lesson?.author?.name}</p>
            <div className="max-w flex flex-right">
                {user && <SaveProgressButton lesson={lesson} user={user} />}
            </div>
        </div>
    );
}
