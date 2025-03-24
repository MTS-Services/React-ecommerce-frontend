import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./herosection.css"; // Custom CSS for additional styles

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
    title: "Exclusive Product 3",
    price: "$299",
    discountPrice: "$249",
  },
];

const HeroSection = () => {
  return (
    <div className="mt-[180px] flex items-center justify-center">
      <div className="w-full max-w-[1500px] px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="rounded-lg shadow-lg"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative flex h-auto min-h-[300px] items-center justify-center overflow-hidden rounded-lg bg-white shadow-md">
                <div
                  className="h-[500px] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
                <div className="animate-fadeUp absolute top-1/2 left-5 w-[90%] -translate-y-1/2 transform md:w-1/2">
                  <h2 className="text-[30px] font-bold text-white md:text-[50px]">
                    {product.title}
                  </h2>
                  <p className="mt-2 text-lg text-white line-through">
                    {product.price}
                  </p>
                  <p className="text-2xl font-bold text-red-500">
                    {product.discountPrice}
                  </p>
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
