import React, { useState } from "react";
import { Grid, List } from "lucide-react";

const ViewToggleAndSort = () => {
  const [view, setView] = useState("list");
  const [sort, setSort] = useState("relevance");
  const sortOptions = [
    { value: "", label: "Sort by" },
    { value: "", label: "Position" },
    { value: "priceHighLow", label: "Relevance" },
    { value: "name", label: "Name, A to Z" },
    { value: "name", label: "Name, Z to A" },

    { value: "parices", label: "Low to high" },
    { value: "parices", label: "Hight to low" },
  ];

  return (
    <div className="#EEEEEE flex w-full items-center justify-between rounded-[6px] border border-[#EEEEEE] px-2 py-2">
      {/* View Toggle Icons */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setView("grid")}
          className={`rounded-md border p-2 ${
            view === "grid"
              ? "bg-[#155DFC] text-white"
              : "bg-white text-gray-500"
          }`}
        >
          <Grid size={18} />
        </button>
        <button
          onClick={() => setView("list")}
          className={`rounded-md border p-2 ${
            view === "list"
              ? "bg-[#155DFC] text-white"
              : "bg-white text-gray-500"
          }`}
        >
          <List size={18} />
        </button>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Sort Dropdown */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="ml-2 border-l bg-transparent pl-3 text-sm font-semibold text-gray-600"
      >
        {sortOptions.map((option) => (
          <option
            className="mt-80 border font-semibold"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ViewToggleAndSort;
