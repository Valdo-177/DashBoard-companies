import { IconsCustonProps } from "./IconCuston.types"

export const IconCuston = ({icon : Icon} : IconsCustonProps) => {
  return (
    <div className="p-2 bg-slate-400/20 rounded-lg">
        <Icon strokeWidth={1} className="w-4 h-4 " />
    </div>
  )
}