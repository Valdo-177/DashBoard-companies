import {
    BarChart4,
    Building2,
    PanelsTopLeft,
    Settings,
    ShieldCheck,
    CircleHelpIcon,
    Calendar
} from 'lucide-react'

export  type SidebaRouteProps = {
    handleOpenChange: (x:boolean) => void;
}
export const dataGeneralSidebar = [
    {
        icon: PanelsTopLeft,
        label:"Dashboard",
        href: "/",
    },
    {
        icon: Building2,
        label:"Companies",
        href: "/companies",
    },
    {
        icon: Calendar,
        label:"Calendar",
        href: "/task",
    },
]   

export const dataToolsSidebar = [
    {
        icon: CircleHelpIcon,
        label:"Fasqs",
        href: "/fasqs",
    },
    {
        icon: BarChart4,
        label:"Analytics",
        href: "/analytics",
    },
]

export const dataSuportSidebar = [
    {
        icon: Settings,
        label:"Setting",
        href: "/setting",
    },
    {
        icon: ShieldCheck,
        label:"Security",
        href: "/security",
    },
]