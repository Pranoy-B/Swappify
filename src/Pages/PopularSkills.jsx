import React, { use } from 'react';
import SkillCard from '../Components/SkillCard';


const dataPromise = fetch('/data.json').then((res)=>res.json())

const PopularSkills = () => {
    const skillData = use(dataPromise)
    return (
        <div className='bg-gradient-to-b from-[#839ffd] via-white to-[#839ffd]  flex flex-col justify-center items-center mt-10'>
            <h3 className='text-3xl font-semibold text-white pt-10'>Popular Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    skillData.map(skill=><SkillCard key={skill.skillId} skill={skill}></SkillCard>)
                }
            </div>
        </div>
    );
};

export default PopularSkills;