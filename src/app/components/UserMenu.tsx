import { unstable_noStore as noStore } from "next/cache";
import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";
import Image from "next/image";

export default async function UserMenu() {
    noStore();
    const session = await getServerAuthSession();
    return (
        <div className="flex flex-row items-center justify-center rounded-full px-2 py-2 bg-[#2e026d] gap-2">
            {session ?
                <Link href="/dashboard/account" className="rounded-full flex flex-row items-center justify-center bg-white/10 px-2 py-2 font-semibold no-underline transition hover:bg-white/20">
                    <p className="px-2">{session.user?.name ?? session.user.email}</p>
                    <Image
                        width={40}
                        height={40}
                        src={`${session.user?.image ?? "/default.jpg"}`}
                        alt="User icon."
                        className="rounded-full h-8 w-8 object-cover"
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
