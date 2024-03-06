import type { Learning, Lesson, Subject } from "@prisma/client";
import { api } from "~/trpc/server";
import PieChart from "./PieChart";

export interface LearningWithLessons extends Learning {
    completedLessons?: Lesson[]
}

export default async function SubjectCompletion({ subject }: { subject: Subject }) {
    const lessonsCompleted = await api.zen.learning.findFirst.query({ where: { subjectName: subject.name }, include: { completedLessons: true } }) as LearningWithLessons;
    const lessons = await api.zen.lesson.findMany.query({ where: { subName: subject.name } });
    const data = {
        labels: [subject.name, ''],
        datasets: [
            {
                label: "Lessons Completed: ",
                data: [lessonsCompleted?.completedLessons?.length, lessons.length - (lessonsCompleted?.completedLessons?.length ?? 0)],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            }
        ]
    };
    return (
        <div>
            <h2>Current Subject: {subject.name}</h2>
            <PieChart data={data} />
        </div>
    );
}

