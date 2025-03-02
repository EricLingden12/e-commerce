// CartContents.jsx
import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { useCart } from "../Cart/CartProvider";

const CartContents = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  return (
    <div className="mx-4 my-4 overflow-y-auto">
      {cartItems.length === 0 ? (
        <p>Your Cart is Empty</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.productid}
            className="flex items-center justify-between mb-4"
          >
            <img
              src={item.image[0].url}
              alt={item.name}
              className="w-16 h-16 rounded-lg"
            />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.brand}</p>
              <p className="text-sm text-gray-500">Size: {item.size}</p>
              <p className="text-sm text-gray-500">Color: {item.color}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => decreaseQuantity(item.productid)}>
                <FiMinus className="w-4 h-4" />
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.productid)}>
                <FiPlus className="w-4 h-4" />
              </button>
            </div>
            <p className="font-semibold">${item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.productid)}>
              <MdDeleteForever className="w-6 h-6 text-red-500" />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartContents;
