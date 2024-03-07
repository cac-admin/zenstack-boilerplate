import NewUserForm from "~/app/components/users/NewUserForm";

export default function Page() {
    return (
        <div className="w-full flex flex-col p-4">
            <h2 className="text-semibold text-4xl">Create a New User</h2>
            <NewUserForm />
        </div>
    );
}

