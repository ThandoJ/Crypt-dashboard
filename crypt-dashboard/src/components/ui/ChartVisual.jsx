import React from "react";
import BTCChart from "../../assets/BTCchart.png"; 

export default function ChartVisual() {
  return (
    <div>
    

      <div className="w-full h-full">
        <img
          src={BTCChart}
          alt="BTCChart"
         className="w-full h-[340px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
}