import React from 'react'
import cx from 'classnames'

type Props = {
  variant: 'orange' | 'indigo' | 'blue'
  title: string
  subtitle: string
  info: string
}

const Info = ({ variant, title, subtitle, info }: Props) => {
  const infoClass = cx(
    'group p-4 rounded-xl  flex flex-col justify-center items-center duration-200',
    {
      'bg-orange-100 hover:bg-orange-500': variant === 'orange',
      'bg-indigo-100 hover:bg-indigo-500': variant === 'indigo',
      'bg-blue-100 hover:bg-blue-500': variant === 'blue',
    },
  )

  return (
    <div className={infoClass}>
      <h3 className="group-hover:text-white text-2xl font-bold">{title}</h3>
      <p className="group-hover:text-white text-sm font-medium">{subtitle}</p>
      <p className="group-hover:text-white text-xs text-gray-500">{info}</p>
    </div>
  )
}

export default Info
