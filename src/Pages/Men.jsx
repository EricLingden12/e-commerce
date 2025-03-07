import React from "react";
import { NavLink } from "react-router-dom";
import { product } from "../Components/product";
import { FaShoppingCart } from "react-icons/fa";

const Men = () => {
  // Filter products for the "Men" category
  const menProducts = product.filter((item) => item.gender === "Men");

  return (
    <div className="mt-[100px] md:container w-[95%] mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {menProducts.map((item) => (
        <NavLink
          to={`/product/${item.productid}`}
          key={item.productid}
          className="min-w-[60%] sm:min-w-[50%] lg:min-w-[25%] p-5 text-start box-shadow"
        >
          <img
            className="w-[100%] h-[300px] mb-2 rounded-md"
            draggable="false"
            src={item.image[0]?.url}
            alt={item.image[0]?.altText}
          />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold">{item.name}</p>
              <p className="text-md font-medium">Brand: {item.brand}</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">${item.price}</p>
              <button className="bg-white px-3 py-1 rounded-xl text-sm font-bold cursor-pointer">
                <FaShoppingCart className="text-black w-6 h-6" />
              </button>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Men;
