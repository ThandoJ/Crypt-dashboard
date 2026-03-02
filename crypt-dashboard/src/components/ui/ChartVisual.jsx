import React from "react";
import BTCChart from "../../assets/BTCchart.png"; // make sure filename matches EXACTLY

export default function ChartVisual() {
  return (
    <div>
    

      <div className="w-full h-[260px]">
        <img
          src={BTCChart}
          alt="BTCChart"
         className="w-full h-[340px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
}