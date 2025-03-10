import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { useCart } from "./CartProvider";

const CartContents = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  return (
    <div className="mx-4 my-4 overflow-y-auto">
      {cartItems.length === 0 ? (
        <p>Your Cart is Empty</p>
      ) : (
        cartItems.map((item) => {
          const uniqueKey = `${item.productid}-${item.size || ""}-${
            item.color || ""
          }`;
          const imageUrl = item.image?.[0]?.url || "";
          const itemName = item.name || "Unnamed Product";
          const itemBrand = item.brand || "No Brand";
          const itemSize = item.size || "No Size";
          const itemColor = item.color || "No Color";
          const itemPrice = item.price || 0;
          const itemQuantity = item.quantity || 1;

          return (
            <div
              key={uniqueKey}
              className="flex items-center justify-between mb-4 box-shadow py-2"
            >
              <img
                src={imageUrl}
                alt={itemName}
                className="w-16 h-16 rounded-lg object-cover border"
                onError={(e) => {
                  console.log("Failed to load image:", imageUrl);
                  e.target.src = "/fallback-image.jpg";
                }}
              />
              <div>
                <p className="font-semibold">{itemName}</p>
                <p className="text-sm text-gray-500">{itemBrand}</p>
                <p className="text-sm text-gray-500">Size: {itemSize}</p>
                <p className="text-sm text-gray-500">Color: {itemColor}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    decreaseQuantity(item.productid, item.size, item.color)
                  }
                >
                  <FiMinus className="w-4 h-4" />
                </button>
                <span>{itemQuantity}</span>
                <button
                  onClick={() =>
                    increaseQuantity(item.productid, item.size, item.color)
                  }
                >
                  <FiPlus className="w-4 h-4" />
                </button>
              </div>
              <div className="sm:flex gap-3 text-center grid">
                <p className="font-semibold">
                  ${(itemPrice * itemQuantity).toFixed(2)}
                </p>
                <button
                  onClick={() =>
                    removeFromCart(item.productid, item.size, item.color)
                  }
                >
                  <MdDeleteForever className="w-6 h-6 text-red-500 mx-auto" />
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CartContents;
