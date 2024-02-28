import { getServerAuthSession } from '~/server/auth';
import EditLessonForm from '~/app/components/lessons/EditLessonForm';
import { api } from '~/trpc/server';
import { Lesson, User } from '@prisma/client';

export interface LessonWithAuthor extends Lesson {
    author: User
}

export default async function Page({ params }: { params: { label: string } }) {
    const session = await getServerAuthSession();
    const lesson = await api.zen.lesson.findFirst.query({ where: { id: params.label }, include: { author: true } }) as LessonWithAuthor;

    if (lesson && (session?.user.roles?.find((r) => r.name === "author") !== undefined &&
        lesson.author?.id === session.user.id ||
        session?.user.roles?.find((r) => r.name === "admin"))) {
        return (
            <EditLessonForm lesson={lesson} />
        );
    }

    return <></>;
}
