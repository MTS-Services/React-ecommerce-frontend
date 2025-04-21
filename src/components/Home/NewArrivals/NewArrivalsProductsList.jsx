import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // এই লাইনটা বাদ দাও Tailwind use করলে

import AllProducts from "./AllProducts/AllProducts";
import SnackSpices from "./SnackSpices/SnackSpices";
import Fruits from "./Fruits/Fruits";
import Vegetables from "./Vegetables/Vegetables";

function NewArrivalsProductsList() {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto mb-4 w-full max-w-[1497px] px-2 py-6 sm:px-6 md:px-10 md:py-8 lg:px-[2px] lg:py-12">
        <Tabs>
          {/* Heading + Tab Buttons Section */}
          <div className="flex flex-col items-center justify-between gap-6 pb-6 md:flex-row md:gap-4 lg:pb-10">
            {/* Left Heading Text */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                New Arrivals
              </h3>
              <p className="mt-2 text-sm text-gray-500 sm:text-base">
                Shop online for new arrivals and get free shipping!
              </p>
            </div>

            {/* Right Tab Buttons */}
            <div className="scrollbar-hide flex w-full items-center justify-center overflow-x-auto md:w-auto md:justify-end">
              <TabList className="flex gap-2 sm:gap-3 md:gap-4">
                {["All", "SnackSpices", "Fruits", "Vegetables"].map(
                  (item, idx) => (
                    <Tab
                      key={idx}
                      className="cursor-pointer rounded-md px-3 py-2 text-sm font-semibold whitespace-nowrap uppercase transition duration-200 hover:bg-gray-100 hover:text-[#155DFC] focus:outline-none sm:px-4 sm:text-base"
                      selectedClassName="text-[#155DFC] bg-gray-200"
                    >
                      {item}
                    </Tab>
                  ),
                )}
              </TabList>
            </div>
          </div>

          {/* Tab Panels */}
          <TabPanel>
            <div>
              <AllProducts />
            </div>
          </TabPanel>

          <TabPanel>
            <div>
              <SnackSpices />
            </div>
          </TabPanel>

          <TabPanel>
            <div>
              <Fruits />
            </div>
          </TabPanel>

          <TabPanel>
            <div>
              <Vegetables />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default NewArrivalsProductsList;
