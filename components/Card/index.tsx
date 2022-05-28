import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const Card = ({children}: Props) => {
  return (
    <div className='bg-white p-6 border-[1px] rounded-lg hover:shadow-2xl duration-500 hover:border-white'>{children}</div>
  )
}

export default Card