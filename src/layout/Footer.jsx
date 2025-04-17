import React from "react";
import "./footer.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaLocationDot,
  FaSquareTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer border border-amber-200 bg-amber-50">
        <div className="footer_container">
          <div className="footer_col_1">
            <img src="/img/logo/B2B.png" alt="this is our logo " />
            <p>
              Grabit is the biggest market of grocery products. Get your daily
              needs from our store.
            </p>
            <div className="hoto_for_footer">
              <img className="google" src="/img/footer/google.png" alt="" />
              <img className="apple" src="/img/footer/apple.png" alt="" />
            </div>
          </div>

          <div className="footer_col_2">
            <h4>Category</h4>
            <a href="">
              <p>Dried Fruit</p>
            </a>
            <a href="">
              <p>Cookies</p>
            </a>
            <a href="">
              <p>Foods</p>
            </a>
            <a href="">
              <p>Fresh Fruit</p>
            </a>
            <a href="">
              <p>Tuber Root</p>
            </a>
            <a href="">
              <p>Vegetables</p>
            </a>
          </div>

          <div className="footer_col_3">
            <h4>Company</h4>
            <a href="#">
              <p>About us</p>
            </a>
            <a href="#">
              <p>Delivery</p>
            </a>
            <a href="#">
              <p>Legal Notice</p>
            </a>
            <a href="#">
              <p>Terms & conditions</p>
            </a>
            <a href="#">
              <p>Secure payment</p>
            </a>
            <a href="#">
              <p>Contact us</p>
            </a>
          </div>

          <div className="footer_col_4">
            <h4>Account</h4>
            <a href="">
              <p>Sign In</p>
            </a>
            <a href="">
              <p>View Cart</p>
            </a>
            <a href="">
              <p>Return Policy</p>
            </a>
            <a href="">
              <p>Become a Vendor</p>
            </a>
            <a href="">
              <p>Affiliate Program</p>
            </a>
            <a href="">
              <p>Payments</p>
            </a>
          </div>

          <div className="footer_col_5">
            <h4>Contact</h4>
            <div className="footer_contact">
              <div className="footer_address">
                <a className="footer_icon">
                  <FaLocationDot />
                </a>
                <p> 2548 Broaddus Maple Court, Madisonville KY 4783, USA.</p>
              </div>

              <div className="footer_address">
                <a href="" className="footer_icon">
                  <FaWhatsapp />
                </a>
                <p> +00 9876543210</p>
              </div>

              <div className="footer_address">
                <a className="footer_icon">
                  {" "}
                  <FaEnvelope />
                </a>
                <p> example@email.com</p>
              </div>
            </div>

            <div className="footer_social_icon">
              <a href="">
                <FaFacebookSquare />
              </a>
              <a href="">
                <FaSquareTwitter />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
              <a href="">
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>

        <div className="subfooter">
          <div className="subfooter_container">
            <div className="subfooter_tex">
              <p>Copyright © Grabit all rights reserved. Powered by Grabit.</p>
            </div>
            <div className="subfooter_payment">
              <img src="/img/footer/paypal.png" alt="this is a demo " />
              <img
                className="skrill"
                src="/img/footer/skrill.png"
                alt="this is a demo "
              />
              <img src="/img/footer/vissa.png" alt="this is a demo " />
              <img src="/img/footer/visa.png" alt="this is a demo " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
