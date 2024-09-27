"use client"

import { IconCuston } from '@/components/IconCuston'
import {Percent} from 'lucide-react'
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Tooltip,
    Legend
} from 'recharts'
import { TotalSuscrebersData } from './TotalSuscrebers.data'

export const TotalSuscrebers = () => {
  return (
    <div className="mb-4 lg:mb-0 shadow-sm bg-background rounded-lg p-5 w-full xl:w-96 hover:shadow-lg transition">
    <div className="flex gap-x-2 items-center mb-4">
        <IconCuston icon={Percent}/>
        <p className="text-xl">Total suscribers</p>
    </div>
    <div className='w-full h-[250px] p-5'>
        <ResponsiveContainer aspect={1} maxHeight={200}>
            <PieChart>
                <Pie 
                    dataKey="value"
                    data={TotalSuscrebersData}
                    outerRadius={80}
                    labelLine={false}
                />
                <Tooltip/>
                <Legend/>
            </PieChart>
        </ResponsiveContainer>
    </div>
</div>
  )
}