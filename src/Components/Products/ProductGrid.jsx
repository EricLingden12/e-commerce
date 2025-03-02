import React from "react";
import { NavLink } from "react-router-dom";
import { product } from "../product";

const ProductGrid = () => {
  return (
    <div className="md:container w-[95%] mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {product.map((item, index) => {
        return (
          <NavLink
            to={`/product/${item.productid}`} // Include the product ID in the URL
            key={item.productid}
            className="min-w-[60%] sm:min-w-[50%] lg:min-w-[25%] p-5 text-start"
          >
            <img
              className="w-[100%] mb-2 rounded-md"
              draggable="false"
              src={item.image[0]?.url}
              alt={item.image[0]?.altText}
            />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-md font-medium">Brand: {item.brand}</p>
              </div>
              <div className="text-center ">
                <p className="text-lg font-bold mb-2">${item.price}</p>
                <button className="bg-white px-3 py-1 rounded-xl text-sm font-bold cursor-pointer">
                  Buy Now
                </button>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default ProductGrid;
