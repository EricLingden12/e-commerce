import React, { useEffect, useState } from "react";

import image1 from "../../../public/assets/hero_img/84203f88-7d4f-419d-8068-4be323ccd210.jpg";
import image2 from "../../../public/assets/hero_img/b68ee65c-c8f4-4e24-bc46-450ed9667a8b.jpg";
import image3 from "../../../public/assets/hero_img/c7d9cbba-cc53-4be3-986f-2264e477fdc0.jpg";
import men_image1 from "../../../public/assets/hero_img/Flux_Dev_Generate_two_highresolution_images_featuring_one_styl_3.jpeg";
import women_image1 from "../../../public/assets/hero_img/premium_photo-1689371952452-c88c72464115.avif";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const [slideImg, setSlideImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideImg((prev) => (prev + 1) % imgData.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="sm:border-1 border-0 border-gray-300 md:h-[500px] h-[800px] overflow-hidden mb-[30px]">
        <div className="md:flex md:items-start grid grid-cols-1">
          <div className="md:w-[30%] w-[100%] md:my-auto my-10 md:mx-[5%] grid md:grid-cols-1 grid-cols-2 items-center ">
            <div className="md:mx-0 mx-auto">
              <p className="md:text-6xl text-4xl font-medium mb-3 prata-regular">
                Our{" "}
              </p>
              <p className="md:text-7xl text-4xl mb-5 prata-regular">Latest </p>
              <p className="md:text-7xl text-4xl mb-8 prata-regular">
                Collection
              </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-800 text-white md:text-xl text-md rounded-md cursor-pointer w-[150px] h-[50px]">
              Shop Now
            </button>
          </div>
          {/* hero images  */}
          <div className="relative md:w-[70%] w-[100%]">
            {imgData.map((item, index) => (
              <div
                key={index}
                className={`w-[100%] h-[500px] flex items-center ${
                  slideImg === index ? "block" : "hidden"
                }`}
              >
                <img className="z-2" src={item.img} alt="" />
              </div>
            ))}
            <div className="absolute bottom-3 md:right-90 right-50 flex gap-3 items-center z-10">
              {imgData.map((_, index) => (
                <button
                  key={index}
                  onClick={setSlideImg.bind(null, index)}
                  className={
                    slideImg === index
                      ? "bg-white w-[18px] h-[18px] rounded-full cursor-pointer"
                      : "bg-blue-300 w-[12px] h-[12px] rounded-full cursor-pointer"
                  }
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* // Collection by gender */}
      <div className="w-[100%] mx-auto md:flex grid items-center justify-center gap-8 mb-[70px]">
        {/* for men */}
        <NavLink to="/men" className="relative md:w-[30%] ">
          <img className="w-[100%] h-[400px]" src={men_image1} alt="" />
          <div className="absolute bottom-0 w-full grid bg-[#c9c9c9] text-black p-4 rounded-md text-center">
            <p className="text-md font-semibold pb-3">Collection For Men</p>
            <button className="bg-black text-white py-2 px-4 rounded-md cursor-pointer">
              Shop Now
            </button>
          </div>
        </NavLink>
        {/* for women */}
        <NavLink to="/women" className="relative md:w-[30%] ">
          <img className="w-[100%] h-[400px]" src={women_image1} alt="" />
          <div className="absolute bottom-0 w-full grid bg-[#c9c9c9] text-black p-4 rounded-md text-center">
            <p className="text-md font-semibold pb-3">Collection For Women</p>
            <button className="bg-black text-white py-2 px-4 rounded-md cursor-pointer">
              Shop Now
            </button>
          </div>
        </NavLink>
        {/* offer */}
        <NavLink to="/offer" className="relative md:w-[30%]">
          <img className="w-[100%] h-[400px]" src={men_image1} alt="" />
          <div className="absolute bottom-0 w-full grid bg-[#c9c9c9] text-black p-4 rounded-md text-center">
            <p className="text-md font-semibold pb-3">
              50 % off On Every Purches
            </p>
            <button className="bg-black text-white py-2 px-4 rounded-md cursor-pointer">
              Shop Now
            </button>
          </div>
        </NavLink>
      </div>
    </>
  );
};
const imgData = [
  {
    id: 1,
    img: image1,
  },
  {
    id: 2,
    img: image2,
  },
  {
    id: 3,
    img: image3,
  },
];

export default Hero;
