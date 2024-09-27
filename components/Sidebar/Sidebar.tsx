"use client"
import React, { useState } from 'react'
import { SidebaRoute } from '../SidebaRoute'
import { Logo } from '../logo'

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open:boolean) => {
      setIsOpen(open);
    };
  return (
    <div className='h-screen'>
        <div className='h-full flex flex-col border'>
            <Logo/>
            <SidebaRoute handleOpenChange={handleOpenChange}/> 
        </div>
    </div>
  )
}
