import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { recentOrders } from "../Components/product";
const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold pt-3 text-center"> AdminDashboard</h1>
      <div className="w-[90%] md:flex grid justify-center gap-5 mt-10 mx-auto">
        <div className="md:w-[35%] w-[300px] admin-shadow bg-gray-200 px-5 pt-5 pb-3 rounded-lg h-[140px]">
          <p className="text-2xl font-medium mb-2">Todays Revenue</p>
          <p className="flex items-center text-xl ">
            <MdCurrencyRupee />
            5,000
          </p>
        </div>
        <div className="md:w-[35%] w-[300px] admin-shadow bg-gray-200 px-5 pt-5 pb-3 rounded-lg font-medium">
          <p className="text-2xl ">Todays Orders</p>
          <p className="flex items-center text-xl  mt-1 mb-2">5</p>
          <NavLink className="text-md text-blue-700" to="/admin/orders">
            Manage Orders
          </NavLink>
        </div>
        <div className="md:w-[35%] w-[300px] admin-shadow bg-gray-200 px-5 pt-5 pb-3 rounded-lg font-medium">
          <p className="text-2xl">Total Products</p>
          <p className="flex items-center text-xl  mt-1 mb-2">20</p>
          <NavLink className="text-md text-blue-700" to="/admin/products">
            Manage products
          </NavLink>
        </div>
      </div>
      {/* orders List */}
      <div className="md:w-[90%] w-[98%] mx-auto mt-10">
        <h2 className="text-lg font-semibold ">Recent Orders</h2>
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
                    <td>Pending</td>
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

export default AdminDashboard;
