import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const products = [
  {
    id: 1,
    image:
      "https://img.freepik.com/premium-photo/banner-group-vegetables-minimalistic-modern-harvest-tomatoes-zucchini-squash_1048944-3078666.jpg?semt=ais_hybrid",
    title: "Exclusive Product 1",
    price: "$199",
    discountPrice: "$149",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/premium-photo/man-farmer-holds-vegetables-his-hands-garden-selective-focus-food_73944-19149.jpg?semt=ais_hybrid",

    title: "Exclusive Product 2",
    price: "$249",
    discountPrice: "$199",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/premium-photo/child-is-harvesting-tomatoes-selective-focus-kid_73944-22286.jpg?semt=ais_hybrid",

    title: "Exclusive Product 1",

    price: "$299",
    discountPrice: "$249",
  },
];

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-full max-w-6xl px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="rounded-lg shadow-lg"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative flex items-center overflow-hidden rounded-lg bg-white shadow-md">
                <div
                  className="h-[500px] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
                <div className="bg-opacity-70 r l-0 absolute top-1/2 w-1/2 -translate-y-1/2 transform">
                  <h2 className="text-[50px] font-bold text-[#FFFF]">
                    {product.title}
                  </h2>
                  <p className="mt-2 text-lg text-[#FFFF] line-through">
                    {product.price}
                  </p>
                  <p className="font-bould text-2xl text-red-500">
                    {product.discountPrice}
                  </p>
                  <div className="mt-2">
                    <button className="w-[50%] rounded-md border-r-4 border-b-4 border-[#008DBD] bg-blue-600 py-2 font-semibold text-[#00000] transition hover:bg-blue-700">
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
