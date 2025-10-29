import React from "react";
import { FaUserPlus, FaSearch, FaHandshake, FaStar } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaUserPlus className="text-4xl text-[#FFD700]" />,
    title: "Sign Up & Create a Profile",
    desc: "Join the community, list your skills, or find what you want to learn.",
  },
  {
    id: 2,
    icon: <FaSearch className="text-4xl text-[#FFD700]" />,
    title: "Explore Skills Nearby",
    desc: "Browse local skill listings or filter by category and location.",
  },
  {
    id: 3,
    icon: <FaHandshake className="text-4xl text-[#FFD700]" />,
    title: "Connect & Learn",
    desc: "Message skill providers, schedule sessions, and start learning.",
  },
  {
    id: 4,
    icon: <FaStar className="text-4xl text-[#FFD700]" />,
    title: "Rate & Review",
    desc: "Share your experience to build trust and improve the community.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-b from-white via-[#f9faff] to-[#839ffd]/10 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#468faf] mb-10">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 flex flex-col items-center transition-transform transform hover:-translate-y-2"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
