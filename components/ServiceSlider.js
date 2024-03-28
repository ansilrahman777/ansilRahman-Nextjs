// icons
import {RxArrowTopRight } from "react-icons/rx";

import {
  RiHtml5Line,
  RiCss3Line,
  RiBootstrapLine,
  RiReactjsLine,
} from "react-icons/ri";
import { TbBrandPython } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";

// data
const serviceData = [
  {
    icon: <TbBrandPython />,
    title: "PYTHON",
    description:
      "Versatile backend solutions, data analysis, and automation expertise offered.",
  },
  {
    icon: <RiReactjsLine />,
    title: "REACT",
    description:
      "Empowering dynamic interfaces through efficient React component architecture",
  },
  {
    icon: <TbBrandTailwind />,
    title: "TAILWIND",
    description:
      "Efficiently styled and responsive interfaces crafted effortlessly with Tailwind CSS.",
  },
  {
    icon: <RiHtml5Line />,
    title: "HTML",
    description:
      "Engaging web interfaces with semantic HTML for optimal compatibility.",
  },
  {
    icon: <RiCss3Line />,
    title: "CSS",
    description:
      "Flexibility and creativity craft stunning, dynamic layouts effortlessly using CSS.",
  },
  {
    icon: <RiBootstrapLine />,
    title: "BOOTSTRAP",
    description:
      "Rapid responsive website development ensured with Bootstrap framework.",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 
              sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] 
              transition-all duration-300"
            >
              <div className="text-4xl text-accent mb-4">{item.icon}</div>

              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
