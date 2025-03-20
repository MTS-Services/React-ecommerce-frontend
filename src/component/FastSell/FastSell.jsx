import React from "react";
import TopRated from "../TopRated/TopRated";
import TrendingItems from "../TrendingItems/TrendingItems";
import TopSelling from "../TopSelling/TopSelling";
import TopMostProducst from "../TopMostProducts/TopMostProducst";

const FastSell = () => {
  return (
    // Container for centered content with responsive padding
    <div className="container mx-auto px-4 py-6">
      {/* Responsive grid:
          - 1 column on mobile
          - 2 columns on small/medium screens
          - 4 columns on large screens */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <TopMostProducst />
        <TrendingItems />
        <TopRated />
        <TopSelling />
      </div>
    </div>
  );
};

export default FastSell;
