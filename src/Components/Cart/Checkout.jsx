import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const Checkout = () => {
  const navigate = useNavigate();
  const navigatePayment = useNavigate();
  const location = useLocation();
  const cartItems = location.state?.cartItems || []; // Retrieve cart items from route state

  const handleEsewaPayment = () => {
    navigatePayment("/paymentmethood");
  };

  const [checkout, setCheckout] = useState(true);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    phoneNumber: "",
  });

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="my-[100px] w-[80%] mx-auto lg:flex grid items-start justify-center gap-5">
      {/* checkout form  */}
      <div className="bg-gray-100 lg:w-[40%] w-full mx-auto py-10 rounded-md shadow-md">
        <h1 className="uppercase text-2xl text-center font-bold">Checkout</h1>
        <div className="mx-auto w-[80%] mb-5">
          <form className="mx-auto">
            <h1 className="text-lg font-bold">Contact Detail</h1>
            <div className="flex gap-3">
              <label className="text-md font-semibold">Email</label>
              <input
                type="email"
                value="ksjbkjsbd@gmail.com"
                className="border-2 border-gray-700 rounded-sm w-full px-2"
                disabled
              />
            </div>
          </form>
        </div>
        {/* Delivery */}
        <div className="w-[80%] mx-auto">
          <h1 className="text-lg font-bold">Delivery</h1>
          <div className="flex gap-5">
            <div className="grid grid-cols-1 w-[50%]">
              <label className="text-lg font-medium">First Name</label>
              <input
                type="text"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                className="border-2 border-gray-700 rounded-sm w-full px-2"
                required
              />
            </div>
            <div className="grid grid-cols-1 w-[50%]">
              <label className="text-lg font-medium">Last Name</label>
              <input
                type="text"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                className="border-2 border-gray-700 rounded-sm w-full px-2"
                required
              />
            </div>
          </div>
        </div>
        {/* Address */}
        <div className="w-[80%] mx-auto mt-5">
          <div className="flex gap-5">
            <div className="grid grid-cols-1 w-[50%]">
              <label className="text-lg font-medium">Address</label>
              <input
                type="text"
                value={shippingAddress.address}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    address: e.target.value,
                  })
                }
                className="border-2 border-gray-700 rounded-sm w-full px-2"
                required
              />
            </div>
            <div className="grid grid-cols-1 w-[50%]">
              <label className="text-lg font-medium">City</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="border-2 border-gray-700 rounded-sm w-full px-2"
                required
              />
            </div>
          </div>
        </div>
        {/* Contact Info */}
        <div className="w-[80%] mx-auto mt-5">
          <div className="flex gap-5">
            <div className="grid grid-cols-1 w-[50%]">
              <label className="text-lg font-medium">Phone</label>
              <input
                type="tel"
                value={shippingAddress.phoneNumber}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    phoneNumber: e.target.value,
                  })
                }
                className="border-2 border-gray-700 rounded-sm w-full px-2"
                required
              />
            </div>
          </div>
        </div>
        {/* Continue to Payment Button */}
        {checkout ? (
          <div className="mt-8 bg-black text-white w-[80%] mx-auto text-center py-3 rounded-md">
            <button
              className="text-xl font-semibold w-full"
              onClick={() => setCheckout(false)}
            >
              Proceed Payment
            </button>
          </div>
        ) : (
          <div className="mt-4 pb-10 pt-3 px-3 w-[80%] mx-auto text-center bg-gray-800 text-white">
            <div>
              <p
                onClick={() => setCheckout(true)}
                className="flex items-center cursor-pointer"
              >
                <IoIosArrowRoundBack className="w-8 h-8" />
                Back
              </p>
              <h1 className="text-center text-xl font-medium">
                Select Payment Method
              </h1>
              <p
                onClick={handleEsewaPayment}
                className="bg-green-600 w-1/4  text-white py-5 mx-5 mt-5 rounded-lg text-lg font-semibold cursor-pointer  "
              >
                E-Sewa
              </p>
            </div>
          </div>
        )}
      </div>
      {/* product detail */}
      <div className=" lg:w-[40%] w-full mx-auto py-10 rounded-md shadow-md">
        <h1 className="text-center text-xl font-bold">Order Summary</h1>
        {cartItems.map((item, index) => {
          return (
            <div key={index} className="mb-5 px-5 flex items-center gap-5">
              <img
                className="w-15 h-15 mb-2 rounded-md"
                draggable="false"
                src={item.image[0].url}
                alt=""
              />
              <div className="w-full flex items-center justify-between">
                <div>
                  <p className="text-xl font-semibold">{item.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold">
                      Size: {item.size} ||
                    </p>
                    <p className="text-sm font-semibold">Color: {item.color}</p>
                  </div>
                  <p className="text-md font-semibold">Brand: {item.brand}</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold mb-2">${item.price}</p>
                  <p className="text-md font-bold mb-2">Qty:{item.quantity}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="w-full px-5">
          <div className="border-t-2 border-gray-700 flex items-center justify-between pt-3">
            <p className="text-md font-bold">Sub Total</p>
            <p className="text-md font-bold">${totalPrice.toLocaleString()}</p>
          </div>
          <div className="flex items-center justify-between pb-3">
            <p className="text-md font-bold">Shipping cost</p>
            <p className="text-md font-bold">$ 0</p>
          </div>
          <div className="border-t-2 border-gray-700 flex items-center justify-between pt-3">
            <p className="text-lg font-bold">Total Amount</p>
            <p className="text-lg font-bold">${totalPrice.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
