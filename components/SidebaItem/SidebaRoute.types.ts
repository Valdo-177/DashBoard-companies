import { LucideIcon } from "lucide-react"

export type SidebaItemProps = {
    item: {
        label: string,
        icon: LucideIcon,
        href: string
    },
    key: string;
}