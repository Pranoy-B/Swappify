import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Logged in successfully!", {
      style: {
        borderRadius: "10px",
        background: "#468faf",
        color: "#fff",
      },
    });
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#839ffd] via-white to-[#839ffd] px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-[#468faf] mb-6 text-center">
          Login
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#468faf]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-4 py-2  focus:ring-2 focus:ring-[#468faf]"
          />
          <button className="bg-[#468faf] text-white py-2 rounded-md hover:bg-[#367d91] transition-colors duration-200">
            Let's Go
          </button>
          <p>New Here! <NavLink to='/register' className="text-[#468faf]">Register Now</NavLink></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
