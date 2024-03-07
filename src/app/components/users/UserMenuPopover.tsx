import Link from "next/link";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "~/app/components/ui/popover";
import { Button } from "~/app/components/ui/button";
import { api } from "~/trpc/server";
import { getServerAuthSession } from "~/server/auth";
import { UserWithRoles } from "./UserList";

export async function UserMenuPopover() {
    const session = await getServerAuthSession();
    const user = await api.zen.user.findFirst.query({ where: { id: session?.user.id }, include: { roles: true } }) as UserWithRoles;

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="rounded-full flex flex-row items-center justify-center bg-popover px-2 py-2 font-semibold no-underline transition hover:bg-white/20">
                    <p className="px-2 text-foreground">{user?.name ?? session?.user?.email}</p>
                    <Image
                        width={40}
                        height={40}
                        src={`${user?.image ?? "/default.jpg"}`}
                        alt="User icon."
                        className="rounded-full h-8 w-8 object-cover"
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="container flex flex-col gap-4">
                    <Link href="/profile" className="rounded-full flex flex-row items-center justify-center bg-white/10 px-2 py-2 font-semibold no-underline transition hover:bg-white/20">Manage Profile</Link>
                    {user.roles?.find((r) => r.name === "author" || r.name === "admin") && <Link href="/lessons/manage" className="rounded-full flex flex-row items-center justify-center bg-white/10 px-2 py-2 font-semibold no-underline transition hover:bg-white/20">Manage Lessons</Link>}
                    {user.roles?.find((r) => r.name === "admin") && <Link href="/users/manage" className="rounded-full flex flex-row items-center justify-center bg-white/10 px-2 py-2 font-semibold no-underline transition hover:bg-white/20">Manage Users</Link>}
                    <Link href="/api/auth/signout" className="rounded-full flex flex-row items-center justify-center bg-white/20 px-2 py-2 font-semibold no-underline transition hover:bg-white/30">Logout</Link>
                </div>
            </PopoverContent>
        </Popover >
    );
}
