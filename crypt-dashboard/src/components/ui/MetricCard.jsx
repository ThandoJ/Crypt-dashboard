import React from "react";
// Import chart images
import BTC from "../../assets/BTC chartl.png";
import ETH from "../../assets/ETH chartl.png";
import ADA from "../../assets/Ada-chartl.png";
import ITC from "../../assets/ITC chartl.png";

export default function MetricCard() {
  /* Array of coins, with objects that include, name, symbol, price, chart, and trend with a boolean too*/
  const coins = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      image: BTC,
      price: "$40,291",
      trend: "+0.25%",
      positive: true,
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      image: ETH,
      price: "$18,291",
      trend: "+0.25%",
      positive: true,
    },
    {
      name: "Litecoin",
      symbol: "ITC",
      image: ITC,
      price: "$8,291",
      trend: "+0.25%",
      positive: true,
    },
    {
      name: "Cardano",
      symbol: "ADA",
      image: ADA,
      price: "$3,291",
      trend: "-2.05%",
      positive: false,
    },
  ];



 return (
    <>
      {/* Array map that creates a card for each coin*/}
      {coins.map((coin, index) => (
       <div
  key={index}
  className="bg-white rounded-lg p-3 shadow-sm aspect-square flex flex-col justify-between">


          {/*Symbol and the trend*/}
            <div className="flex items-center justify-between mb-2"> 

            {/*Coin image*/}
            <img src={coin.image} alt={coin.name} className="w-[40px] h-[40px] object-contain"/>

            {/*Trend indicator with two different colors */}
            <p className={`text-sm font-semibold ${coin.positive ? "text-trend-green" : "text-trend-red"}`}>
              {coin.positive ? "▲" : "▼"} {coin.trend}
            </p>
         </div>

          {/*Coin price and coin name below the coin image*/}
          <div className="flex flex-col mt-2">

            {/*Coin price*/}
            <h2 className="text-xl font-bold coin-value">
              {coin.price}
            </h2>

            {/*Coin name and symbol*/}
            <p className="text-sm text-coin">
              {coin.name} - {coin.symbol}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}