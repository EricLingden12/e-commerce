import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { product } from "../product";
import { FaShoppingCart } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";

const ProductGrid = () => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    gender: [],
    category: [],
    color: "",
    size: [],
    brand: [],
    material: [],
    minPrice: 5,
    maxPrice: 100,
  });

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      gender: params.gender ? params.gender.split(",") : [],
      category: params.category ? params.category.split(",") : [],
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      minPrice: Number(params.minPrice) || 5,
      maxPrice: Number(params.maxPrice) || 100,
    });
  }, [searchParams]);

  const filteredProducts = product.filter((item) => {
    const matchesGender =
      filters.gender.length === 0 ||
      (item.gender && filters.gender.includes(item.gender));
    const matchesCategory =
      filters.category.length === 0 || filters.category.includes(item.category);
    const matchesColor = !filters.color || item.color.includes(filters.color);
    const matchesSize =
      filters.size.length === 0 ||
      filters.size.some((s) => item.size.includes(s));
    const matchesBrand =
      filters.brand.length === 0 || filters.brand.includes(item.brand);
    const matchesMaterial =
      filters.material.length === 0 || filters.material.includes(item.material);
    const matchesPrice =
      item.price >= filters.minPrice && item.price <= filters.maxPrice;

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
            className="min-w-[60%] sm:min-w-[50%] lg:min-w-[25%] p-5 text-start box-shadow"
          >
            <img
              className="w-[100%] h-[300px] mb-2 rounded-md"
              draggable="false"
              src={item.image[0]?.url || "default-image-url"}
              alt={item.image[0]?.altText || "Default Alt Text"}
            />
            <div className="flex items-start justify-between h-[60px]">
              <div className="grow">
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
