import Header from "./Header";
import MetricCard from "../ui/MetricCard";
import ChartVisual from "../ui/ChartVisual";
import TransactionTable from "../ui/TransactionTable";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiLitecoin, SiCardano } from "react-icons/si";

export default function MainContent() {
  return (
    <div className="flex-1 p-10 overflow-y-auto">

      <Header />

{/* Chart + Transactions */}
      <div className="grid grid-cols-3 gap-8 mt-10">
        <div className="col-span-2">
          <ChartVisual />
        </div>
        <TransactionTable />
      </div>

    </div>
  );
}




  {/* Chart + Transactions */}
      <div className="grid grid-cols-3 gap-8 mt-10">
        <div className="col-span-2">
          <ChartVisual />
        </div>
        <TransactionTable />
      </div>


