import MetricCard from "../ui/MetricCard";
import ChartVisual from "../ui/ChartVisual";
import Transactions from "../ui/TransactionTable";
import LiveMarket from "../ui/LiveMarket";

export default function MainContent() {
  return (
<div className="px-8 py-4 bg-[#F9FAFD] flex-1 min-h-screen">

      {/* Top Section */}
      <div className="grid grid-cols-4 gap-4 flex-[0.9]">

        {/* Metric Cards */}
        <div className=" col-span-2 grid grid-cols-2 gap-x-6 gap-y-6 max-w-[400px]">
          <MetricCard />
        </div>

        {/* BTC Chart */}
          <div className="col-span-2 bg-white rounded-xl p-6 shadow-sm flex flex-col">
          <ChartVisual />
        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-3 gap-4 mt-4 flex-1 overflow-hidden">

        <div className="col-span-2 bg-white rounded-xl p-4 shadow-sm overflow-auto">
          <LiveMarket />
        </div>

        <div className="col-span-1 bg-white rounded-xl p-4 shadow-sm overflow-auto">
          <Transactions />
        </div>

      </div>

    </div>
  );
}