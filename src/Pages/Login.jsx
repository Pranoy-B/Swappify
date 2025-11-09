import React, { use, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

  const {logIn} = use(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const [error,setError] = useState("")
  const [email,setEmail] = useState("")

  useEffect(() => {
  import("aos").then(AOS => {
    AOS.init({ duration: 800 });
  });
}, []);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value
    const password = form.password.value

    logIn(email,password)
    .then(result=>{
      const user = result.user;
      navigate(`${location.state? location.state : '/' }`)
      
    })
    .catch((error)=>{
      const errorMessage = error.message
      setError(errorMessage)
    })
  }

  const handleForgotPassword = () => {
    navigate("/forget-password", { state: { email } });
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
        <form className="flex flex-col gap-4" onSubmit={handleLogIn}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#468faf]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            
            required
            className="border border-gray-300 rounded-md px-4 py-2  focus:ring-2 focus:ring-[#468faf]"
          />
          <button className="bg-[#468faf] text-center text-white py-2 rounded-md hover:bg-[#367d91] transition-colors duration-200">
            Let's Go
          </button>
          <p>{error && <p className="text-red-700">{error}</p>}</p>
          <p  onClick={handleForgotPassword} className="text-blue-500">Forgot Password!</p>
          <p>New Here! <NavLink to='/register' className="text-[#468faf]">Register Now</NavLink></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
