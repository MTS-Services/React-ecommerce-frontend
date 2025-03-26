import React from "react";
import ContactForm from "../../components/ContactUs/ContactFrom/ContactFrom";
import ContactCart from "../../components/ContactUs/ContactCart/ContactCart";
import HeroBanner from "../../components/ContactUs/ContactBanner/HeroBanner";

const ConatcPage = () => {
  return (
    <div className="overflow-hidden">
      <HeroBanner></HeroBanner>
      <ContactCart />
      <ContactForm />
    </div>
  );
};

export default ConatcPage;
