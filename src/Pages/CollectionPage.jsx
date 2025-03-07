import React, { useState, useEffect, useRef } from "react";
import ProductGrid from "../Components/Products/ProductGrid";
import Footer from "../Components/Common/Footer";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../Components/Products/FilterSidebar";
// import ShortProducts from "../Components/Products/ShortProducts";

const CollectionPage = () => {
  const [sideFilter, setSideFilter] = useState(false);
  const sideRef = useRef(null);

  // State for filters
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

  // Toggle filter sidebar
  const toggleSideFilter = () => {
    setSideFilter(!sideFilter);
  };

  // Close sidebar when clicking outside
  const handleClickOutside = (e) => {
    if (sideRef.current && !sideRef.current.contains(e.target)) {
      setSideFilter(false);
    }
  };

  // Handle filter changes from FilterSidebar
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    console.log("Filters received in CollectionPage:", newFilters); // Debugging statement
  };

  // Add event listener for clicking outside the sidebar
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="md:mt-[60px] mt-[118px] mx-auto">
      {/* Filter and Sort Header */}
      <div className="fixed bg-white w-[100%] py-2 z-30 px-5 mx-auto flex items-center">
        <h1 className="text-xl font-bold">All Collection</h1>
        <button
          onClick={toggleSideFilter}
          className="flex items-center mx-auto gap-1 cursor-pointer text-xl font-semibold"
        >
          <FaFilter />
          Filter
        </button>
      </div>

      {/* Filter Sidebar */}
      <div
        ref={sideRef}
        className={`fixed md:w-[25%] sm:w-[40%] mt-[30px] w-[60%] ps-5 py-5 bg-gray-100 duration-300 transform ${
          sideFilter ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <FilterSidebar onFilterChange={handleFilterChange} />
      </div>

      {/* Product Grid */}
      <div className="py-[100px]">
        <ProductGrid filters={filters} />
      </div>
    </div>
  );
};

export default CollectionPage;
