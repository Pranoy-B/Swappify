import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router";

const SkillDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [skillDtails, setSkillDetails] = useState({});

  useEffect(() => {
    const filteredData = data.find((skill) => skill.skillId == id);
    setSkillDetails(filteredData);
  }, [id, data]);
  const {
    image,
    skillName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    category,
  } = skillDtails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!", {
      style: {
        borderRadius: "10px",
        background: "#468faf",
        color: "#fff",
      },
    });
    setFormData({ name: "", email: "" });
  };
  return (
    <div className="bg-gradient-to-b from-[#839ffd] via-white to-[#839ffd] min-h-screen py-12 px-6">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={image} alt={skillName} className="w-full h-88 " />
        <div className="p-8">
          <h2 className="text-3xl font-bold text-[#468faf] mb-4">
            {skillName}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <p>
              <span className="font-semibold text-gray-700">Provider:</span>{" "}
              {providerName}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Email:</span>{" "}
              {providerEmail}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Category:</span>{" "}
              {category}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Price:</span> $
              {price}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Rating:</span> ⭐{" "}
              {rating}
            </p>
            <p>
              <span className="font-semibold text-gray-700">
                Slots Available:
              </span>{" "}
              {slotsAvailable}
            </p>
          </div>

          <p className="text-gray-700 mb-8">{description}</p>

          <div className="bg-[#f1f5ff] p-6 rounded-lg shadow-inner">
            <h3 className="text-2xl font-semibold text-[#468faf] mb-4">
              Book a Session
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 max-w-md"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#468faf]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#468faf]"
              />
              <button
                type="submit"
                className="bg-[#468faf] text-white font-semibold py-2 rounded-md hover:bg-[#367d91] transition-colors duration-200"
              >
                Let's Go!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
