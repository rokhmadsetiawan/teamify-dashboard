import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import {
  FiBriefcase,
  FiCommand,
  FiFolder,
  FiGrid,
  FiPhone,
  FiSettings,
  FiUsers,
} from 'react-icons/fi'
import Button from '../Button'
import SidebarListItem from './SidebarListItem'
import SidebarSeparator from './SidebarSeparator'

type Props = {}

const Sidebar = (props: Props) => {
    const router = useRouter();

  return (
    <aside className="p-8 bg-gray-100 flex flex-col h-full">
      <div className="flex items-center mb-8">
        <Image
          src={'/logo.svg'}
          width={32}
          height={32}
          layout="fixed"
          alt="logo"
        />
        <span className="ml-2  lg:text-lg font-semibold text-indigo-600">
          Teamify
        </span>
      </div>
      <nav className="mb-auto">
        <ul>
          <SidebarListItem
            active={router.pathname === '/'}
            href="/"
            icon={<FiGrid size={24} />}
            label="Dashboard"
          />
          <SidebarListItem
            href="/teams"
            active={router.pathname ==="/teams"}
            icon={<FiCommand size={24} />}
            label="Teams"
          />
          <SidebarListItem
            href="/employees"
            active={router.pathname ==="/employees"}
            icon={<FiUsers size={24} />}
            label="Employees"
          />
          <SidebarListItem
            href="/projects"
            active={router.pathname ==="/projects"}
            icon={<FiBriefcase size={24} />}
            label="Projects"
          />
          <SidebarSeparator />
          <SidebarListItem
            href="/meetings"
            active={router.pathname ==="/meetings"}
            icon={<FiPhone size={24} />}
            label="Meetings"
          />
          <SidebarListItem
            href="/tasks"
            active={router.pathname ==="/tasks"}
            icon={<FiFolder size={24} />}
            label="Tasks"
          />
          <SidebarListItem
            href="/settings"
            active={router.pathname ==="/settings"}
            icon={<FiSettings size={24} />}
            label="Settings"
          />
        </ul>
      </nav>
      <div className="mt-auto flex flex-col items-center bg-indigo-100 px-4  rounded-xl pb-8">
        <div className="-mt-8">
          <Image
            src={'/illustration-1.svg'}
            width={150}
            height={155}
            layout="fixed"
            alt="ilustration"
          />
        </div>
    <Button title='Share Your Thoughts' />
        
      </div>
    </aside>
  )
}

export default Sidebar
