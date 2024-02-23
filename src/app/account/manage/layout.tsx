import UserList from "~/app/components/users/UserList";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col gap-4 p-4">
            <h1 className="text-3xl font-bold sm:text-[5rem]">
                Manage Users</h1>
            <br />
            <div className="container flex flex-row items-start">
                <div className="container w-1/4 p-2">
                    <UserList />
                </div>
                <div className="container w-3/4">
                    {children}
                </div>
            </div>
        </div>
    );
}
