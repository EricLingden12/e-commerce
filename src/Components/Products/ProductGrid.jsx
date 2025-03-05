import React from "react";
import { NavLink } from "react-router-dom";
import { product } from "../product";
import { FaShoppingCart } from "react-icons/fa";
const ProductGrid = ({ filters = {} }) => {
  const {
    gender = [],
    category = [],
    color = "",
    size = [],
    brand = [],
    material = [],
    minPrice = 5,
    maxPrice = 100,
  } = filters;

  const filteredProducts = product.filter((item) => {
    const matchesGender =
      gender.length === 0 || (item.gender && gender.includes(item.gender));
    const matchesCategory =
      category.length === 0 || category.includes(item.category);
    const matchesColor = !color || item.color.includes(color);
    const matchesSize =
      size.length === 0 || size.some((s) => item.size.includes(s));
    const matchesBrand = brand.length === 0 || brand.includes(item.brand);
    const matchesMaterial =
      material.length === 0 || material.includes(item.material);
    const matchesPrice = item.price >= minPrice && item.price <= maxPrice;

    return (
      matchesGender &&
      matchesCategory &&
      matchesColor &&
      matchesSize &&
      matchesBrand &&
      matchesMaterial &&
      matchesPrice
    );
  });

  console.log("Filtered Products:", filteredProducts); // Debugging statement

  return (
    <div className="md:container w-[95%] mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item, index) => (
          <NavLink
            to={`/product/${item.productid}`}
            key={item.productid}
            className="min-w-[60%] sm:min-w-[50%] lg:min-w-[25%] p-5 text-start"
          >
            <img
              className="w-[100%] mb-2 rounded-md"
              draggable="false"
              src={item.image[0]?.url || "default-image-url"}
              alt={item.image[0]?.altText || "Default Alt Text"}
            />
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-md font-medium">Brand: {item.brand}</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold mb-2">${item.price}</p>
                <button className=" mx-5 cursor-pointer">
                  <FaShoppingCart className="text-black w-6 h-6" />
                </button>
              </div>
            </div>
          </NavLink>
        ))
      ) : (
        <div className="col-span-full text-center text-xl font-semibold">
          No products found matching the selected filters.
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
