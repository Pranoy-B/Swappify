import React, { use, useState } from "react";
import  { Toaster } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

  const {createUser,setUser} = use(AuthContext)
  const navigate = useNavigate()
  const [error,setError] = useState("")


  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value
    const email = form.email.value
    const photoURL = form.photoURL.value
    const password = form.password.value

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    setError("")
    console.log(name,email,photoURL,password)
    createUser(email,password)
    .then((result)=>{
      const user = result.user
      setUser(user)
      navigate("/login")
      
    })
    .catch((error)=>{
      setError(error.message)
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#839ffd] via-white to-[#839ffd] px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-[#468faf] mb-6 text-center">
          Register
        </h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-4" >
          <input
            type="text"
            name="name"
            placeholder="Name"
            
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#468faf]"
          />
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#468faf]"
          />
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
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#468faf]"
          />
          <button to="/login" className="bg-[#468faf] text-white py-2 rounded-md hover:bg-[#367d91] transition-colors duration-200">
            Submit
          </button>
          <p>{error && <p className="text-red-700">{error}</p>}</p>
          <p>Allready have an account! <NavLink  to='/login' className="text-[#468faf]">Login Now</NavLink></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
