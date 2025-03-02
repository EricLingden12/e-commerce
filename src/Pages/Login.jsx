import React, { useState } from "react";
import logo from "../../public/assets/marowear_black.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="border-1 border-gray-800 w-[350px] mx-auto my-[200px] py-4">
      <img className="w-15 h-15 mx-auto mb-2" src={logo} alt="" />
      <h1 className="text-2xl font-bold text-center mb-5">Login</h1>
      <form onSubmit={handleSubmit} className="w-[80%] mx-auto">
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
          Login
        </button>
        <div className="mt-4">
          <NavLink to="/register">
            <p className="text-center mt-2">
              Don't have an account?
              <span className="text-blue-600 cursor-pointer">Sign Up</span>
            </p>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
