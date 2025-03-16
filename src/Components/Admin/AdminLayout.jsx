import React, { useState, useEffect, useRef } from "react";
import AdminSideBar from "../Admin/AdminSideBar";
import { Outlet, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const AdminLayout = () => {
  const [sidebar, setSidebar] = useState(true);
  const sidebarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebar(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getHeaderText = () => {
    switch (location.pathname) {
      case "/admin/users":
        return "Users";
      case "/admin/products":
        return "Products";
      case "/admin/orders":
        return "Orders";
      case "/admin/sales":
        return "Sales & Reports";
      default:
        return "Admin DashBoard";
    }
  };

  return (
    <div>
      {/* Mobile Header */}
      <div className="bg-black text-white py-3 px-5 md:hidden flex gap-5 items-center">
        <button onClick={() => setSidebar(!sidebar)}>
          {sidebar ? (
            <RxCross2 className="w-7 h-7" />
          ) : (
            <FaBars className="w-7 h-7" />
          )}
        </button>
        <p className="text-lg font-bold">{getHeaderText()}</p>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed w-[250px] bg-gray-100 admin-shadow py-5 h-[100vh] duration-300 transform ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <AdminSideBar />
      </div>

      {/* Main Content */}
      <div className="md:ml-[250px] ml-0">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
