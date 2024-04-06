import React, { useState } from "react";
import Image from "next/image";
import AvatarAbout from "../../components/AvatarAbout";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUP from "react-countup";
import { PiShapesFill } from "react-icons/pi";
import { BsPersonFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
// icons
import {
  FaHtml5,
  FaCss3,
  FaPython,
  FaJs,
  FaReact,
  FaFigma,
} from "react-icons/fa";

import {
  SiFramer,
  SiAdobexd,
  SiDjango,
  SiTailwindcss,
  SiPostgresql,
  SiFirebase,
  SiMongodb,
  SiRedux,
} from "react-icons/si";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  Phone,
} from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/Tabs";

const About = () => {
  const [tab, setTab] = useState("skills");

  // Define the function to handle tab change
  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  const infoData = [
    {
      icon: <User2 className="text-accent" size={20} />,
      text: "Ansil Rahman",
    },
    {
      icon: <PhoneCall className="text-accent" size={20} />,
      text: "+91 8592959403",
    },
    {
      icon: <Calendar className="text-accent" size={20} />,
      text: "Born on 05 Oct, 1999",
    },
    {
      icon: <MailIcon className="text-accent" size={20} />,
      text: "ansilrahman777@gmail.com",
    },
    {
      icon: <GraduationCap className="text-accent" size={20} />,
      text: "Masters",
    },
    {
      icon: <HomeIcon className="text-accent" size={20} />,
      text: "Kochi,Kerala",
    },
  ];

  const qualificationData = [
    {
      title: "education",
      data: [
        {
          university: "MG University",
          qualification: "MSc PHYSICS",
          years: "2020-2022",
        },
        {
          university: "Calicut University",
          qualification: "BSc PHYSICS",
          years: "2017-2020",
        },
        {
          university: "Higher Seconday ",
          qualification: "Bio Science",
          years: "2015-2017",
        },
      ],
    },
    {
      title: "experience",
      data: [
        {
          company: "Brototype",
          role: "PYTHON DEVELOPER INTERN",
          years: "2023-2024",
        },
      ],
    },
  ];

  const skillData = [
    {
      title: "skills",
      icons: [
        <FaPython key="python" />,
        <FaHtml5 key="html" />,
        <FaCss3 key="css" />,
        <SiDjango key="django" />,
        <FaJs key="javascript" />,
        <FaReact key="react" />,
        <SiRedux key="redux" />,
        <SiTailwindcss key="tailwind" />,
        <SiFramer key="framer" />,
        <FaFigma key="figma" />,
        <SiPostgresql key="postgresql" />,
        <SiMongodb key="mongodb" />,
        <SiFirebase key="firebase" />,
        <SiAdobexd key="adobexd" />,
      ],
    },
  ];
  const getData = (data, key) => {
    return (
      data.find((item) => item.title.toLowerCase() === key.toLowerCase()) || {}
    );
  };

  return (
    <div className="h-full  py-32 text-center xl:text-left">
      <Circles />
      <motion.div 
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex fixed -bottom-2 -left-[100px] "
      >
        <AvatarAbout />
      </motion.div>
      <div className="p-5 md:container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[20px]  xl:text-[43px] relative"
          >
            Inspiring Innovation, Building{" "}
            <span className="text-accent">Futures</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-justify mb-6 xl:mb-12"
          >
            <div className="relative max-w-[520px]">
              {" "}
              I am driven by the belief that technology should be accessible to
              all, and I actively seek opportunities to collaborate, share
              knowledge, and mentor aspiring developers.
            </div>
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex  flex-1 xl:gap-x-6">
              <div
                className="relative p-3 xl:p-0  felx-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0 "
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUP start={0} end={1.5} duration={5} />+
                </div>
                <div className="text-xs  uppercase tracking-[1px] leading-[1.4] max-wp[100px]">
                  years of experience
                </div>
              </div>

              <div
                className="relative p-3 xl:p-0  felx-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0 "
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUP start={0} end={7} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-wp[100px]">
                  Happy Client
                </div>
              </div>

              <div
                className="relative p-3 xl:p-0  felx-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0 "
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUP start={0} end={24} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-wp[100px]">
                  Hours of support
                </div>
              </div>

              <div className="relative p-3 xl:p-0  felx-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUP start={0} end={8} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-wp[100px]">
                  Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col xl:mt-28 items-center xl:max-w-[48%] h-[480px] relative"
        >
          <Tabs defaultValue="skills" onChange={handleTabChange}>
            <TabsList className="w-full grid grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
              {/* Conditionally render text or icon based on screen size */}
              <TabsTrigger className="w-full hidden sm:inline-block" value="skills">
                Skills & Tools
              </TabsTrigger>
              <TabsTrigger
                className="w-full hidden sm:inline-block"
                value="personal"
              >
                Personal Info
              </TabsTrigger>
              <TabsTrigger
                className="w-full hidden sm:inline-block"
                value="qualifications"
              >
                Qualifications
              </TabsTrigger>

              {/* Render icons on screens smaller than md */}
              <TabsTrigger className="w-full sm:hidden" value="skills">
                <PiShapesFill /> {/* Replace with appropriate icon component */}
              </TabsTrigger>
              <TabsTrigger className="w-full sm:hidden" value="personal">
                <BsPersonFill /> {/* Replace with appropriate icon component */}
              </TabsTrigger>
              <TabsTrigger
                className="w-full sm:hidden"
                value="qualifications"
              >
                <FaGraduationCap />{" "}
                {/* Replace with appropriate icon component */}
              </TabsTrigger>
            </TabsList>
            <div className="text-lg mt-12 xl:mt-8 mb-8">
              {/* Tab contents */}
              <TabsContent value="skills">
                <div className="text-center xl:text-left">
                  {/* skills */}
                    {/* skill list */}
                    <div className="grid grid-cols-6 gap-4 mb-24 xl:mb-0">
                      {getData(skillData, "skills").icons.map((icon) => (
                        <div
                          className="w-5/6 text-center xl:text-left mx-auto xl:mx-0"
                          key={icon.key} // Unique key
                        >
                          <div className="text-3xl">{icon}</div>
                        </div>
                      ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="personal">
                <div className="text-start xl:text-left">
                  <h2 className="hidden xl:flex text-base uppercase mb-7 xl:items-start items-center">
                    Motivated by the Desire to achieve Success
                  </h2>
                  {/* <p className="max-w-xl mx-auto xl:mx-0 ">
                    I specialize in crafting intuitive websites with
                    cutting-edge technology, delivering dynamic and engaging
                    user experiences.{" "}
                  </p> */}
                  {/* icons */}
                  <div className="grid sm:grid-cols-2  gap-4 mb-24 md:mb-0">
                    {infoData.map((item) => (
                      <div
                        className="flex flex-row items-start  gap-x-4 mx-auto xl:mx-0"
                        key={item.text} // Unique key
                      >
                        <div className="flex gap-2">{item.icon}  {item.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="qualifications">
                <div className="flex justify-between items-center h-full">
                  {/* experience & education */}
                  <div className="grid md:grid-cols-2 gap-4 mb-24 xl:mb-0">

                    {/* education */}
                    <div className="flex flex-col gap-y-6 xl:items-start items-center">
                      <div className="flex gap-x-4 ">
                        {/* <GraduationCap size={28} /> */}
                        <h4 className="text-base uppercase">
                          {getData(qualificationData, "education").title}
                        </h4>
                      </div>
                      {/* list */}
                      <div className="flex flex-col gap-y-8 ">
                        {getData(qualificationData, "education").data.map(
                          (item) => (
                            <div
                              className="flex gap-x-8 group"
                              key={item.university}
                            >
                              {" "}
                              {/* Unique key */}
                              <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                <div className="w-[11px] h-[11px] rounded-full bg-accent absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                              </div>
                              <div>
                                <div className="font-semibold text-white/60 text-lg leading-none mb-2">
                                  {item.university}
                                </div>
                                <div className="text-base text-white/60 leading-none text-muted-foreground mb-4">
                                  {item.qualification}
                                </div>
                                <div className="text-sm text-white/60 font-medium">
                                  {item.years}
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    
                    {/* experience */}
                    <div className="flex flex-col gap-y-6 xl:items-start items-center">
                      <div className="flex gap-x-4  ">
                        {/* <GraduationCap size={28} /> */}
                        <h4 className="text-base uppercase">
                          {getData(qualificationData, "experience").title}
                        </h4>
                      </div>
                      {/* list */}
                      <div className="flex flex-col gap-y-8 ">
                        {getData(qualificationData, "experience").data.map(
                          (item) => (
                            <div
                              className="flex gap-x-8 group"
                              key={item.company}
                            >
                              {" "}
                              {/* Unique key */}
                              <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                <div className="w-[11px] h-[11px] rounded-full bg-accent absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                              </div>
                              <div>
                                <div className="font-semibold text-white/60 text-lg leading-none mb-2">
                                  {item.company}
                                </div>
                                <div className="text-base text-white/60 leading-none text-muted-foreground mb-4">
                                  {item.role}
                                </div>
                                <div className="text-sm text-white/60 font-medium">
                                  {item.years}
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
