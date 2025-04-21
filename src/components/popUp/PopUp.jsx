import { useState } from "react";
import { FiX } from "react-icons/fi";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="bg-opacity-30 fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          {/* Modal content */}
          <div
            className="relative grid w-11/12 grid-cols-1 gap-4 rounded-lg bg-white p-6 shadow-lg md:w-3/4 md:grid-cols-2 lg:w-1/2 xl:w-1/3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              <FiX size={24} />
            </button>

            {/* Left Column - Image */}
            <div className="flex h-84 w-full items-center justify-center">
              <img
                src="/public/img/banner1.png"
                alt="Fruit"
                className="h-full w-full rounded-md object-cover"
              />
            </div>

            {/* Right Column - Newsletter Form */}
            <div className="flex flex-col items-start justify-center">
              <h2 className="mb-2 text-2xl font-semibold">Newsletter</h2>
              <p className="text-md mb-4 text-gray-600">
                Subscribe to Masterkart to stay updated.
              </p>
              {/* icon */}
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.facebook.com/MakTechSolution/"
                  target="_blank"
                  className="hover:text-[#19B2E7]"
                >
                  <SlSocialFacebook size={20} />
                </a>
                <a
                  href="https://x.com/MakTechSolution"
                  target="_blank"
                  className="hover:text-[#19B2E7]"
                >
                  <SlSocialTwitter size={20} />
                </a>
                <a
                  href="https://www.instagram.com/maktechsolution/"
                  target="_blank"
                  className="hover:text-[#19B2E7]"
                >
                  <SlSocialInstagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/maktechsolution"
                  target="_blank"
                  className="hover:text-[#19B2E7]"
                >
                  <SlSocialLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsletterPopup;
