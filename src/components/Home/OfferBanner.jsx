import React from "react";
import "./offerBanner.css"; // Import the styles

const OfferBanner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mx-4 grid w-[1576px] gap-6 px-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        {[1, 2].map((index) => (
          <div
            key={index}
            className="group relative h-[390px] overflow-hidden rounded-[6px] bg-white"
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
              <div className="max-w-md pl-48 text-right">
                <h2 className="text-3xl font-extrabold text-[#333333]">
                  Card Title
                </h2>
                <p className="mt-2 text-lg text-gray-800">
                  A card component has a figure, a body part, and inside the
                  body there are title and actions parts.
                </p>
                <div className="mt-4">
                  <button className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-all duration-300 hover:bg-blue-700">
                    Buy Now
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

export default OfferBanner;
