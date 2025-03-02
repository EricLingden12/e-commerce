import React from "react";

import MyOrder from "../Components/Layout/MyOrder";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  return (
    <div className="container flex gap-6 flex-start mx-auto my-[100px]">
      {/* left section */}
      <div className="grow">
        <MyOrder />
      </div>
      {/* right section */}
      <div className="inline-block p-5 text-center bg-gray-200 box-shadow">
        <CgProfile className="w-20 h-20 mx-auto" />

        <h1 className="text-xl font-extrabold">Jhon Doe</h1>
        <p className="text-md font-medium">Email: 6UHw0@example.com</p>
        <button className="text-lg font-semibold bg-black text-white px-5 py-2 mt-2 rounded-lg cursor-pointer hover:bg-blue-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
