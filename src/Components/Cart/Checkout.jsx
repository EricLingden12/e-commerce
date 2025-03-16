import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    phoneNumber: "",
  });

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleProceedToPayment = (e) => {
    e.preventDefault();

    if (
      !shippingAddress.firstName ||
      !shippingAddress.address ||
      !shippingAddress.city ||
      !shippingAddress.phoneNumber
    ) {
      return;
    }
    navigate("/paymentmethod", {
      state: { cartItems, shippingAddress, totalPrice },
    });
  };

  return (
    <div className="md:my-[100px] my-[150px] w-[80%] mx-auto flex md:flex-row flex-col-reverse items-start justify-center gap-5">
      {/* checkout form  */}
      <div className="bg-gray-100 lg:w-[40%] w-full mx-auto py-10 rounded-md shadow-md">
        <h1 className="uppercase text-2xl text-center font-bold">
          Delivery Information
        </h1>

        {/* Single form wrapper */}
        <form onSubmit={handleProceedToPayment} className="w-[80%] mx-auto">
          {/* Email */}
          <div className="mt-5">
            <label className="text-lg font-medium">Email</label>
            <input
              type="email"
              value="ksjbkjsbd@gmail.com"
              className="border-2 border-gray-700 rounded-sm w-full px-2"
              readOnly
              required
            />
          </div>

          {/* Full Name */}
          <div className="mt-5">
            <label className="text-lg font-medium">Full Name</label>
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

          {/* Phone */}
          <div className="mt-5">
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
              pattern="[0-9]{10,}"
              title="Please enter a valid phone number (at least 10 digits)"
            />
          </div>

          {/* Address and City */}
          <div className="mt-5">
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

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-8 bg-black text-white w-full text-center py-3 rounded-md text-xl font-semibold"
          >
            Proceed Payment
          </button>
        </form>
      </div>

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
