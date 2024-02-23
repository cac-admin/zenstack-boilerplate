import EditUserForm from '~/app/components/users/EditUserForm';
import { prisma } from '~/server/db';

export async function generateStaticParams() {
    const lessons = await prisma.lesson.findMany({ select: { id: true } });

    return lessons?.map((lesson) => ({
        label: lesson.id
    }));
}

export default async function Page({ params }: { params: { id: string } }) {
    const user = await prisma.user.findFirst({ where: { id: params.id }, include: { roles: true } });

    if (!user) return <></>;

    return (
        <>
            <EditUserForm user={user} />
        </>
    );
}
