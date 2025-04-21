import React from "react";
import {
  FaAppleAlt,
  FaCookieBite,
  FaFish,
  FaLeaf,
  FaCarrot,
  FaSeedling,
  FaCandyCane,
  FaGenderless,
  FaGem,
} from "react-icons/fa";

// Constants
const CATEGORIES = [
  { name: "Dried Fruit", icon: <FaAppleAlt /> },
  { name: "Cookies", icon: <FaCookieBite /> },
  { name: "Foods", icon: <FaFish /> },
  { name: "Fresh Fruit", icon: <FaLeaf /> },
  { name: "Tuber Root", icon: <FaCarrot /> },
  { name: "Vegetables", icon: <FaSeedling /> },
  { name: "Snacks", icon: <FaCandyCane /> },
  { name: "Unisex", icon: <FaGenderless /> },
  { name: "Jewellery", icon: <FaGem /> },
];

const WEIGHTS = ["2kg", "10kg", "1kg", "2pack", "500g", "2pcs", "100g", "3pcs"];

const COLORS = [
  "#d4d4d4",
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#10b981",
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#facc15",
  "#99f6e4",
];

const TAGS = [
  "Fruits",
  "Cookies",
  "Foods",
  "Tuber",
  "Vegetables",
  "Snacks",
  "Clothes",
  "Jewellery",
];

const FilterSection = ({ title, children, defaultOpen = false }) => (
  <div className="mb-6">
    <details open={defaultOpen}>
      <summary className="cursor-pointer border-b-2 border-[#EEEEEE] pb-6 text-lg font-semibold text-[#615966]">
        {title}
      </summary>
      <div className="mt-4 pl-0">{children}</div>
    </details>
  </div>
);

const FilterSidebar = () => {
  return (
    <div className="rounded-[6px] border border-[#EEEEEE] bg-[#F8F8FB] p-4 text-sm">
      {/* Category Filter */}
      <FilterSection title="Category" defaultOpen>
        <div className="space-y-2">
          {CATEGORIES.map((category, index) => (
            <label
              key={index}
              className="flex cursor-pointer items-center gap-4 rounded-lg border border-gray-200 p-2 hover:bg-gray-100"
            >
              <input
                type="checkbox"
                className="h-3.5 w-3.5 cursor-pointer bg-white text-[#19B2E7] focus:rounded-full focus:ring-2 focus:ring-[#19B2E7] focus:ring-offset-2"
              />
              <span className="flex cursor-pointer items-center gap-2 text-base font-semibold text-gray-600 transition-colors hover:text-[#19B2E7]">
                {category.icon}
                {category.name}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Price Filter */}
      <FilterSection title="Price Range" defaultOpen>
        <div className="space-y-4">
          <div className="flex justify-between text-xs text-gray-500">
            <span>From</span>
            <span>To</span>
          </div>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="$0"
              className="w-full rounded-md border px-2 py-1 text-sm"
            />
            <input
              type="number"
              placeholder="$250"
              className="w-full rounded-md border px-2 py-1 text-sm"
            />
          </div>
          <input
            type="range"
            min={0}
            max={250}
            className="w-full bg-[#155DFC]"
          />
        </div>
      </FilterSection>

      {/* Weight Filter */}
      <FilterSection title="Weight">
        <div className="space-y-2 text-base font-bold text-[#545454]">
          {WEIGHTS.map((weight, index) => (
            <label
              key={index}
              className="flex cursor-pointer items-center gap-4 rounded-lg border border-gray-200 p-2 hover:bg-gray-100"
            >
              <input
                type="checkbox"
                className="h-3.5 w-3.5 cursor-pointer bg-white text-[#19B2E7] focus:rounded-full focus:ring-2 focus:ring-[#19B2E7] focus:ring-offset-2"
              />
              <span className="flex cursor-pointer items-center gap-2 text-base font-semibold text-gray-600 transition-colors hover:text-[#19B2E7]">
                {weight}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Color Filter */}
      <FilterSection title="Color">
        <div className="flex flex-wrap gap-2">
          {COLORS.map((color, index) => (
            <div
              key={index}
              className="h-5 w-5 cursor-pointer rounded-full border"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </FilterSection>

      {/* Tags Filter */}
      <FilterSection title="Tags" defaultOpen>
        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag, index) => (
            <span
              key={index}
              className="cursor-pointer rounded-full bg-blue-400 px-2 py-1 text-xs font-medium text-[#fdfdfd]"
            >
              {tag}
            </span>
          ))}
        </div>
      </FilterSection>
    </div>
  );
};

export default FilterSidebar;
