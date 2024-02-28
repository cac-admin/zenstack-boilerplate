import EditUserForm from '~/app/components/users/EditUserForm';
import { api } from '~/trpc/server';

export default async function Page({ params }: { params: { id: string } }) {
    const user = await api.zen.user.findFirst.query({ where: { id: params.id }, include: { roles: true } });

    if (!user) return <></>;

    return (
        <>
            <EditUserForm user={user} />
        </>
    );
}
