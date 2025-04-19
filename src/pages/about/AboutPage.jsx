import React from "react";
import {
  FaShippingFast,
  FaHeadset,
  FaExchangeAlt,
  FaLock,
  FaChevronDown,
} from "react-icons/fa";

const AboutPage = () => {
  const services = [
    {
      icon: <FaShippingFast className="text-4xl text-[#19B2E7]" />,
      title: "Free Shipping",
      desc: "Free shipping on all US order or order above $200",
    },
    {
      icon: <FaHeadset className="text-4xl text-[#19B2E7]" />,
      title: "24x7 Support",
      desc: "Contact us 24 hours a day, 7 days a week",
    },
    {
      icon: <FaExchangeAlt className="text-4xl text-[#19B2E7]" />,
      title: "30 Days Return",
      desc: "Simply return it within 30 days for an exchange",
    },
    {
      icon: <FaLock className="text-4xl text-[#19B2E7]" />,
      title: "Payment Secure",
      desc: "Your payments are secure with industry encryption",
    },
  ];

  const faqs = [
    {
      question: "What is the multi vendor services?",
      answer: ["Multi vendor mane ek e-commerce platform e onek seller thake."],
    },
    {
      question: "How to buy many products at a time?",
      answer: ["Cart e onek product add koro."],
    },
    {
      question: "How to buy many products at a time?",
      answer: ["lorem ipsum dolor sit amet."],
    },
    {
      question: "How to buy many products at a time?",
      answer: ["lorem change sentence."],
    },
    {
      question: "How to buy many products at a time?",
      answer: ["lorem ipsum dolor sit amet. lorem ipsum dolor sit amet."],
    },
    {
      question: "How to buy many products at a time?",
      answer: [
        "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
      ],
    },
  ];

  return (
    <main className="mt-30 bg-white font-sans">
      {/* Who We Are Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Image Grid */}
          <div className="flex max-w-full flex-1 flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
            <div className="flex-1">
              <img
                src="/img/banner1.png"
                alt="Shop"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <img
                src="/img/banner2.png"
                alt="Farmer"
                className="h-full w-full rounded-lg object-cover"
              />
              <img
                src="/img/banner2.png"
                alt="Greenhouse"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-5">
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
              Who We <span className="text-[#19B2E7]">Are?</span>
            </h2>
            <p className="text-sm font-semibold text-gray-600 uppercase">
              We’re here to serve only the best products for you. Enriching your
              homes with the best essentials.
            </p>
            <div className="space-y-4 text-sm leading-relaxed text-gray-500">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s...
              </p>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum, and more recently with desktop
                publishing software like Aldus PageMaker.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="mx-auto max-w-7xl px-6 text-center sm:py-10 md:py-6 lg:py-20">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
          Our <span className="text-[#19B2E7]">Services</span>
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600 md:text-base">
          Customer service should not be a department. It should be the entire
          company.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 p-6 text-center transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h4 className="mb-2 text-lg font-semibold text-gray-800">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Frequently Asked <span className="text-[#19B2E7]">Questions</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Customer service management.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-md border border-gray-200 bg-gray-50 p-4"
            >
              <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-800">
                {faq.question}
                <FaChevronDown className="h-4 w-4 text-[#19B2E7] transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <div className="mt-2 space-y-2 text-sm text-gray-600">
                {faq.answer.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
