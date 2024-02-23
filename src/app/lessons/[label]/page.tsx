import { prisma } from '~/server/db';
import MDViewer from '~/app/components/MDViewer';
import { getServerAuthSession } from '~/server/auth';
import EditLessonForm from '~/app/components/lessons/EditLessonForm';

export async function generateStaticParams() {
    const lessons = await prisma.lesson.findMany({ select: { id: true } });

    return lessons?.map((lesson) => ({
        label: lesson.id
    }));
}

export default async function Page({ params }: { params: { label: string } }) {
    const session = await getServerAuthSession();
    const lesson = await prisma.lesson.findFirst({ where: { id: params.label }, include: { author: true } });

    if (!lesson) return <></>;

    if (session?.user.roles?.find((r) => r.name === "author") !== undefined &&
        lesson.author?.id === session.user.id ||
        session?.user.roles?.find((r) => r.name === "admin")) {
        return (
            <EditLessonForm lesson={lesson} />
        );
    }


    return (
        <>
            <MDViewer value={lesson.content} />
            <p className="my-2">Written by {lesson.author?.name}</p>
        </>
    );
}
