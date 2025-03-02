import React from "react";
import { useSearchParams } from "react-router-dom";

const ShortProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChanges = (e) => {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);
  };

  return (
    <div className="">
      <select
        id="sort"
        onChange={handleSortChanges}
        value={searchParams.get("sortBy") || ""}
        className="outline-none"
      >
        <option value="">Default</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDec">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
};

export default ShortProducts;
