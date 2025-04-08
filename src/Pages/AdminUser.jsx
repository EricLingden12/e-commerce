import React from "react";

const AdminUser = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold pt-3 text-center">User Management</h1>
      <div className="w-[80%] mx-auto mt-5">
        <h2 className="text-lg font-semibold">Add New User</h2>
        <form className="mt-5">
          <div className="grid">
            <label className="text-md font-semibold">Full Name</label>
            <input
              className="border p-1 outline-none px-2 rounded-sm"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="grid my-4">
            <label className="text-md font-semibold">Email</label>
            <input
              className="border p-1 outline-none px-2 rounded-sm"
              type="email"
              required
            />
          </div>
          <div className="grid my-4">
            <label className="text-md font-semibold">Password</label>
            <input
              className="border p-1 outline-none px-2 rounded-sm"
              type="password"
              required
            />
          </div>
          <div className="grid my-4">
            <label className="text-md font-semibold">Role</label>
            <select name="role" className="w-full border p-1 rounded-sm">
              <option className="w-full" value="Admin" required>
                Admin
              </option>
              <option value="User">Member</option>
            </select>
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded-sm cursor-pointer">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminUser;
