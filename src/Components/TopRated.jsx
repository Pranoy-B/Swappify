
import SkillCard from './SkillCard';
import TopSkillCard from './TopSkillCard';

const topRated = [
    {
    "skillId": 8,
    "skillName": "Cooking Healthy Meals",
    "providerName": "Carlos Mendez",
    "providerEmail": "carlos@skillswap.com",
    "price": 16,
    "rating": 4.8,
    "slotsAvailable": 4,
    "description": "Learn to cook quick, healthy, and affordable meals at home.",
    "image": "https://i.ibb.co.com/hxSgRx04/Cooking-Healthy.jpg",
    "category": "Cooking"
  },
  {
    "skillId": 3,
    "skillName": "Yoga for Beginners",
    "providerName": "Priya Das",
    "providerEmail": "priya@skillswap.com",
    "price": 15,
    "rating": 4.9,
    "slotsAvailable": 4,
    "description": "Gentle yoga sessions focused on posture, breathing, and flexibility.",
    "image": "https://i.ibb.co.com/9HhxkPk5/Yoga-lesson.jpg",
    "category": "Fitness"
  },
  {
    "skillId": 1,
    "skillName": "Beginner Guitar Lessons",
    "providerName": "Alex Martin",
    "providerEmail": "alex@skillswap.com",
    "price": 20,
    "rating": 4.8,
    "slotsAvailable": 3,
    "description": "Acoustic guitar classes for complete beginners.",
    "image": "https://i.ibb.co.com/RKFF5qq/Guitar-lesson.jpg",
    "category": "Music"
  }
]

const TopRated = () => {
    
    

    return (
        <div className='bg-gradient-to-b from-[#839ffd] via-white to-[#839ffd]  flex flex-col justify-center items-center mt-10'>
            <h2 className='text-3xl font-semibold text-[#ffffff] pt-10'>Top Rated Providers</h2>
            <div className="grid flex flex-col-1 md:flex gap-6">
                {
                    topRated.map(skill=><SkillCard key={skill.skillId} skill={skill}></SkillCard>)
                }
            </div>
        </div>
    );
};

export default TopRated;