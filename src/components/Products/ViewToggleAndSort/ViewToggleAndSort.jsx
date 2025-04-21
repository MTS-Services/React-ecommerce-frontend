import React, { useState } from "react";
import { Grid, List } from "lucide-react";

const ViewToggleAndSort = () => {
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("relevance");

  const sortOptions = [
    { value: "relevance", label: "None" },
    { value: "name-asc", label: "Name, A to Z" },
    { value: "name-desc", label: "Name, Z to A" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
  ];

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="flex w-full items-center justify-between rounded-md border border-gray-200 bg-white px-4 py-2">
      {/* View Toggle Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleViewChange("grid")}
          className={`rounded p-2 transition-colors ${
            view === "grid"
              ? "bg-blue-800 text-white"
              : "bg-white text-gray-500 hover:bg-gray-100"
          }`}
          aria-label="Grid view"
        >
          <Grid size={18} />
        </button>
        <button
          onClick={() => handleViewChange("list")}
          className={`rounded p-2 transition-colors ${
            view === "list"
              ? "bg-blue-800 text-white"
              : "bg-white text-gray-500 hover:bg-gray-100"
          }`}
          aria-label="List view"
        >
          <List size={18} />
        </button>
      </div>

      {/* Spacer (pushes the sort dropdown to the right) */}
      <div className="flex-1" />

      {/* Sort Dropdown */}
      <div className="relative">
        <select
          value={sort}
          onChange={handleSortChange}
          className="cursor-pointer appearance-none border-l border-gray-300 bg-transparent py-1 pr-8 pl-3 text-sm font-medium text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <svg
            className="h-4 w-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ViewToggleAndSort;
