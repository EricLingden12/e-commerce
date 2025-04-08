import React from "react";
import logo from "../../../public/assets/marowear_black.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserFriends, FaBoxOpen, FaClipboardList } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { TbLogout } from "react-icons/tb";

const AdminSideBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="">
      <img className="w-15 h-15 mx-auto mb-4" src={logo} alt="" />
      <NavLink to="/admin" className=" text-xl font-bold text-center">
        <p className="">Admin Dashboard</p>
      </NavLink>

      <hr />
      <ul className="px-11 mt-5 grid gap-5">
        <li className="admin-sidebar">
          <NavLink
            to="/admin/orders"
            className="flex items-center gap-2 text-lg font-medium"
          >
            <FaClipboardList className="w-5 h-5" />
            Orders
          </NavLink>
        </li>
        <li className="admin-sidebar">
          <NavLink
            to="/admin/products"
            className="flex items-center gap-2 text-lg font-medium admin-sidebar"
          >
            <FaBoxOpen className="w-5 h-5" />
            Product
          </NavLink>
        </li>

        <li className="admin-sidebar">
          <NavLink
            to="/admin/sales"
            className="flex items-center gap-2 text-lg font-medium"
          >
            <FcSalesPerformance className="w-5 h-5" />
            Sales & Reports
          </NavLink>
        </li>
        <li className="admin-sidebar">
          <NavLink
            to="/admin/users"
            className="flex items-center gap-2 text-lg font-medium admin-sidebar"
          >
            <FaUserFriends className="w-5 h-5" />
            Users
          </NavLink>
        </li>
        <button
          onClick={handleLogout}
          className="flex w-full justify-center py-3 items-center gap-3 text-lg font-medium bg-red-400 rounded-md cursor-pointer active:bg-red-700"
        >
          Logout <TbLogout className="w-7 h-7" />
        </button>
      </ul>
    </div>
  );
};

export default AdminSideBar;
