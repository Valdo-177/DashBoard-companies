import { BookOpenCheck, UserRound, Waypoints } from "lucide-react";
import { SumerDataProps } from "./models.types";

export const SummaryData: SumerDataProps[] = [
    {
        icon: UserRound,
        total: "12.450",
        average: 15,
        title: "Compannies create",
        tooltipText: "See all of the companies create",
    },
    {
        icon: Waypoints,
        total: "86.5%",
        average: 80,
        title: "Total Revenue",
        tooltipText: "See all of the summary",
    },
    {
        icon: BookOpenCheck,
        total: "363,95€",
        average: 30,
        title: "Bounce Rate",
        tooltipText: "See all of the bounce rate",
    },
]

