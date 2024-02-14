import { Dispatch, SetStateAction } from "react";
import Spinner from "~/app/components/Spinner";
import { api } from "~/trpc/react";
import { UserWithRoles } from "~/app/components/users/UserList";

export default function EditUserForm({ user, setUser }: {
    user: UserWithRoles,
    setUser: Dispatch<SetStateAction<UserWithRoles | undefined>>
}) {
    const { data: roles, isLoading: isRolesLoading } = api.zen.role.findMany.useQuery({});
    const { mutate, isLoading, isSuccess, error } = api.zen.user.update.useMutation();

    if (isLoading || isRolesLoading) {
        return (
            <div className="w-max flex items-center rounded-3xl px-4 py-2 my-2 bg-white/10">
                <Spinner className="w-6 h-6 place-self-center" />
            </div>
        );
    }

    return (
        <div className="w-full rounded-3xl px-4 py-2 flex flex-col max-w-xs bg-white/10">
            <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const roleVals = roles?.filter((role) => formData.get(role.name));

                try {
                    mutate({
                        data: {
                            roles: { connect: roleVals }
                        },
                        where: {
                            id: user.id
                        }
                    });
                }
                catch (e: unknown) {
                    console.error(e);
                }
            }}>
                <div className="container flex flex-col gap-4">
                    {roles?.map((role) =>

                        <div className="container flex flex-row" key={role.id} >
                            <label htmlFor={role.name} className="pr-4 py-2 my-2">{role.name}</label>
                            <input type="checkbox" name={role.name} defaultChecked={user.roles?.find((r) => r.id = role.id) !== undefined} className="w-5 h-5 rounded-full px-4 py-2 my-2 bg-white/10" />
                        </div>)}
                </div>
                {isLoading ?
                    <Spinner className="w-6 h-6 place-self-center" />
                    :
                    <input
                        type="submit"
                        value="Submit"
                        className="rounded-full px-4 py-2 my-2 bg-white/10"
                    />
                }
            </form>
            {isSuccess && <p>User updated successfully</p>}
        </div>
    );
}
