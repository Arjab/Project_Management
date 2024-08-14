import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const MonthlyUserChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Active Users',
        data: [40, 60, 70, 90, 80, 60, 70, 80, 90, 100],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Premium Users',
        data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: 'New Users',
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }
    ],
  };

  return <Bar data={data} />;
};

export default MonthlyUserChart;
