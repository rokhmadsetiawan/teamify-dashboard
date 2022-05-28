import React from 'react'
import cx from 'classnames'
type Props = {
  title: string
  variant?: 'base'
}

const Button = ({ title, variant = 'base' }: Props) => {
  const buttonClass = cx('py-2 px-4 w-full rounded-md text-xs duration-200', {
    'text-indigo-600 bg-white hover:text-white hover:bg-indigo-500': variant === 'base',
  })

  return <button className={buttonClass}>{title}</button>
}

export default Button
