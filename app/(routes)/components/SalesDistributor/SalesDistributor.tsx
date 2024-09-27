import { BarChart } from "lucide-react"
import { IconCuston } from "../../../../components/IconCuston"
import { GraphicSuscribers } from "../GraphicSuscribers"

export const SalesDistributor = () => {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5">
        <div className="flex gap-x-2 items-center">
            <IconCuston icon={BarChart}/>
            <p className="text-xl">Sales Distributor</p>
        </div>
        <div>
            <GraphicSuscribers/>
        </div>
    </div>
  )
}
