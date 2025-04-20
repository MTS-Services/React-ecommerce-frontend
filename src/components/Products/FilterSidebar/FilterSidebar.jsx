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
const categories = [
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
const FilterSidebar = () => {
  return (
    <div className="m-t space-y-6 rounded-[6px] border border-[#EEEEEE] bg-[#F8F8FB] p-4 text-sm">
      {/* Category Filter */}
      <div>
        <details open>
          <summary className="fotn-bold cursor-pointer border-b-2 border-[#EEEEEE] pb-6 text-2xl font-bold text-[#615966]">
            Category
          </summary>
          <div className="mt-2 space-y-2 pl-2">
            {categories.map((cat, i) => (
              <label key={i} className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 accent-[#155DFC]" />

                <span className="flex items-center gap-1 text-base font-bold text-[#545454]">
                  {cat.icon}
                  {cat.name}
                </span>
              </label>
            ))}
          </div>
        </details>
      </div>
      {/* Weight Filter */}
      <div>
        <details>
          <summary className="fotn-bold cursor-pointer border-b-2 border-[#EEEEEE] pb-6 text-2xl font-bold text-[#615966]">
            Weight
          </summary>
          <div className="mt-2 space-y-2 pl-2 text-base font-bold text-[#545454]">
            {[
              "2kg",
              "10kg",
              "1kg",
              "2pack",
              "500g",
              "2pcs",
              "100g",
              "3pcs",
            ].map((weight, i) => (
              <label key={i} className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 accent-[#155DFC]" />
                {weight}
              </label>
            ))}
          </div>
        </details>
      </div>
      {/* Color Filter */}
      <div>
        <details>
          <summary className="fotn-bold cursor-pointer border-b-2 border-[#EEEEEE] pb-6 text-2xl font-bold text-[#615966]">
            Color
          </summary>
          <div className="mt-3 flex flex-wrap gap-2 pl-2">
            {[
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
            ].map((color, i) => (
              <div
                key={i}
                className="h-5 w-5 cursor-pointer rounded-full border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </details>
      </div>
      {/* Price Filter */}
      <div>
        <details>
          <summary className="fotn-bold cursor-pointer border-b-2 border-[#EEEEEE] pb-6 text-2xl font-bold text-[#615966]">
            Price
          </summary>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-xs text-gray-500">
              <span>From</span>
              <span>To</span>
            </div>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="0"
                className="w-full rounded-md border px-2 py-1 text-sm"
              />
              <input
                type="number"
                placeholder="250"
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
        </details>
      </div>
      {/* Tags */}
      <div>
        <details open>
          <summary className="fotn-bold cursor-pointer border-b-2 border-[#EEEEEE] pb-6 text-2xl font-bold text-[#615966]">
            Tags
          </summary>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Fruits",
              "Cookies",
              "Foods",
              "Tuber",
              "Vegetables",
              "Snacks",
              "Clothes",
              "Jewellery",
            ].map((tag, i) => (
              <span
                key={i}
                className="rounded-full bg-emerald-100 px-2 py-1 text-xs text-[#155DFC]"
              >
                {tag}
              </span>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
};

export default FilterSidebar;
