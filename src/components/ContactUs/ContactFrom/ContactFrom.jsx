import React from "react";

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden py-12 md:py-16">
      <div className="grid w-full grid-cols-1 items-center gap-8 px-4 md:w-full md:grid-cols-2 lg:w-[1527px]">
        {/* Google Map Section */}
        <div className="order-2 md:order-1 lg:order-2">
          <div className="h-[400px] w-full md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243693.39652780895!2d-73.98707244730792!3d40.73061005105826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ae8e0e4b93%3A0xd4fcb68a1ea024f4!2sNew%20York%2C%20NY%201001!5e0!3m2!1sen!2sus!4v1624540534179!5m2!1sen!2sus"
              className="h-full w-full rounded-lg"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-6 md:order-2 lg:order-2 lg:pl-6">
          <form className="mx-auto rounded-lg bg-white p-8 shadow-md">
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 p-3"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-md border border-gray-300 p-3"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                className="w-full rounded-md border border-gray-300 p-3"
                placeholder="Your Phone"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                className="w-full rounded-md border border-gray-300 p-3"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="cursor-pointer rounded-sm bg-blue-800 px-4 py-2 font-semibold text-white transition-all hover:bg-blue-600"
            >
              Contact Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
