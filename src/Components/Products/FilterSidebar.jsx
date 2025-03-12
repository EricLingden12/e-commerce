import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";

const FilterSidebar = ({ onFilterChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    category: [],
    gender: [],
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 5,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([5, 100]);

  const categories = ["Top Wear", "Bottom Wear", "Foot Wear"];
  const colors = [
    "White",
    "Black",
    "Blue",
    "Red",
    "Green",
    "Yellow",
    "Orange",
    "Navy",
    "Pink",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Silk", "Leather", "Denim", "Synthetic"];
  const brands = ["Adidas", "Nike", "Puma", "Reebok", "Vans"];
  const gender = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilter({
      category: params.category ? params.category.split(",") : [],
      gender: params.gender ? params.gender.split(",") : [],
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: Number(params.minPrice) || 5,
      maxPrice: Number(params.maxPrice) || 100,
    });

    setPriceRange([
      Number(params.minPrice) || 5,
      Number(params.maxPrice) || 100,
    ]);
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filter };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = (newFilters[name] || []).filter(
          (item) => item !== value
        );
      }
    } else if (name === "priceRange") {
      const [minPrice, maxPrice] = value.split(",").map(Number);
      newFilters.minPrice = minPrice;
      newFilters.maxPrice = maxPrice;
      setPriceRange([minPrice, maxPrice]);
    } else {
      newFilters[name] = value;
    }
    setFilter(newFilters);
    updateUrlParams(newFilters);
    onFilterChange(newFilters); // Pass the updated filters to the parent component
    console.log("Updated Filters:", newFilters); // Debugging statement
  };

  const updateUrlParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  return (
    <div className="h-[85vh] overflow-y-auto">
      <h1 className="text-2xl font-bold text-center">Filter</h1>
      {/* filter by gender */}
      <div className="mb-3">
        <label className="text-lg font-semibold">Gender</label>
        {gender.map((gender) => (
          <div key={gender}>
            <input
              type="checkbox"
              name="gender"
              value={gender}
              checked={filter.gender.includes(gender)}
              className="text-md text-blue-700 font-medium"
              onChange={handleFilterChange}
            />
            <label className="ms-3 text-md font-medium">{gender}</label>
          </div>
        ))}
      </div>
      {/* filter by category */}
      <div className="mb-3">
        <label className="text-lg font-semibold">Category</label>
        {categories.map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              name="category"
              value={category}
              checked={filter.category.includes(category)}
              onChange={handleFilterChange}
            />
            <label className="ms-3 text-md font-medium">{category}</label>
          </div>
        ))}
      </div>
      {/* filter by size */}
      <div className="mb-3">
        <label className="text-lg font-semibold">Size</label>
        {sizes.map((size) => (
          <div key={size}>
            <input
              type="checkbox"
              name="size"
              value={size}
              checked={filter.size.includes(size)}
              onChange={handleFilterChange}
            />
            <label className="ms-3 text-md font-medium">{size}</label>
          </div>
        ))}
      </div>
      {/* filter by color */}
      <div className="mb-3">
        <label className="text-lg font-semibold">Color</label>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <div key={color}>
              <button
                key={color}
                name="color"
                value={color}
                className="w-6 h-6 border border-gray-500 rounded-full cursor-pointer focus:border-3 focus:border-blue-300"
                style={{ backgroundColor: color }}
                onClick={() =>
                  handleFilterChange({
                    target: { name: "color", value: color },
                  })
                }
              ></button>
            </div>
          ))}
        </div>
      </div>
      {/* filter by brands */}
      <div className="mb-3">
        <label className="text-lg font-semibold">Brands</label>
        {brands.map((brand) => (
          <div key={brand}>
            <input
              type="checkbox"
              name="brand"
              value={brand}
              checked={filter.brand.includes(brand)}
              onChange={handleFilterChange}
            />
            <label className="ms-3 text-md font-medium">{brand}</label>
          </div>
        ))}
      </div>
      {/* filter by materials */}
      <div className="mb-3">
        <label className="text-lg font-semibold">Materials</label>
        {materials.map((material) => (
          <div key={material}>
            <input
              type="checkbox"
              name="material"
              value={material}
              checked={filter.material.includes(material)}
              onChange={handleFilterChange}
            />
            <label className="ms-3 text-md font-medium">{material}</label>
          </div>
        ))}
      </div>
      {/* filter by price */}
      <div className="mb-3">
        <label className="text-lg font-semibold">Price</label>
        <div className="w-[80%] space-y-4">
          <div>
            <input
              type="range"
              name="maxPrice"
              min={filter.minPrice} // Ensure max can't be lower than min
              max="100"
              value={filter.maxPrice}
              onChange={handleFilterChange}
              className="w-full bg-transparent cursor-pointer"
            />
            <span className="flex items-center">
              <MdCurrencyRupee />
              {filter.maxPrice}
            </span>
          </div>

          {/* Price Display */}
          <div className="flex justify-between text-sm">
            <span>Price Range: </span>
            <span className="flex items-center">
              <MdCurrencyRupee />
              {filter.minPrice} - <MdCurrencyRupee />
              {filter.maxPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
