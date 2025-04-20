import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

export const SearchComponent = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="relative flex items-center">
      {/* Search Icon Button - always visible */}
      <button
        onClick={() => {
          setSearchOpen(!searchOpen);
          // Optionally focus the input when opening
          if (!searchOpen)
            setTimeout(
              () => document.getElementById("search-input")?.focus(),
              10,
            );
        }}
        className="p-2 text-gray-600 transition-colors hover:text-[#19B2E7]"
      >
        <BsSearch size={25} />
      </button>

      {/* Search input with animation - only shown when searchOpen is true */}
      {searchOpen && (
        <input
          id="search-input"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search products..."
          className={`absolute right-0 rounded-md border border-gray-300 shadow-sm transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-[#19B2E7] focus:outline-none ${
            searchOpen ? "w-64 p-2 opacity-100" : "w-0 p-0 opacity-0"
          }`}
          autoFocus
          onBlur={() => {
            if (!searchValue) setSearchOpen(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setSearchOpen(false);
              setSearchValue("");
            }
          }}
        />
      )}
    </div>
  );
};

export default SearchComponent;
