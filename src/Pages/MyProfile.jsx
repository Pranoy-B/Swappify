import React, { use } from "react";
import { FaUserEdit } from "react-icons/fa";

import { AuthContext } from "../provider/AuthProvider";
import Loading from "./loading";
import { useNavigate } from "react-router";

const MyProfile = () => {
  const { user, loading } = use(AuthContext);
  const navigate = useNavigate()

  if (loading) return <Loading></Loading>;
  if (!user)
    return (
      <h3 className="min-h-screen flex justify-center items-center font-bold text-3xl text-[#468faf]">
        Please log in to view your profile
      </h3>
    );

    const handleProfile = () => {
        navigate("/update-profile")
    }

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex flex-col items-center py-10 px-4">
      <div
        className="max-w-7xl mx-auto px-4 py-10"
      >
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6">
          <div className="avatar mb-5">
            <div className="w-55 shadow-2xl transition-shadow">
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            Name:{" "}
            <span className="text-[#468faf] font-bold">{user.displayName}</span>
          </h2>

          <p className="text-gray-600 mb-6 text-center">
            Email:{" "}
            <span className="font-medium text-gray-700">{user.email}</span>
          </p>

          <button onClick={handleProfile} className="w-full text-center bg-[#468faf] text-white py-2 rounded-md hover:bg-blue-700 transition flex items-center justify-center gap-2">
            <FaUserEdit />
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
