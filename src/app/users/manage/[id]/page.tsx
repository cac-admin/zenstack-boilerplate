import EditUserForm from '~/app/components/users/EditUserForm';
import { api } from '~/trpc/server';

export default async function Page({ params }: { params: { id: string } }) {
    const user = await api.zen.user.findFirst.query({ where: { id: params.id }, include: { roles: true } });

    if (!user) return <></>;

    return (
        <div className="w-full flex flex-col p-4">
            <h2 className="text-semibold text-4xl">Edit User</h2>
            <EditUserForm user={user} />
        </div>
    );
}
