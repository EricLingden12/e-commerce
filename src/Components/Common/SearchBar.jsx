import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const SearchBar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={`mt-2`}>
      {openSearch ? (
        <form className="absolute top-15 left-0 bg-black w-full ">
          <div className="flex items-center justify-center gap-2">
            <div className="bg-white md:w-[40%] w-[80%] mt-2 mb-4 px-2 rounded-md flex items-center">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full outline-0 text-black text-md px-2 py-2"
              />
              {/* search button */}
              <button type="submit">
                <FaSearch className="w-5 h-5 cursor-pointer text-black" />
              </button>
            </div>
            {/* close button */}
            <RxCross2
              className="w-7 h-7 font-extrabold cursor-pointer mb-2"
              onClick={() => setOpenSearch(false)}
            />
          </div>
        </form>
      ) : (
        <button onClick={() => setOpenSearch(true)}>
          <FaSearch className="w-5 h-5 cursor-pointer" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
