import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Smooth fade effect
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "./herosection.css"; // Custom CSS for additional styles

const products = [
  {
    id: 1,
    image: "/img/products/hero_3.jpg",
    title: "Explore fresh & juicy fruits",
    price: "$199",
    discountPrice: "$149",
  },
  {
    id: 2,
    image: "/img/products/hero_2.jpg",
    title: "Organic & healthy vegetables",
    price: "$249",
    discountPrice: "$199",
  },
];

const HeroSection = () => {
  return (
    <div className="mt-[180px] flex items-center justify-center">
      <div className="w-full max-w-[1500px] px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]} // Added EffectFade
          effect="fade" // Enables fade transition
          spaceBetween={20}
          slidesPerView={1}
          // navigation

          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}" style="font-size: 30px; width: 10px; height: 10px;"></span>`;
            },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1200} // Smooth transition speed
          loop={true} // Infinite loop
          className="rounded-lg shadow-lg"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative flex h-auto min-h-[300px] items-center justify-center overflow-hidden rounded-lg bg-white shadow-md">
                <div
                  className="h-[500px] w-full bg-cover bg-center transition-all duration-1000 ease-in-out"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>

                <div className="animate-fadeUp absolute top-1/2 left-12 w-[90%] -translate-y-1/2 transform px-16 md:w-1/2 lg:left-34">
                  <p className="text-2xl font-bold text-blue-800">
                    Starting at {product.discountPrice}
                  </p>

                  <h2 className="text-[30px] font-bold text-[#4b5966] md:text-[50px]">
                    {product.title}
                  </h2>

                  <div className="mt-4">
                    <button className="cursor-pointer rounded-sm bg-blue-800 px-4 py-2 font-semibold text-white transition-all hover:bg-blue-600">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
