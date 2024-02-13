import Link from "next/link";
import UserMenu from "~/app/components/UserMenu";

export default function Menu() {
    return (
        <div className="flex flex-row gap-4 bg-[#15162c] px-4 py-4">
            <UserMenu />
            <Link href="/dashboard/lessons" className="rounded-full flex flex-row items-center justify-center bg-white/10 px-4 py-2 font-semibold no-underline transition hover:bg-white/20">Lessons</Link>
        </div>
    );
}
