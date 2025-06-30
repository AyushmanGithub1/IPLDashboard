"use client";

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Dummy IPL points data
const teamPoints = [
  { team: 'CSK', points: 14 },
  { team: 'MI', points: 12 },
  { team: 'RCB', points: 10 },
  { team: 'KKR', points: 8 },
  { team: 'DC', points: 8 },
  { team: 'SRH', points: 6 },
];

const data = {
  labels: teamPoints.map((t) => t.team),
  datasets: [
    {
      label: 'Points',
      data: teamPoints.map((t) => t.points),
      backgroundColor: [
        '#fbbf24', // CSK - yellow
        '#2563eb', // MI - blue
        '#ef4444', // RCB - red
        '#6366f1', // KKR - purple
        '#3b82f6', // DC - blue
        '#f59e42', // SRH - orange
      ],
      borderRadius: 6,
      barPercentage: 0.6,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#334155',
        font: { size: 12 },
        maxRotation: 30,
        minRotation: 0,
      },
      grid: {
        display: false,
      },
    },
    y: {
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

const PointsBarChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-xl my-6">
      <h3 className="text-lg font-bold text-blue-800 mb-4">Team Points Bar Chart</h3>
      <div className="h-64 w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default PointsBarChart; 