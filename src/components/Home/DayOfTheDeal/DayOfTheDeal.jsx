import React, { useEffect, useState } from "react";
import ProductCard from "../../Products/ProductCard";

// ✅ TimerBlock Component - value-r className add kora hoise
const TimerBlock = ({ value, label, className = "" }) => (
  <div className="min-w-[70px] rounded-xl bg-white px-4 py-2 text-center shadow-md">
    <div className={`text-2xl font-bold ${className}`}>
      {String(value).padStart(2, "0")}
    </div>
    <div className="text-xs text-gray-500">{label}</div>
  </div>
);

const DayOfTheDeal = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 25);
    targetDate.setHours(0, 0, 0, 0);
    const bdTime = new Date(targetDate.getTime() + 6 * 60 * 60 * 1000);

    const updateTimer = () => {
      const now = new Date();
      const bdNow = new Date(now.getTime() + 6 * 60 * 60 * 1000);
      const diff = bdTime - bdNow;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
      requestAnimationFrame(updateTimer);
    };

    updateTimer();
  }, []);

  const products = [
    {
      id: 1,
      name: "Men's Stylish Printed Shirt",
      description: "Men's Wear",
      price: 59.0,
      oldPrice: 79.0,
      image: "/img/products/1_1.jpg",
      hoverImage: "/img/products/1_2.jpg",
    },
    {
      id: 2,
      name: "Casual Denim Jacket",
      description: "Men's Wear",
      price: 89.0,
      image: "/img/products/2_1.jpg",
      hoverImage: "/img/products/2_2.jpg",
    },
    {
      id: 3,
      name: "Classic Leather Boots",
      description: "Footwear",
      price: 120.0,
      oldPrice: 150.0,
      image: "/img/products/4_1.jpg",
      hoverImage: "/img/products/4_2.jpg",
    },
    {
      id: 4,
      name: "Casual Sneakers",
      description: "Footwear",
      price: 95.0,
      image: "/img/products/6_1.jpg",
      hoverImage: "/img/products/6_2.jpg",
    },
    {
      id: 5,
      name: "Casual Sneakers",
      description: "Footwear",
      price: 95.0,
      image: "/img/products/6_1.jpg",
      hoverImage: "/img/products/6_2.jpg",
    },
  ];

  return (
    <div className="pb-6 md:px-10 lg:pb-10">
      {/* Header + Timer */}
      <div className="mx-auto mb-12 flex max-w-[1497px] flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h3 className="text-3xl font-extrabold text-gray-900">
            Day Of The Deal
          </h3>
          <p className="mt-2 text-gray-500">
            Don't wait. The time will never be just right.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 rounded-lg py-6">
          <TimerBlock
            className="text-black"
            value={timeLeft.days}
            label="Days"
          />
          <TimerBlock
            className="text-black"
            value={timeLeft.hours}
            label="Hours"
          />
          <TimerBlock
            className="text-black"
            value={timeLeft.minutes}
            label="Minutes"
          />
          <TimerBlock
            className="text-black"
            value={timeLeft.seconds}
            label="Seconds"
          />
        </div>
      </div>

      <div className="m-auto mx-auto mt-6 max-w-[1577px] px-4 md:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayOfTheDeal;
