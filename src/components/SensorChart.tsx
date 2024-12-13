import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { format } from 'date-fns';
import type { SensorData } from '../types/sensors';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SensorChartProps {
  data: SensorData[];
  sensorKey: keyof Omit<SensorData, 'timestamp'>;
  label: string;
  color: string;
}

export function SensorChart({ data, sensorKey, label, color }: SensorChartProps) {
  const chartData = {
    labels: data.map(d => format(new Date(d.timestamp), 'HH:mm')),
    datasets: [
      {
        label,
        data: data.map(d => d[sensorKey]),
        borderColor: color,
        backgroundColor: color + '20',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Line options={options} data={chartData} />
    </div>
  );
}