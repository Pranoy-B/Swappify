import React from 'react';
import Slider from '../Components/Slider';
import PopularSkills from './PopularSkills';
import SkillCard from '../Components/SkillCard';
import TopRated from '../Components/TopRated';
import HowItWorks from '../Components/HowItWorks';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularSkills></PopularSkills>
            <TopRated></TopRated>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;