"use client"
import React from 'react'
import { SidebaItemProps } from './SidebaRoute.types'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const SidebaItem = ({item}:SidebaItemProps) => {
  const { href, icon :Icon, label} = item;
  const pathName = usePathname()
  const AntivePath = pathName === href
  return (
    <Link 
    href={href}
    className={cn(`flex gap-x-2 mt-2 light:text-slate-700 dark:text-white text-sm items-center hover:bg-slate-300/20 rounded-lg p-2 cursor-pointer`, AntivePath && 'bg-slate-400/20')}
    >
      <Icon className='h-5 w-5' strokeWidth={1}/>
      {label}
    </Link>
  )
}

export default SidebaItem