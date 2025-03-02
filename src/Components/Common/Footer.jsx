import React from "react";
import { NavLink } from "react-router-dom";

import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

const footData = [
  {
    id: 1,
    title: "Company",
    link1: "About Us",
    link2: "Product",
    link3: "Contact",
    link4: "Features",
  },

  {
    id: 2,
    title: "Policies & Legal",
    link1: " Privacy Policy",
    link2: "Terms & Conditions",
    link3: "Return & Refund Policy",
    link4: "Shipping & Delivery Info",
  },
  {
    id: 3,
    title: "Social Links",
    link1: <FaInstagram className="w-7 h-7" />,
    link2: <FaFacebookF className="w-6 h-6" />,
    link3: <FaYoutube className="w-7 h-7" />,
    link4: <FaTiktok className="w-7 h-7" />,
  },
];

const Footer = () => {
  return (
    <>
      <hr />
      <div className="grid grid-cols-3 py-11">
        {footData.map((item, index) => {
          return (
            <ul key={index} className="grid gap-2 mx-auto">
              <li className="text-md font-bold">{item.title}</li>
              <li className="text-sm text-gray-600 font-semibold">
                {item.link1}
              </li>
              <li className="text-sm text-gray-600 font-semibold">
                {item.link2}
              </li>
              <li className="text-sm text-gray-600 font-semibold">
                {item.link3}
              </li>
              <li className="text-sm text-gray-600 font-semibold">
                {item.link4}
              </li>
            </ul>
          );
        })}
      </div>
      <div className="text-center mb-[50px]">
        <p className="text-sm text-gray-500 font-light">
          © 2024 Designership. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
