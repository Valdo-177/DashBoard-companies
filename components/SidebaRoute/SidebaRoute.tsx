"use client"
import SidebaItem from '../SidebaItem/SidebaItem'
import { Button } from '../ui/button'
import { dataGeneralSidebar, dataSuportSidebar, dataToolsSidebar, SidebaRouteProps } from './SidebaRoute.data'
import { Separator } from "@/components/ui/separator"


export const SidebaRoute = ({ handleOpenChange }: SidebaRouteProps) => {
    return (
        <div className='flex flex-col justify-between h-full'>
            <div>
                <div className='p-2 md:p-6'>
                    <p className='text-slate-500 mb-2 font-medium'>GENERAL</p>
                    {dataGeneralSidebar.map(item => (
                        <div onClick={() => handleOpenChange(false)}>
                            <SidebaItem item={item} key={item.label} />
                        </div>
                    ))}
                </div>
                <Separator />
                <div className='p-2 md:p-6'>
                    <p className='text-slate-500 mb-2 font-medium'>TOOLS</p>
                    {dataToolsSidebar.map(item => (
                        <div onClick={() => handleOpenChange(false)}>
                            <SidebaItem item={item} key={item.label} />
                        </div>
                    ))}
                </div>
                <Separator />
                <div className='p-2 md:p-6'>
                    <p className='text-slate-500 mb-2 font-medium'>SUPORT</p>
                    {dataSuportSidebar.map(item => (
                        <div onClick={() => handleOpenChange(false)}>
                            <SidebaItem item={item} key={item.label} />
                        </div>
                    ))}
                </div>
                <Separator />
            </div>
            <div>
                <div className='text-center p-6'>
                    <Button variant='outline' className='w-full'>
                        UpGrade Plan
                    </Button>
                </div>
                <Separator />

                <footer className='mt-3 p-3 text-center'>
                    2024. All rights reserved
                </footer>
            </div>
        </div>
    )
}