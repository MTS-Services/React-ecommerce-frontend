import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer border border-[#EBEBEB] bg-[#FFFFFF]">
      <div className="footer border-t-2 border-[#EBEBEB] bg-[#FFFFFF]">
        <div className="mx-auto flex w-full max-w-[1527px] flex-wrap justify-between px-4 pt-8 md:pt-12 lg:pt-14 lg:pb-8">
          {/* Column 1 */}
          <div className="mb-6 w-full md:w-1/2 lg:w-1/5 lg:pr-20 xl:w-1/5">
            <img src="/img/logo/B2B.png" alt="Logo" className="mb-4 h-16" />
            <p className="text-sm text-gray-600">
              Grabit is the biggest market of grocery products. Get your daily
              needs from our store.
            </p>
            <div className="mt-4 flex">
              <img
                src="/img/footer/google.png"
                alt="Google Play"
                className="mr-2 h-10"
              />
              <img
                src="/img/footer/apple.png"
                alt="App Store"
                className="h-10"
              />
            </div>
          </div>

          {/* Category Column */}
          <div className="mb-6 w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/5">
            <h4 className="mb-4 border-b border-gray-300 pb-2 text-lg font-semibold">
              Category
            </h4>
            {[
              "Dried Fruit",
              "Cookies",
              "Foods",
              "Fresh Fruit",
              "Tuber Root",
              "Vegetables",
            ].map((item) => (
              <p
                key={item}
                className="cursor-pointer py-1 text-sm text-gray-600 hover:text-gray-900"
              >
                {item}
              </p>
            ))}
          </div>

          {/* Company Column */}
          <div className="mb-6 w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/5">
            <h4 className="mb-4 border-b border-gray-300 pb-2 text-lg font-semibold">
              Company
            </h4>
            {[
              "About us",
              "Delivery",
              "Legal Notice",
              "Terms & conditions",
              "Secure payment",
              "Contact us",
            ].map((item) => (
              <p
                key={item}
                className="cursor-pointer py-1 text-sm text-gray-600 hover:text-gray-900"
              >
                {item}
              </p>
            ))}
          </div>

          {/* Account Column */}
          <div className="mb-6 w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/5">
            <h4 className="mb-4 border-b border-gray-300 pb-2 text-lg font-semibold">
              Account
            </h4>
            {[
              "Sign In",
              "View Cart",
              "Return Policy",
              "Become a Vendor",
              "Affiliate Program",
              "Payments",
            ].map((item) => (
              <p
                key={item}
                className="cursor-pointer py-1 text-sm text-gray-600 hover:text-gray-900"
              >
                {item}
              </p>
            ))}
          </div>

          {/* Contact Column */}
          <div className="w-full md:w-1/2 lg:w-1/5 xl:w-1/5">
            <h4 className="mb-4 border-b border-gray-300 pb-2 text-lg font-semibold">
              Contact
            </h4>
            <div className="mb-2 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gray-700" />
              <p className="text-sm text-gray-600">
                2548 Broaddus Maple Court, Madisonville KY 4783, USA
              </p>
            </div>
            <div className="mb-2 flex items-center">
              <FaWhatsapp className="mr-2 text-gray-700" />
              <p className="text-sm text-gray-600">+00 9876543210</p>
            </div>
            <div className="mb-2 flex items-center">
              <FaEnvelope className="mr-2 text-gray-700" />
              <p className="text-sm text-gray-600">example@email.com</p>
            </div>
            <div className="mt-4 flex space-x-4 text-2xl">
              <FaFacebook className="cursor-pointer text-gray-700 hover:text-gray-900" />
              <FaTwitter className="cursor-pointer text-gray-700 hover:text-gray-900" />
              <FaLinkedin className="cursor-pointer text-gray-700 hover:text-gray-900" />
              <FaInstagram className="cursor-pointer text-gray-700 hover:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
      {/* Subfooter */}
      <div className="mt-8 flex justify-center bg-gray-200 py-4">
        <div className="flex w-full max-w-[1527px] flex-wrap items-center justify-between px-4">
          <p className="w-full py-2 text-center text-sm text-gray-700 sm:w-auto">
            Copyright © Grabit all rights reserved. Powered by Grabit.
          </p>
          <div className="flex w-full justify-center space-x-2 sm:w-auto sm:justify-center lg:justify-between">
            <img src="/img/footer/paypal.png" alt="Paypal" className="h-8" />
            <img src="/img/footer/skrill.png" alt="Skrill" className="h-8" />
            <img src="/img/footer/vissa.png" alt="Visa" className="h-8" />
            <img src="/img/footer/visa.png" alt="Visa" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
