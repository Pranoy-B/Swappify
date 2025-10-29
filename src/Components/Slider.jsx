import React from "react";
// ✅ Correct imports for Swiper 11+
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// ✅ Import styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";


const Slider = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <img src="https://i.ibb.co.com/RKFF5qq/Guitar-lesson.jpg" alt="Slide 1" className="w-full md:h-[400px] rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/205VQP7b/Web-dev-lesson.jpg" alt="Slide 2" className="w-full md:h-[400px] rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/hxSgRx04/Cooking-Healthy.jpg" alt="Slide 3" className="w-full md:h-[400px] rounded-lg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
