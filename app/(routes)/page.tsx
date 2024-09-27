import CardSummary from "./components/CardSummary/CardSummary";
import { SummaryData } from "@/models";
import { LasCustomers } from "./components/lasCustomers";
import { SalesDistributor } from "./components/SalesDistributor";
import { TotalSuscrebers } from "./components/TotalSuscrebers";
import { ListIntegrations } from "./components/ListIntegrations";


export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {SummaryData.map(item => (
          <CardSummary
            icon={item.icon}
            total={item.total}
            average={item.average}
            title={item.title}
            tooltipText={item.tooltipText}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 mt-12 gap-2">
        <LasCustomers/>
        <SalesDistributor/>
      </div>
      <div className="flex-col xl:flex xl:flex-row gap-y-4 md:gap-x-10 md:gap-y-0 mt-12 md:mt-10 justify-center ">
        <TotalSuscrebers/>
        <ListIntegrations/>
      </div>
    </div>
  );
}
