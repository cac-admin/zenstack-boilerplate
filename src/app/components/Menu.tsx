import { unstable_noStore as noStore } from "next/cache";
import { getServerAuthSession } from "~/server/auth";
import { UserMenuPopover } from "~/app/components/users/UserMenuPopover";
import Link from "next/link";

export default async function Menu() {
    noStore();
    const session = await getServerAuthSession();
    return (
        <div className="flex flex-row gap-4 bg-[#15162c] px-4 py-4">
            <div className="flex flex-row items-center justify-center rounded-full px-2 py-2 bg-[#2e026d] gap-2">
                {session ?
                    <UserMenuPopover />
                    :
                    <>
                        <Link
                            href="/api/auth/signin"
                            className="rounded-full bg-[#15162c] px-3 py-2 font-semibold no-underline transition hover:bg-white/20"
                        >
                            Login or Register
                        </Link>
                    </>
                }
            </div>
            <Link href="/dashboard" className="rounded-full flex flex-row items-center justify-center bg-white/10 px-4 py-2 font-semibold no-underline transition hover:bg-white/20">Learning Dashboard</Link>
        </div>
    );
}
