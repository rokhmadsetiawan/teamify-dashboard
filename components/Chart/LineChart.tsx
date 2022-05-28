import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

export const options = {
  responsive: true,
  bezierCurve: true,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        font: {
          size: 12,
          color: '#6B7280',
        },
        padding: 10,
        crossAlign: 'start',
      },
    },
    y: {
      //   grid: {
      //     display: false,
      //     drawBorder: false,
      //   },
      ticks: {
        // display: false,
        min: 0,
        max: 100,
        font: {
          size: 12,
          color: '#6B7280',
        },
        padding: 10,
        crossAlign: 'start',
      },
    },
  },
}

const labels = [
  'October 2021',
  'November 2021',
  'Desember 2021',
  'January 2022',
  'February 2022',
  'March 2022',
]

export const data = {
  labels,
  datasets: [
    {
      label: 'Achieved ',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 80 })),
      borderColor: 'rgb(251, 146, 60)  ',
      backgroundColor: 'rgb(251, 146, 60)  ',
      lineTension: 0.2,
    },
    {
      label: 'Target ',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 80 })),
      borderColor: 'rgb(129, 140, 248)',
      backgroundColor: 'rgb(129, 140, 248)',
      lineTension: 0.2,
    },
  ],
}

const LineChart = () => {
  return <Line options={options} data={data} />
}

export default LineChart
