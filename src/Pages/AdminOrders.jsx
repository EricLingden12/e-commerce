import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { recentOrders } from "../Components/product";

const AdminOrders = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold pt-3 text-center">Order Management</h1>
      <div className="md:w-[90%] w-[98%] mx-auto mt-10">
        <select className="text-lg font-semibold outline-none">
          <option value="All">All Orders</option>
          <option value="Pending">Pending</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <div className="w-[100%] mx-auto py-5 sm:py-5 overflow-x-auto">
          <table className="w-full bg-gray-700 rounded-lg">
            <thead className="uppercase text-gray-300">
              <tr>
                <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1">
                  SN
                </th>
                <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1">
                  Image
                </th>
                <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1">
                  Product ID
                </th>
                <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1">
                  Quantity
                </th>
                <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1">
                  Total Price
                </th>
                <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1">
                  Status
                </th>
                {/* <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1">
                  Action
                </th> */}
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((orders, index) => {
                return (
                  <tr key={index} className="text-white text-center ">
                    <td className="">{index + 1}</td>
                    <td className="py-1 sm:py-2 px-1">
                      <img
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover mx-auto rounded-md"
                        src={orders.image[0].url}
                        alt=""
                      />
                    </td>
                    <td className="text-xs sm:text-sm md:text-base py-1 sm:py-2 px-1">
                      {orders.productid}
                    </td>
                    <td className="text-xs sm:text-sm md:text-base py-1 sm:py-2 px-1">
                      1
                    </td>

                    <td className=" text-xs sm:text-sm md:text-base py-1 sm:py-2 px-1 ">
                      <p className="flex items-center justify-center">
                        <MdCurrencyRupee />
                        {orders.price}
                      </p>
                    </td>
                    <td>
                      <select className="text-lg font-semibold outline-none">
                        <option value={"Pending"}>Pending</option>
                        <option value={"Pending"}>Processing</option>
                        <option value={"Delivered"}>Delivered</option>
                        <option value={"Cancelled"}>Cancelled</option>
                      </select>
                    </td>
                    {/* <td>
                      <button className="bg-green-600 text-white px-3 py-2 rounded-md">
                        Delevered
                      </button>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
