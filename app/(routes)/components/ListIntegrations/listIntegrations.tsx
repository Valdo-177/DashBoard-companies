import { IconCuston } from '@/components/IconCuston'
import { List } from 'lucide-react'
import React from 'react'
import { TableIntegration } from '../TableIntegration'

export const ListIntegrations = () => {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5 w-full">
        <div className="flex gap-x-2 items-center">
            <IconCuston icon={List}/>
            <p className="text-xl">List Integrations</p>
        </div>
        <div>
            <TableIntegration/>
        </div>
    </div>
  )
}