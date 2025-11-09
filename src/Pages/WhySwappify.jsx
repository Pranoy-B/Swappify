import React from "react";
import { FaUsers, FaLightbulb, FaHandshake, FaGlobeAmericas } from "react-icons/fa";
import {useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhySwappify = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="text-gray-800">
     
      <section
        className="bg-gradient-to-r from-[#468faf] to-[#6fb1c8] text-white py-16 text-center"
        data-aos="fade-down"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Swappify?</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Empowering people to share, learn, and grow through local skill exchange.
        </p>
        <button className="btn bg-white text-[#468faf] mt-6 border-none hover:bg-gray-100">
          Get Started
        </button>
      </section>

      
      <section className="py-16 px-6 md:px-16 bg-white" data-aos="fade-up">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://i.ibb.co.com/CDkGX4C/5454.jpg"
            alt="Community Learning"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-semibold text-[#468faf] mb-4">
              Building a Community of Learners
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Swappify was created to make learning accessible and local. Whether you’re 
              teaching guitar or learning yoga, Swappify connects you with people who share 
              your passions — right in your neighborhood.
            </p>
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-[#f8fafc]" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-[#468faf] mb-10">
          What Makes Swappify Special?
        </h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {[
            { icon: <FaUsers />, title: "Local Community", desc: "Connect with nearby learners and teachers." },
            { icon: <FaLightbulb />, title: "Skill Growth", desc: "Learn new things and share your expertise." },
            { icon: <FaHandshake />, title: "Fair Exchange", desc: "Affordable or skill-for-skill trades." },
            { icon: <FaGlobeAmericas />, title: "Global Vision", desc: "Expanding community-driven learning worldwide." },
          ].map((b, i) => (
            <div key={i} className="card bg-white shadow-md hover:shadow-lg transition p-6 text-center">
              <div className="text-4xl text-[#468faf] mb-3 mx-auto">{b.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="bg-[#256885] text-white text-center py-16" data-aos="zoom-in">
        <h2 className="text-3xl font-bold mb-4">Start Your Skill Journey Today</h2>
        <p className="max-w-xl mx-auto mb-6">
          Join Swappify to learn, teach, and connect with your community through shared skills.
        </p>
        <button className="btn bg-white text-[#468faf] border-none hover:bg-gray-100">
          Explore Skills
        </button>
      </section>
    </div>
  );
};

export default WhySwappify;
