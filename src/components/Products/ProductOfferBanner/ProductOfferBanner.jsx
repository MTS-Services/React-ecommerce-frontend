import React from "react";
import "./ProductOfferBanner.css"; // Import the styles

const ProductOfferBanner = () => {
  return (
    <div className="mt-56 flex items-center justify-center gap-6 px-4 lg:mt-40 lg:py-12">
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-1 lg:w-[1527px] lg:grid-cols-2">
        {[1, 2].map((index) => (
          <div
            key={index}
            className="group relative h-[390px] cursor-pointer overflow-hidden rounded-[6px] bg-black"
          >
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://grabit-react-next.maraviyainfotech.com/assets/img/banner/${index + 1}.jpg')`,
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-[#EDEDEF] opacity-30"></div>

              {/* Shimmer Effect (Only when hovered) */}
              <div className="shimmer-overlay group-hover:shimmer-effect absolute inset-0 bg-[#EDEDEF] opacity-30"></div>
            </div>

            {/* Content inside the banner */}
            <div className="absolute inset-0 flex items-center justify-end p-6">
              <div className="max-w-md pl-35 text-right md:pl-35 lg:pl-48">
                <h2 className="text-3xl font-extrabold text-[#333333]">
                  Card Title
                </h2>
                <p className="pt-2 text-[18px] font-bold text-gray-600">
                  A card component has a figure, a body part, and inside the
                  body there are title and actions parts.
                </p>
                <div className="mt-4">
                  <button className="cursor-pointer rounded-sm bg-blue-800 px-4 py-2 font-semibold text-white transition-all hover:bg-blue-600">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductOfferBanner;
