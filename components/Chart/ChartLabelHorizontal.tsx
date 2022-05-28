import React from 'react'
import cx from 'classnames'

export type TChartLabelHorizontal = {
  label: string
  boxCode: string
  boxClass: string
}

const ChartLabelHorizontal = ({ label, boxClass, boxCode }: TChartLabelHorizontal) => {
  const boxClassName = cx(
    'w-6 h-6 rounded-[4px] mr-3 flex items-center justify-center text-xs font-semibold text-white',
    boxClass,
  )

  return (
    <div className="flex items-center">
      <div className={boxClassName}>{boxCode}</div>
      <span className="font-semibold text-sm text-gray-500">{label}</span>
    </div>
  )
}

export default ChartLabelHorizontal
