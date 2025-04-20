import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const LogInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="mt-44 flex items-center justify-center bg-white px-4 py-16 sm:px-6 lg:mt-40 lg:px-8 lg:py-24">
      <div className="flex w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-lg md:flex-row">
        {/* Image Section */}
        <div className="hidden items-center justify-center bg-[#155DFC] md:flex md:w-1/2">
          <img
            src="/img/loginpageimg/loginimg.png"
            alt="Login Illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Login Form Section */}
        <div className="w-full p-6 sm:p-10 md:w-1/2 lg:p-14">
          <h2 className="mb-4 text-center text-3xl font-bold">Welcome Back</h2>
          <p className="mb-6 text-center text-base text-gray-600">
            Get access to your Orders, Wishlist and Recommendations.
          </p>

          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="mb-2 block text-base font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-base focus:ring-2 focus:ring-[#155DFC] focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-base font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 text-base focus:ring-2 focus:ring-[#155DFC] focus:outline-none"
                  placeholder="********"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-[#155DFC]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
              </div>
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm sm:text-base">
                <input type="checkbox" className="text-[#155DFC]" />
                Remember me
              </label>
              <a
                href="#"
                className="text-sm text-[#155DFC] hover:underline sm:text-base"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full rounded-md bg-[#155DFC] py-2 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-600"
            >
              Login Now
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-base text-gray-600">
            Don’t have an account?{" "}
            <a href="#" className="font-medium text-[#155DFC] hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogInPage;
