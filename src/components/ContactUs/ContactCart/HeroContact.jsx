import React from "react";

const HeroContact = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full pt-32">
        {[1].map((index) => (
          <div
            key={index}
            className="group relative h-[390px] overflow-hidden bg-white"
          >
            {/* Background Image */}
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/img/products/hero_1.jpg')`,
              }}
            >
              {/* Always Visible Overlay */}
              <div className="absolute inset-0 bg-black opacity-30"></div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-blue-800 opacity-0 transition-opacity"></div>
            </div>

            {/* Content inside the banner */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="max-w-md pr-8 pl-16 text-center">
                <h2 className="text-xl font-bold text-white">Home / Contact</h2>

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

export default HeroContact;
