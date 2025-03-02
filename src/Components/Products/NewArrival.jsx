import React, { useState, useRef, useEffect } from "react";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

// import { newarrivelData } from "../product";

export default function NewArrival() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollAmount, setScrollAmount] = useState(1000); // Dynamic scroll value

  const newarrivelData = [
    {
      productid: 1,
      name: "T-shirt",
      brand: "Adidas",
      price: 20,
      image: [
        {
          url: "https://picsum.photos/600/600/?random=1",
          altText: "T - shirt",
        },
      ],
    },
    {
      productid: 2,
      name: "T-shirt",
      brand: "Adidas",
      price: 20,
      image: [
        {
          url: "https://picsum.photos/600/600?random=2",
          altText: "T - shirt",
        },
      ],
    },
    {
      productid: 3,
      name: "T-shirt",
      brand: "Adidas",
      price: 20,
      image: [
        {
          url: "https://picsum.photos/600/600?random=3",
          altText: "T - shirt",
        },
      ],
    },
    {
      productid: 4,
      name: "T-shirt",
      brand: "Adidas",
      price: 20,
      image: [
        {
          url: "https://picsum.photos/600/600?random=4",
          altText: "T - shirt",
        },
      ],
    },
    {
      productid: 5,
      name: "T-shirt",
      brand: "Adidas",
      price: 20,
      image: [
        {
          url: "https://picsum.photos/600/600?random=5",
          altText: "T - shirt",
        },
      ],
    },
    {
      productid: 6,
      name: "T-shirt",
      brand: "Adidas",
      price: 20,
      image: [
        {
          url: "https://picsum.photos/600/600?random=6",
          altText: "T - shirt",
        },
      ],
    },
    {
      productid: 7,
      name: "T-shirt",
      brand: "Adidas",
      price: 20,
      image: [
        {
          url: "https://picsum.photos/600/600?random=7",
          altText: "T - shirt",
        },
      ],
    },
    {
      productid: 8,
      name: "T-shirt",
      brand: "Adidas",
      price: 20,
      image: [
        {
          url: "https://picsum.photos/600/600?random=8",
          altText: "T - shirt",
        },
      ],
    },
  ];

  useEffect(() => {
    const updateScrollAmount = () => {
      if (window.innerWidth < 640) {
        setScrollAmount(250); // Small screens
      } else if (window.innerWidth < 1024) {
        setScrollAmount(300); // Tablets
      } else {
        setScrollAmount(1000); // Larger screens
      }
      checkScroll(); // Update button states on resize
    };

    window.addEventListener("resize", updateScrollAmount);
    updateScrollAmount(); // Initial setup

    return () => window.removeEventListener("resize", updateScrollAmount);
  }, []);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
      setTimeout(checkScroll, 300); // Delay check for smooth effect
    }
  };
  return (
    <div className="relative mb-[100px] text-center">
      <h2 className="text-2xl font-bold mb-1">New Arrival</h2>
      <p className="text-sm font-medium mb-10">
        Fresh Styles, New Vibes - Shop the Latest at MeroWear!
      </p>

      {/* scroll button */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`border-1 border-gray-500 rounded-sm cursor-pointer ${
            !canScrollLeft
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
        >
          <IoIosArrowBack className="w-7 h-7" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`border-1 border-gray-500 rounded-sm cursor-pointer ${
            !canScrollRight
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
        >
          <IoIosArrowForward className="w-7 h-7" />
        </button>
      </div>
      {/* new arrival products */}
      <div
        ref={scrollRef}
        className="container mx-auto flex space-x-5 overflow-x-auto scrollbar scroll-smooth"
      >
        {newarrivelData.map((item) => {
          return (
            <div
              to="/product/:id"
              key={item.id}
              className="min-w-[60%] sm:min-w-[50%] lg:min-w-[25%] box-shadow p-5 text-start"
            >
              <NavLink to="/product/:id">
                <img
                  className="w-[100%] mb-2"
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
                      Add to Cart
                    </button>
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
