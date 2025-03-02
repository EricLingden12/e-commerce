import React, { useState } from "react";
import logo from "../../public/assets/marowear_black.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };
  return (
    <div className="border-1 border-gray-800 w-[350px] mx-auto my-[200px] py-4">
      <img className="w-15 h-15 mx-auto mb-2" src={logo} alt="" />
      <h1 className="text-2xl font-bold text-center mb-5">Sign Up</h1>
      <form onSubmit={handleSubmit} className="w-[80%] mx-auto">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full outline-0 border-1 rounded-md text-black text-md px-2 py-2 mb-3"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full outline-0 border-1 rounded-md text-black text-md px-2 py-2 mb-3"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full outline-0 border-1 rounded-md text-black text-md px-2 py-2 mb-4"
        />
        <button
          type="submit"
          className="bg-black hover:bg-blue-800 text-white md:text-xl text-md rounded-md cursor-pointer w-full h-[50px]"
        >
          Sign Up
        </button>
        <div className="mt-4">
          <NavLink to="/login">
            <p className="text-center mt-2">
              Already have an account?
              <span className="text-blue-600 cursor-pointer">Login</span>
            </p>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
