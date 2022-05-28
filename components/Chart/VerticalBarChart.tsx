import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { v4 as uuidv4 } from 'uuid'
import ChartLabelHorizontal, {
  TChartLabelHorizontal,
} from './ChartLabelHorizontal'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const departments: TChartLabelHorizontal[] = [
  {
    boxClass: 'bg-yellow-400',
    boxCode: 'a',
    label: 'Marketing',
  },
  {
    boxClass: 'bg-orange-400',
    boxCode: 'b',
    label: 'HR',
  },
  {
    boxClass: 'bg-cyan-400',
    boxCode: 'c',
    label: 'Developer',
  },
  {
    boxClass: 'bg-indigo-400',
    boxCode: 'd',
    label: 'Design',
  },
]

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    datalabels: {
      formatter: Math.round,
      top: -20,
      font: {
        weight: 700,
      },
    },
    tooltip: {
      callbacks: {
        title: function (data: any) {
          return departments[data[0].dataIndex].label
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 20,
      bottom: 0,
    },
  },
}

export const data = {
  labels: departments.map((d) => d.boxCode),
  datasets: [
    {
      data: departments.map(() => faker.datatype.number({ min: 0, max: 10 })),
      backgroundColor: [
        'rgb(250, 204, 21)',
        'rgb(251, 146, 60)',
        'rgb(34, 211, 238)',
        'rgb(129, 140, 248)',
      ],
      borderRadius: 8,
    },
  ],
}

const VerticalBarChart = () => {
  return (
    <>
      <div className="-mx-4 mb-7">
        <Bar options={options} plugins={[ChartDataLabels]} data={data} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {departments.map((department: TChartLabelHorizontal) => (
          <ChartLabelHorizontal key={uuidv4()} {...department} />
        ))}
      </div>
    </>
  )
}

export default VerticalBarChart
