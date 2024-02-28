import NewUserForm from "~/app/components/users/NewUserForm";

export default function Page() {
    return (
        <div className="w-full flex flex-col gap-4 p-4">
            <h2>Create a New User</h2>
            <NewUserForm />
        </div>
    );
}

