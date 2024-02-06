import { unstable_noStore as noStore } from "next/cache";
import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";
import Image from "next/image";
import { api } from "~/trpc/server";

export default async function UserMenu() {
    noStore();
    const session = await getServerAuthSession();
    const user = await api.user.getMe.query();
    return (
        <div className="flex flex-row items-center justify-center rounded-full px-2 py-2 bg-[#2e026d] gap-2">
            {session ?
                <Link href="/account" className="rounded-full flex flex-row items-center justify-center bg-white/10 px-2 py-2 font-semibold no-underline transition hover:bg-white/20">
                    <p className="px-2">{user?.name ?? session.user.email}</p>
                    <Image
                        width={40}
                        height={40}
                        src={`${user?.image ?? "/default.jpg"}`}
                        alt="User icon."
                        className="rounded-full"
                    />
                </Link>
                :
                <>
                    <Link
                        href="/api/auth/signin"
                        className="rounded-full bg-[#15162c] px-3 py-2 font-semibold no-underline transition hover:bg-white/20"
                    >
                        Login
                    </Link>
                    <Link
                        href="/register"
                        className="rounded-full bg-[#15162c] px-3 py-2 font-semibold no-underline transition hover:bg-white/20"
                    >
                        Signup
                    </Link>
                </>
            }
        </div>
    );
}
