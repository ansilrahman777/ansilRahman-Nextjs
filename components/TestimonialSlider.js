// testimonial data
const testimonialData = [
  {
    image: "/testimonials-1.AVIF",
    name: "Mahathma Gandhi",
    position: "Father of nation",
    message:"You may never know what results come of your actions, but if you do nothing, there will be no results."
  },
  {
    image: "/testimonials-2.AVIF",
    name: "Albert Einstein",
    position: "Physicist",
    message:"A person who never made a mistake never tried anything new."
  },
  {
    image: "/testimonials-3.AVIF",
    name: "APJ ABDUL KALAM",
    position: "Scientist",
    message:"To succeed in your mission, you must have single-minded devotion to your goal"
  },
  {
    image: "/testimonials-4.AVIF",
    name: "Werner Heisenberg",
    position: "Physicist",
    message:"An expert is someone who knows some of the worst mistakes that can be made in his subject and how to avoid them."
  },
  {
    image: "/testimonials-5.AVIF",
    name: "Lionel Messi",
    position: "Footballer",
    message:"It takes sacrifice, dedication, and hard work. It's about training your mind as much as your body."
  },
];

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";
import Testimonials from "../pages/testimonials";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              <div
                className="w-full max-w-[300px] flex flex-col xl:justify-center
                items-center relative mx-auto xl:mx-0"
              >
                <div className="flex flex-col justify-center text-center">
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} alt="" width={100} height={100} />
                  </div>

                  <div className="text-lg">{person.name}</div>

                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>

              <div
                className=" flex-1 flex flex-col justify-center
                before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0
                xl:before:h-[200px] relative xl:pl-20"
              >
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>

                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
