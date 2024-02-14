import { prisma } from '~/server/db';
import MDViewer from '~/app/components/MDViewer';

export async function generateStaticParams() {
    const lessons = await prisma.lesson.findMany({ select: { id: true } });

    return lessons?.map((lesson) => ({
        label: lesson.id
    }));
}

export default async function Page({ params }: { params: { label: string } }) {
    const lesson = await prisma.lesson.findFirst({ where: { id: params.label } });

    if (!lesson) return <></>;

    return (
        <MDViewer value={lesson.content} />
    );
}