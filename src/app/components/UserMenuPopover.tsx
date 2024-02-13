"use client"

import Link from "next/link";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { api } from "~/trpc/react";

export function UserMenuPopover() {
    const { data: user } = api.user.getMe.useQuery();
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="rounded-full flex flex-row items-center justify-center bg-white/10 px-2 py-2 font-semibold no-underline transition hover:bg-white/20">
                    <p className="px-2">{user?.name ?? user?.email}</p>
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
                    <Link href="/account" className="rounded-full flex flex-row items-center justify-center bg-white/10 px-2 py-2 font-semibold no-underline transition hover:bg-white/20">My Account</Link>
                    <Link href="/lessons" className="rounded-full flex flex-row items-center justify-center bg-white/10 px-2 py-2 font-semibold no-underline transition hover:bg-white/20">Manage Lessons</Link>
                </div>
            </PopoverContent>
        </Popover >
    );
}
