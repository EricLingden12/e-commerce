// NavBar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import logo from "../../../public/assets/marowear_white.png";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useCart } from "../Cart/CartProvider";

const NavBar = () => {
  const [cart, setCart] = useState(false);
  const { cartItems } = useCart();

  // Calculate the total number of items in the cart
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <nav className="bg-black z-50 fixed top-0 text-white w-full">
        <div className="md:container w-[95%] mx-auto flex items-center justify-between my-3">
          <div className="flex items-center gap-20">
            <NavLink to="/collections:collection">
              <p className="text-xl font-bold flex items-center gap-2">
                <img className="w-9 h-9" src={logo} alt="" />
                Maro Wear
              </p>
            </NavLink>
            <ul className="md:flex hidden items-center gap-4">
              <li className="navlinks">
                <NavLink className="text-md font-medium " to="/">
                  Home
                </NavLink>
              </li>
              <li className="navlinks">
                <NavLink className="text-md font-medium navlinks" to="/men">
                  Men
                </NavLink>
              </li>
              <li className="navlinks">
                <NavLink className="text-md font-medium navlinks" to="/women">
                  Women
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <SearchBar />
            <p className="relative">
              <FaShoppingCart
                onClick={() => setCart(true)}
                className="w-6 h-6"
              />
              <span className="absolute bottom-4 right-0 text-red-500 text-md">
                {totalItems} {/* Display the total number of items */}
              </span>
            </p>
            <div className="relative dropdown">
              <FaUser className="w-5 h-5 " />
              <div className="w-[105px] z-50 dropdown-content bg-gray-500 absolute top-5 right-0 p-2 hidden">
                <p>
                  <NavLink
                    className="hover:underline underline-offset-2 mb-3"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    className="hover:underline underline-offset-2"
                    to="/profile"
                  >
                    View Profile
                  </NavLink>
                </p>
              </div>
            </div>

            <div className="md:hidden block">
              <FaBars className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* smaller screen navigation */}
        <hr className="md:hidden block" />
        <div className="md:hidden flex items-center justify-center my-4">
          <ul className="flex items-center gap-4">
            <li className="navlinks">
              <NavLink className="text-md font-medium " to="/">
                Home
              </NavLink>
            </li>
            <li className="navlinks">
              <NavLink className="text-md font-medium navlinks" to="/men">
                Men
              </NavLink>
            </li>
            <li className="navlinks">
              <NavLink className="text-md font-medium navlinks" to="/women">
                Women
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <CartDrawer cart={cart} setCart={setCart} />
    </>
  );
};

export default NavBar;
