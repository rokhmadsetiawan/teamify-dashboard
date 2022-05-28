import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { v4 as uuidv4 } from 'uuid'
import ChartLabelVertical from './ChartLabelVertical'

ChartJS.register(ArcElement, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
}

export const data = {
  labels: ['Inactive', 'Active', 'Total'],
  datasets: [
    {
      data: [254, 3000, 3254],
      backgroundColor: [
        'rgb(129, 140, 248)',
        'rgb(251, 146, 60)',
        'rgb(250, 204, 21)',
      ],
      spacing: 2,
      weight: 2
    },
  ],
}

const DoughnutChart = () => {
  return (
    <div className="flex">
      <div className="w-1/3 space-y-9">
        {data.labels.map((label, i) => (
          <ChartLabelVertical
            label={label}
            background={data.datasets[0].backgroundColor[i]}
            value={data.datasets[0].data[i]}
            key={uuidv4()}
          />
        ))}
      </div>
      <div className="w-2/3">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  )
}

export default DoughnutChart
