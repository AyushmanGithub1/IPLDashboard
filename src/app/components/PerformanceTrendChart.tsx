"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const matchNumbers = [1, 2, 3, 4, 5];
const teamData = [
  {
    label: 'CSK',
    data: [2, 4, 6, 8, 10],
    borderColor: '#fbbf24', // yellow
    backgroundColor: '#fde68a',
  },
  {
    label: 'MI',
    data: [0, 2, 4, 6, 8],
    borderColor: '#2563eb', // blue
    backgroundColor: '#93c5fd',
  },
  {
    label: 'RCB',
    data: [2, 2, 4, 6, 6],
    borderColor: '#ef4444', // red
    backgroundColor: '#fecaca',
  },
  {
    label: 'KKR',
    data: [2, 4, 6, 6, 6],
    borderColor: '#6366f1', // purple
    backgroundColor: '#dbeded',
  },
  {
    label: 'DC',
    data: [0, 2, 2, 4, 8],
    borderColor: '#3b82f6', // blue
    backgroundColor: '#c7d2fe',
  },
  {
    label: 'SRH',
    data: [0, 0, 2, 4, 6],
    borderColor: '#f59e42', // orange
    backgroundColor: '#fde68a',
  },
];

const data = {
  labels: matchNumbers.map((n) => `Match ${n}`),
  datasets: teamData.map((team) => ({
    label: team.label,
    data: team.data,
    borderColor: team.borderColor,
    backgroundColor: team.backgroundColor,
    fill: false,
    pointRadius: 4,
    pointHoverRadius: 6,
    pointBackgroundColor: team.borderColor,
    pointBorderColor: '#fff',
    borderWidth: 2,
  })),
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top' as const,
      labels: {
        color: '#334155',
        font: { size: 14 },
      },
    },
    title: {
      display: false,
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Match Number',
        color: '#334155',
        font: { size: 14 },
      },
      ticks: {
        color: '#334155',
        font: { size: 12 },
      },
      grid: {
        display: false,
      },
    },
    y: {
      title: {
        display: true,
        text: 'Points Accumulated',
        color: '#334155',
        font: { size: 14 },
      },
      beginAtZero: true,
      ticks: {
        color: '#334155',
        font: { size: 12 },
        stepSize: 2,
      },
      grid: {
        color: '#e5e7eb',
      },
    },
  },
  maintainAspectRatio: false,
};

const PerformanceTrendChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-xl my-6">
      <h3 className="text-lg font-bold text-blue-800 mb-4">Team Performance Trend</h3>
      <div className="h-64 w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default PerformanceTrendChart; 