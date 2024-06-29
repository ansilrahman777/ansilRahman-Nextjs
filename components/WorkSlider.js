// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "VOXY",
          path: "/voxy.png",
          git: "https://github.com/ansilrahman777/voxy",
          live: "https://voxy.ansilrahman777.online",
        },
        {
          title: "BACKPACKERZ",
          path: "/backpackerz.png",
          git: "https://github.com/ansilrahman777/Backpackerz",
          live: "https://backpackerzz.ansilrahman777.online",
        },        
        {
          title: "TODO",
          path: "/todo.png",
          git: "https://github.com/ansilrahman777/Todo",
        },
        {
          title: "PORFOLIO",
          path: "/ansil.png",
          git: "https://github.com/ansilrahman777/ansilRahman",
          live: "https://ansilrahman777.github.io/ansilRahman/",
        },
      ],
    },
    {
      images: [
       {
          title: "ADIDAS CLONE",
          path: "/adidas.png",
          git: "https://github.com/ansilrahman777/Adidas",
        },
        {
          title: "NETFLIX",
          path: "/thumb4.jpg",
          git: "https://github.com/ansilrahman777/Netflix",
        },
        {
          title: "OLX",
          path: "/thumb3.jpg",
          git: "https://github.com/ansilrahman777/olxClone",
        },
        {
          title: "BENTELY CLONE",
          path: "/bentely.png",
          git: "https://github.com/ansilrahman777/Bentely",
        },
      ],
    },
  ],
};

import Image from "next/image";
import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";
import { TbBrandGithub, TbLivePhoto } from "react-icons/tb";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group h-full w-full"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden h-full w-full">
                      <Image src={image.path} alt="" width={500} height={300} />
                      <div
                        className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                    group-hover:opacity-80 transition-all duration-700"
                      ></div>
                      <div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100
                    transition-all duration-300"
                      >
                        <div className="text-center">
                          <div className="flex flex-col items-center sm:flex-row sm:items-center gap-x-2 text-[11px] sm:text-[13px] tracking-[0.1em] sm:tracking-[0.2em] mb-2">
                            <TbBrandGithub className="text-[20px] sm:text-[24px]" />
                            <Link
                              href={image.git}
                              className="transition-all duration-300 delay-150"
                            >
                              {image.title}
                            </Link>
                            <div className="text-lg sm:text-xl transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>

                          {image.live && (
                            <div className="flex flex-col items-center sm:flex-row sm:items-center gap-x-2 text-[11px] sm:text-[13px] tracking-[0.1em] sm:tracking-[0.2em]">
                              <TbLivePhoto className="text-[20px] sm:text-[24px]" />
                              <Link
                                href={image.live}
                                className="transition-all duration-300 delay-100"
                              >
                                Live
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
