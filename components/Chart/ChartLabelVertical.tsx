import React from 'react'

type Props = {
    label: string;
    value: number;
    background: string;
}

const ChartLabelVertical = ({label, value, background}: Props) => {
  return (
    <div>
        <div className='flex items-center mb-2'>
            <div className='w-3 h-3 rounded-full mr-1' style={{background}}></div>
            <span className='text-sm text-gray-500'>{label}</span>
        </div>
        <p className='text-lg font-bold'>{value}</p>    
    </div>
  )
}

export default ChartLabelVertical