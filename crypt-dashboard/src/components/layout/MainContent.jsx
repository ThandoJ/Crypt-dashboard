import MetricCard from "../ui/MetricCard";
import ChartVisual from "../ui/ChartVisual";
import Transactions from "../ui/TransactionTable";
import LiveMarket from "../ui/LiveMarket";

export default function MainContent() {
  return (
    <div className="px-8 py-6 bg-[#F9FAFD] flex-1 overflow-y-auto">

      {/* Top Section */}
      <div className="grid grid-cols-3 gap-6">

        {/* Metric Cards */}
        <div className="mt-4 col-span-2 grid grid-cols-2 gap-x-3 gap-y-2 max-w-[500px]">
          <MetricCard />
        </div>

        {/* BTC Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <ChartVisual />
        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-4 mt-10">

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <LiveMarket />
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <Transactions />
        </div>

      </div>

    </div>
  );
}