import { Logo } from '@/components/logo'
import React from 'react'

const LayoutAuth = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='flex flex-col items-center justify-center h-[100vh] gap-2'>
      <Logo/>
      <p className='text-xl font-bold'>Welcome</p>
      {children}
    </div>
  )
}

export default LayoutAuth