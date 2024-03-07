import { unstable_noStore as noStore } from "next/cache";
import { getServerAuthSession } from "~/server/auth";
import { UserMenuPopover } from "~/app/components/users/UserMenuPopover";
import Link from "next/link";
import Image from "next/image";

export default async function Menu() {
    noStore();
    const session = await getServerAuthSession();
    return (
        <div className="flex flex-row gap-4 bg-muted px-4 py-4">
            <Link href="/">
                <Image
                    src="/site_icon.png"
                    height="40"
                    width="55"
                    alt="QSCCT Logo"
                    className="rounded-full bg-white dark:bg-black p-1" />
            </Link>
            <div className="flex flex-row items-center justify-center rounded-full px-2 py-2 bg-background gap-2">
                {session ?
                    <UserMenuPopover />
                    :
                    <>
                        <Link
                            href="/api/auth/signin"
                            className="rounded-full bg-secondary-foreground px-3 py-2 font-semibold no-underline transition hover:bg-white/20"
                        >
                            Login or Register
                        </Link>
                    </>
                }
            </div>
            <Link href="/lessons" className="rounded-full flex flex-row items-center justify-center bg-white/10 px-4 py-2 font-semibold no-underline transition hover:bg-white/20">View All Lessons</Link>
        </div>
    );
}
