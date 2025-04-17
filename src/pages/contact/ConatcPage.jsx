import React from "react";
import ContactForm from "../../components/ContactUs/ContactFrom/ContactFrom";
import ContactCart from "../../components/ContactUs/ContactCart/ContactCart";
import HeroContact from "../../components/ContactUs/ContactCart/HeroContact";

const ConatcPage = () => {
  return (
    <div>
      <HeroContact />
      <ContactCart />
      <ContactForm />
    </div>
  );
};

export default ConatcPage;
