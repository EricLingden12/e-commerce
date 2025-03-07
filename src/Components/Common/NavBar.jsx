// NavBar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import logo from "../../../public/assets/marowear_white.png";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useCart } from "../Cart/CartProvider";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [cart, setCart] = useState(false);
  const { cartItems, clearCart } = useCart();

  return (
    <>
      <nav className="bg-black z-50 fixed top-0 text-white w-full">
        <div className="md:container w-[95%] mx-auto flex items-center justify-between my-3">
          <div className="flex items-center gap-20">
            {/* logo */}
            <NavLink to="/collections:collection" className="logo-name">
              <p className="text-xl font-bold flex items-center gap-2">
                <img className="w-9 h-9" src={logo} alt="" />
                Maro Wear
              </p>
            </NavLink>
            {/* nav Lonks */}
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
            {/*  */}
          </div>
          {/* rignt side navigation */}
          <div className="flex items-center gap-4">
            <SearchBar />
            {/* shopping cart */}
            <p className="relative">
              <FaShoppingCart
                onClick={() => setCart(true)}
                className="w-6 h-6 cursor-pointer"
              />
              <span className="absolute bottom-4 right-0 text-red-500 text-md">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </p>
            {/* profile */}
            <div className="relative dropdown">
              <FaUser className="w-5 h-5 " />
              <div className="w-[105px] z-50 dropdown-content bg-gray-500 absolute top-5 right-0 p-2 hidden">
                {isAuthenticated ? (
                  <p>
                    <button
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                    >
                      Log Out
                    </button>
                  </p>
                ) : (
                  <p>
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                  </p>
                )}

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
