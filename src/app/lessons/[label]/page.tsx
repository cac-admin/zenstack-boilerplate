import { db } from '~/server/db';
import MDViewer from '~/app/components/MDViewer';

export async function generateStaticParams() {
    const lessons = await db.lesson.findMany({ select: { id: true } });

    return lessons?.map((lesson) => ({
        label: lesson.id
    }));
}
export default async function Page({ params }: { params: { label: string } }) {
    const lesson = await db.lesson.findFirst({ where: { id: params.label } });

    if (!lesson) return <></>;

    return (
        <MDViewer value={lesson.content} />
    );
}

export function styleString(content: string): string {
    let val = content.replaceAll("<h1>", '<h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">');
    val = val.replaceAll("<h2>", '<h2 className="text-xl font-bold sm:text-[2rem]">');
    val = val.replaceAll("<h3>", '<h3 className="text-lg font-medium sm:text-[1rem]">');
    val = val.replaceAll("<p>", '<p className="text-base font-medium">');
    return val;
}
