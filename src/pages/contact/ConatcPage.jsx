import React from "react";
import ContactForm from "../../components/ContactUs/ContactFrom/ContactFrom";
import ContactCart from "../../components/ContactUs/ContactCart/ContactCart";

const ConatcPage = () => {
  return (
    <div className="overflow-hidden">
      <ContactCart />
      <ContactForm />
    </div>
  );
};

export default ConatcPage;
