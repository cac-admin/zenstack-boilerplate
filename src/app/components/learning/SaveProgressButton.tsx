'use client';

import { Lesson, User } from "@prisma/client";
import { Button } from "../ui/button";
import { api } from '~/trpc/react';
import Spinner from "../Spinner";

export default function SaveProgressButton({ user, lesson }: { lesson: Lesson, user: User }) {
    const { mutate, isLoading, isError, isSuccess } = api.zen.learning.upsert.useMutation();

    if (isLoading) {
        return (
            <div className="w-max flex items-center rounded-3xl px-4 py-2 my-2 bg-white/10">
                <Spinner className="w-6 h-6 place-self-center" />
            </div>
        );
    }

    if (isError) {
        return <p className="text-red-500">Something Went Wrong. Please try again later.</p>;
    }

    if (isSuccess) {
        return <p className="text-green-500">&#10004;</p>;
    }

    return (
        <Button
            className="rounded-full bg-white/10 px-4 py-2 my-2 font-semibold no-underline transition hover:bg-white/20"
            onClick={() => {
                try {
                    mutate({
                        where: {
                            userId: user.id,
                            completedLessons: {
                                some: {
                                    id: lesson.id
                                }
                            }
                        },
                        update: {
                            completedLessons: {
                                connect: lesson
                            }
                        }
                        ,
                        create: {
                            user: {
                                connect: {
                                    id: user.id
                                }
                            },
                            pinnedSubject: {
                                connect: {
                                    name: lesson.subName
                                }
                            },
                            completedLessons: {
                                connect: lesson
                            }
                        }
                    });
                }
                catch (e: unknown) {
                    console.log(e);
                }
            }}>
            Mark Lesson as Completed
        </Button>
    );
}
