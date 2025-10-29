import React, { useEffect } from "react";
import { NavLink } from "react-router";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillCard = ({ skill }) => {

  useEffect(() => {
        AOS.init();
      }, [])

  const { image, skillName, rating, price, skillId } = skill;
  return (
    <div data-aos="zoom-in" data-aos-duration="2000" className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
        <img src={image} alt={skillName} className="w-[350px] h-48 " />

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2 min-h-12">
            {skillName}
          </h3>

          <div className="flex items-center justify-between mb-4">
            <span className="text-yellow-500 font-medium">⭐ {rating}</span>
            <span className="text-gray-700 font-semibold">${price}</span>
          </div>

          <NavLink to={`/skill-details/${skillId}`} className="mt-auto w-full text-center bg-[#468faf] text-white py-2 rounded-md hover:bg-blue-700 transition">
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
