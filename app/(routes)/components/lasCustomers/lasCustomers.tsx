import { Building } from "lucide-react"
import { IconCuston } from "../../../../components/IconCuston"
import { CustomersTable } from "../CustomersTable"

export const LasCustomers = () => {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5">
        <div className="flex gap-x-2 items-center">
            <IconCuston icon={Building}/>
            <p className="text-xl">Last customers</p>
        </div>
        <div>
            <CustomersTable/>
        </div>
    </div>
  )
} 