import React, { ReactNode, useState } from 'react'
import cx from 'classnames'
import Link from 'next/link'

type Props = {
  icon: ReactNode
  label: string
  href: string,
  active: boolean;
}

const SidebarListItem = ({ icon, label, href, active = false }: Props) => {
  const sidebarListItemClass = cx(
    'duration-100 lg:text-lg  hover:text-indigo-500 py-3 flex items-center cursor-pointer',
    { 'text-indigo-500': active },
    {
      'text-gray-500': !active,
    },
  )


  return (
    <li className={sidebarListItemClass}>
      <Link href={href}>
        <a className="flex">
          {icon}
          <span className="ml-4">{label}</span>
        </a>
      </Link>
    </li>
  )
}

export default SidebarListItem
