import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-ful h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-35 xl:text-left h-full container mx-auto">
          <h1 className="h1">
            Transforming Ideas <br /> Into
            <span className="text-accent">Digital Reality</span>
          </h1>

          <motion.p
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 xl:mb-6"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Hi there! I'm ANSIL RAHMAN, a python developer, designer and, person
            living in Kochi, Kerala.
          </motion.p>

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div
          className="bg-non xl:bg-explosion xl:bg-cover xl:bg-right
              xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
        ></div>

        <div className="">
          <ParticlesContainer />
        </div>

        <motion.div
          className="w-full h-full max-w-[527px] max-h-[478px] absolute -bottom-32
          lg:bottom-0 lg:right-[8%]"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
