'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';
import { Pie } from 'react-chartjs-2';
export default function PieChart({ data }: { data: ChartData<"pie", unknown[], unknown> }) {
    ChartJS.register(ArcElement, Tooltip, Legend);

    return <Pie data={data} />;
}
