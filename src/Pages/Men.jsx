import React from "react";
import { NavLink } from "react-router-dom";
import { product } from "../Components/product";
import { FaShoppingCart } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";

const Men = () => {
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
          <div className="flex items-center  h-[60px]">
            <div className="grow  h-[60px]">
              <p className="text-lg font-medium">{item.name}</p>
              <p className="text-sm font-medium">Brand: {item.brand}</p>
            </div>
            <div className="grid text-center  h-[60px]">
              <p className="flex items-center text-lg font-bold mb-2">
                <MdCurrencyRupee />
                {item.price}
              </p>
              <p className="cursor-pointer mx-auto">
                <FaShoppingCart className="text-black w-5 h-5" />
              </p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Men;
