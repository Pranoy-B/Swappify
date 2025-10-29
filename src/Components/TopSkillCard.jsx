import React from 'react';

const TopSkillCard = ({topSkills}) => {
    const filteredTop = topSkills.filter(skill=>skill.rating>= 4.8)
    return (
        <section className="bg-gradient-to-b from-[#839ffd] via-white to-[#839ffd] py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredTop.length > 0 ? (
          filteredTop.map(skill => (
            <h2>skill.rating</h2>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No top-rated skills found.
          </p>
        )}
      </div>
    </section>
    );
};

export default TopSkillCard;