import React from "react";
import { RxCross2 } from "react-icons/rx";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Cart/CartProvider";

const CartDrawer = ({ cart, setCart }) => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setCart(false);
    navigate("/checkout", { state: { cartItems } });
  };

  return (
    <div
      className={`fixed top-0 right-0 lg:w-2/5 sm:w-3/4 w-4/4 h-full bg-white text-black z-60 duration-400 ${
        cart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between px-4 pt-[13px] pb-[13.5px] border-b-1 border-black">
        <h1 className="text-lg font-bold grow">Your Cart</h1>
        <RxCross2
          onClick={() => setCart(false)}
          className="w-8 h-8 cursor-pointer"
        />
      </div>
      <div className="grid overflow-y-scroll">
        <CartContents cartItems={cartItems} />
      </div>
      <div className="fixed bottom-0 w-full bg-white pt-4 box-shadow">
        <button
          onClick={handleCheckout}
          className="w-[80%] flex mx-auto justify-center bg-black text-white tracking-wider py-2 text-lg font-semibold mb-3 cursor-pointer rounded-sm hover:bg-blue-950"
        >
          Checkout
        </button>
        <p className="mb-2">
          Shipping, taxes and discounts are included at checkout
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
