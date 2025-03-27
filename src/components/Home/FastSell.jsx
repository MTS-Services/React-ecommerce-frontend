import React from "react";
import TopMostProducst from "./TopMostProducst";
import TopRated from "./TopRated";
import TrendingItems from "./TrendingItems";
import TopSelling from "./TopSelling";

// C:\Users\HP\Desktop\wd\React-e-commerce\src\pages\home\FastSell\TopRated\TopRated.jsx
const FastSell = () => {
  return (
    // Container for centered content with responsive padding
    <div className="flex items-center justify-center">
      {/* Responsive grid:
          - 1 column on mobile
          - 2 columns on small/medium screens
          - 4 columns on large screens */}
      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:w-[1527px] lg:grid-cols-4">
        <TopMostProducst />
        <TrendingItems />
        <TopRated />
        <TopSelling />
      </div>
    </div>
  );
};

export default FastSell;
