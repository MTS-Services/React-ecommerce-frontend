import React, { useState } from "react";
import categoriesData from "../data.json"; // Adjust the path to where your JSON file is located
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  // State to manage visibility of dropdown menus
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  // Function to toggle dropdown visibility
  const toggleCategory = (index) => {
    if (openCategoryIndex === index) {
      setOpenCategoryIndex(null); // Close the dropdown if clicked again
    } else {
      setOpenCategoryIndex(index); // Open the corresponding dropdown
    }
  };

  return (
    <header className="bg-[f1e4e1] p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex h-20 items-center">
          <img className="h-20" src="/img/B2B.png" alt="loading" link="#" />
        </div>
        <nav>
          <ul className="flex space-x-4 text-center font-semibold text-black">
            <li>
              <a href="#" className="hover:text-[#19B2E7]">
                Home
              </a>
            </li>

            {/* Dynamically render categories from JSON data */}
            {categoriesData.map((category, index) => (
              <li className="relative" key={index}>
                <button
                  className="flex items-center hover:text-[#19B2E7]"
                  onClick={() => toggleCategory(index)}
                >
                  {category.name}
                  <span className="ml-1">
                    <FaAngleDown />
                  </span>
                </button>

                {/* Dropdown menu for subcategories */}
                {openCategoryIndex === index && (
                  <ul className="absolute top-full left-0 mt-2 w-48 bg-white p-2 shadow-md">
                    {category.subCategories.map((subCategory, subIndex) => (
                      <li key={subIndex}>
                        <a href="#" className="block hover:text-[#19B2E7]">
                          {subCategory}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li>
              <a href="#" className="hover:text-[#19B2E7]">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#19B2E7]">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#19B2E7]">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
