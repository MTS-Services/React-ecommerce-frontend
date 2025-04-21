import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // এই লাইনটা বাদ দাও Tailwind use করলে
import "./testing.css"; // যদি আলাদা কিছু করো, নাহলে এটা লাগবে না
import OfferBanner from "./Home/FreshFruits";

function TabsExample() {
  return (
    <Tabs>
      <TabList className="mb-4 flex gap-4">
        <Tab
          className="cursor-pointer rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300 focus:outline-none"
          selectedClassName="bg-blue-600 text-white"
        >
          Tab 1
        </Tab>
        <Tab
          className="cursor-pointer rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300 focus:outline-none"
          selectedClassName="bg-blue-600 text-white"
        >
          Tab 2
        </Tab>
      </TabList>

      <TabPanel>
        <div className="rounded-md bg-gray-100 p-4">
          <h2 className="text-lg font-semibold">Content for Tab 1</h2>
          <OfferBanner></OfferBanner>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="rounded-md bg-gray-100 p-4">
          <h2 className="text-lg font-semibold">Content for Tab 2</h2>
          <p>This is the content of the second tab.</p>
        </div>
      </TabPanel>
    </Tabs>
  );
}

export default TabsExample;
