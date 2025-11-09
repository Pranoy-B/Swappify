import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const ForgetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleReset = (e) => {
    e.preventDefault();

    window.location.href = "https://mail.google.com";
  };
  useEffect(() => {
      import("aos").then((AOS) => {
        AOS.init({ duration: 800 });
      });
    }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#839ffd] via-white to-[#839ffd] px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-[#468faf] mb-6 text-center">
          Reset Password
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleReset}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#468faf]"
          />

          <button
            type="submit"
            className="bg-[#468faf] text-center text-white py-2 rounded-md hover:bg-[#367d91] transition-colors duration-200"
          >
            Reset Password
          </button>

          <p
            onClick={() => navigate("/login")}
            className="text-blue-500 cursor-pointer hover:underline text-center"
          >
            Back to Login
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
