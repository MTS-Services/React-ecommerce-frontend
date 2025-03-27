// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const products = [
//   {
//     id: 1,
//     name: "Healthy Nutmix, 200g pack",
//     category: "Driedfruit",
//     price: "$45.00",
//     img: "https://img.freepik.com/free-vector/green-vegetables-mix-white_98292-5108.jpg?semt=ais_hybrid",
//   },
//   {
//     id: 2,
//     name: "Organic Almonds, 250g pack",
//     category: "Nuts",
//     price: "$30.00",
//     img: "https://img.freepik.com/free-photo/almonds-white-surface_144627-22946.jpg",
//   },
//   {
//     id: 3,
//     name: "Fresh Walnuts, 300g pack",
//     category: "Nuts",
//     price: "$40.00",
//     img: "https://img.freepik.com/free-photo/walnuts-wooden-bowl_144627-18047.jpg",
//   },
// ];

// export default function ProductSlider() {
//   return (
//     <div>
//       <div className="flex items-center justify-between py-4">
//         <h2 className="text-2xl font-bold">
//           Trending <span className="text-green-400">Items</span>
//         </h2>
//         {/* Arrow Buttons */}
//         <div className="flex gap-2">
//           <button className="swiper-button-prev rounded-full bg-gray-200 p-2">
//             ◀
//           </button>
//           <button className="swiper-button-next rounded-full bg-gray-200 p-2">
//             ▶
//           </button>
//         </div>
//       </div>

//       <Swiper
//         modules={[Navigation, Autoplay]}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         autoplay={{ delay: 300 }}
//         spaceBetween={20}
//         slidesPerView={1}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         {products.map((product) => (
//           <SwiperSlide key={product.id}>
//             <div className="bg-base-100 flex rounded-[6px] border border-gray-300 p-4">
//               <img
//                 className="h-[80px] w-[80px] bg-cover"
//                 src={product.img}
//                 alt={product.name}
//               />
//               <div className="ml-3">
//                 <h2 className="text-[18px] font-bold text-[#545454]">
//                   {product.name}
//                 </h2>
//                 <p className="text-[14px] text-[#545454]">{product.category}</p>
//                 <div className="flex items-center gap-2">
//                   <p className="text-[20px] font-bold text-black">
//                     {product.price}
//                   </p>
//                   <p className="line-through">$50.00</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

//  {/* Swiper for products */}
//       <Swiper
//         className="my-4"
//         ref={swiperRef}
//         modules={[Navigation, Autoplay]}
//         navigation={{
//           prevEl: ".prev-button",
//           nextEl: ".next-button",
//         }}
//         spaceBetween={20}
//         slidesPerView={1} // Adjust to show 3 items at once
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 1 },
//           1024: { slidesPerView: 1 },
//         }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//       >
//         {products.map((product) => (
//           <SwiperSlide className="flex flex-col" key={product.id}>
//             <div className="bg-base-100 flex rounded-[6px] border border-gray-300 p-4">
//               <img
//                 className="h-[80px] w-[80px] bg-cover"
//                 src={product.img}
//                 alt={product.name}
//               />
//               <div className="ml-3">
//                 <h2 className="text-[18px] font-bold text-[#545454]">
//                   {product.name}
//                 </h2>
//                 <p className="text-[14px] text-[#545454]">{product.category}</p>
//                 <div className="flex items-center gap-2">
//                   <p className="text-[20px] font-bold text-black">
//                     {product.price}
//                   </p>
//                   <p className="line-through">$50.00</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

// grid={{ rows: 3, fill: "row" }} // ২টি রোতে দেখাবে
//         breakpoints={{
//           320: { slidesPerView: 1, grid: { rows: 3 } }, // মোবাইলে ১ কলাম × ২ রো
//           768: { slidesPerView: 1, grid: { rows: 3 } }, // ট্যাবলেটে ২ কলাম × ২ রো
//           1024: { slidesPerView: 1, grid: { rows: 3 } }, // ডেস্কটপে ৩ কলাম × ২ রো
//         }}
