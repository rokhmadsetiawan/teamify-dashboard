import Image from 'next/image'
import React from 'react'

type Props = {
    user: string;
    src: string;
    title: string;
    date: string;
}

const Notification = ({ user, src, title, date }: Props) => {
  return (
    <div className="flex p-2 bg-gray-100 items-center rounded-xl">
      <div className="w-9 h-9 rounded mr-4">
        <Image
          src={src}
          alt={user}
          width={36}
          height={36}
          layout="fixed"
        />
      </div>
      <div>
        <h4 className="text-xs font-medium">{title}</h4>
        <p className="text-xxs text-gray-500">{date}</p>
      </div>
    </div>
  )
}

export default Notification
