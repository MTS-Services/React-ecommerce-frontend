import React, { useState } from "react";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";

export const ShiftingDropDown = () => {
  return (
    <div className="flex h-10 w-full max-w-[500px] items-start p-8 text-neutral-200 md:justify-center">
      <ProductDropdown />
    </div>
  );
};

const ProductDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 rounded-md bg-[#19B2E7] px-4 py-2 text-sm text-white transition hover:bg-[#12284C]">
        Category{" "}
        <FiChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full mt-2 w-80 rounded-lg border border-neutral-600 bg-neutral-900 p-4 shadow-lg">
          <Products />
        </div>
      )}
    </div>
  );
};

const Products = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <h3 className="mb-2 text-sm font-medium text-white">Startup</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Bookkeeping
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Invoicing
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium text-white">Scaleup</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Live Coaching
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Reviews
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Tax/VAT
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium text-white">Enterprise</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            White glove
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            SOX Compliance
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Staffing
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            More
          </a>
        </div>
      </div>

      <button className="mt-4 ml-auto flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};
