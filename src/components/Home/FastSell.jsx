import React from "react";
import TopMostProducst from "./TopMostProducst";
import TopRated from "./TopRated";
import TrendingItems from "./TrendingItems";
import TopSelling from "./TopSelling";

// C:\Users\HP\Desktop\wd\React-e-commerce\src\pages\home\FastSell\TopRated\TopRated.jsx
const FastSell = () => {
  return (
    // Container for centered content with responsive padding
    <div className="container w-[1576px] px-4 py-6">
      {/* Responsive grid:
          - 1 column on mobile
          - 2 columns on small/medium screens
          - 4 columns on large screens */}
      <div className="grid w-[1576px] grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <TopMostProducst></TopMostProducst>
        <TrendingItems />
        <TopRated />
        <TopSelling />
      </div>
    </div>
  );
};

export default FastSell;
