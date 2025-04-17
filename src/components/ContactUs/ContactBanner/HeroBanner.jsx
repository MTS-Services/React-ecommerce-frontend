import React from "react";

const HeroBanner = () => {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage: "url('/assits/404bg/404.png')",
        backgroundColor: "var(--color-background)",
      }}
    >
      <div className="w-full max-w-2xl rounded-3xl bg-[rgba(0,0,0,0.6)] p-8 text-center shadow-2xl sm:p-10 md:p-12 lg:p-16 xl:p-20">
        <div className="mb-6">
          <div className="font-primary text-[88px] leading-none font-extrabold text-red-500">
            404
          </div>
          <h2 className="font-primary mt-4 text-2xl font-bold text-[#FFF] sm:text-3xl">
            Page Not Found
          </h2>
        </div>
        <p className="font-secondary mb-6 text-base text-[#FFF] sm:text-lg">
          The page you're looking for doesn't exist or may have been moved.
          Please check the URL or go back to the home page.
        </p>

        <Link
          to="/"
          className="bg-cta text-cta-text hover:bg-cta-active hover:text-cta-txt-active inline-block transform rounded-full px-8 py-3 text-base font-semibold shadow-md transition duration-300 ease-in-out hover:scale-105 sm:text-lg"
        >
          ⬅️ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
