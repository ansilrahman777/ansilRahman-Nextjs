import Image from "next/image";

import Link from "next/link";

import { AiOutlineDownload  } from "react-icons/ai";
const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 relative">
      <a
        href="/Ansil_Rahman_K.pdf"
        download="Ansil_Rahman_K.pdf"
        className="w-[180px] h-[180px] bg-circleStar bg-cover bg-center bg-no-repeat group flex justify-center items-center"
      >
        <Image
          src="/rounded-text.png"
          alt=""
          width={140}
          height={140}
          className="animate-spin-slow w-full h-full max-w-[148px] max-h-[148px] absolute z-10"
        />
        <AiOutlineDownload  className="text-4xl group-hover:translate-x-2 transition-all duration-300 z-20 group-hover:text-accent" />
      </a>
    </div>
  );
};

export default ProjectsBtn;
