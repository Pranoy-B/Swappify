import React, { useState, useEffect, use } from "react";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import "aos/dist/aos.css";

const UpdateProfile = () => {
  const { user, updateUser, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 800 });
    });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
      })
      .catch((error) => {
        console.log(error);
        setUser(user);
      });
    navigate("/my-profile"); // go back after "update"
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex items-center justify-center px-4 py-10">
      <div
        className="bg-white p-8 rounded-lg shadow-md max-w-md w-full hover:shadow-2xl transition-shadow"
        data-aos="zoom-in"
      >
        <h2 className="text-2xl font-bold text-[#468faf] text-center mb-6">
          Update Profile
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleUpdate}>
          <label className="text-gray-700 font-medium">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#468faf]"
          />

          <label className="text-gray-700 font-medium">Photo URL:</label>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Enter your photo URL"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#468faf]"
          />

          <button
            type="submit"
            className="bg-[#468faf] text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition"
          >
            <FaUserEdit />
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
