import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { BiLogOut } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logged Out Successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="navbar bg-[#468faf] shadow-sm">
      <div className="navbar-start">
        <div className="dropdown z-20">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-[#468faf] rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink className='text-white'>Home</NavLink>
            {user && (
              <NavLink to="/my-profile" className="text-sm text-white font-medium mb-1">
                My Profile
              </NavLink>
            )}

            {user ? (
              <button
                onClick={handleLogOut}
                className="text-sm text-white font-medium text-left"
              >
                Logout
              </button>
            ) : (
              <NavLink to="/login" className="text-lg font-medium">
                Login
              </NavLink>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white font-semibold">
          Swappify
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink className={"text-xl font-semibold text-gray-200"}>
            Home
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end items-center ">
        {user && user.photoURL ? (
          <div className="flex flex-row items-center">
            <img
              src={user.photoURL}
              alt={user.displayName || "User Avatar"}
              title={user.displayName || "User"}
              className=" w-8 h-8 rounded-full border-2 border-white object-cover"
            />
            <Link
              to="/my-profile"
              className="hidden lg:flex text-white px-3 rounded-sm py-2 font-semibold text-xl btn btn-ghost"
            >
              My Profile
            </Link>
          </div>
        ) : (
          <BsPersonCircle size={28} color="white" />
        )}
        {user ? (
          <NavLink
            to="/"
            onClick={handleLogOut}
            className="hidden lg:flex text-white px-3 rounded-sm py-2 font-semibold text-xl btn btn-ghost"
          >
            Logout
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className="text-white px-3 rounded-sm py-2 font-semibold text-xl btn btn-ghost"
          >
            Login
          </NavLink>
        )}
        {/* <Navlink to='/login' className="text-white px-3 rounded-sm py-2 font-semibold text-xl btn btn-ghost">Login</Navlink> */}
      </div>
    </div>
  );
};

export default Navbar;
