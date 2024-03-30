import React, { useState } from "react";
import Image from "next/image";
import AvatarAbout from "../../components/AvatarAbout";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUP from "react-countup";
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
      icon: <GraduationCap className="text-accent" size={20} />,
      text: "Masters",
    },
    {
      icon: <MailIcon className="text-accent" size={20} />,
      text: "ansilrahman777@gmail.com",
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
          role: "PYTHON FULL STACK DEVELOPER INTERN",
          years: "2023-2024",
        },
      ],
    },
  ];

  const skillData = [
    {
      title: "skills",
      icons: [
        <FaPython />,
        <FaHtml5 />,
        <FaCss3 />,
        <SiDjango />,
        <FaJs />,
        <FaReact />,
        <SiRedux />,
        <SiTailwindcss />,
        <SiFramer />,
        <FaFigma />,
        <SiPostgresql />,
        <SiMongodb />,
        <SiFirebase />,
        <SiAdobexd />,
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
        className="hidden xl:flex absolute -bottom-2 -left-[100px]"
      >
        <AvatarAbout />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[43px] relative"
          >
            Inspiring Innovation, Building{" "}
            <span className="text-accent">Futures</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" max-w-[500px] text-justify mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            <div className="relative">
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
            <div className="flex flex-1 xl:gap-x-6">
              <div
                className="relative felx-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0 "
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUP start={0} end={1.5} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-wp[100px]">
                  years of experience
                </div>
              </div>

              <div
                className="relative felx-1 after:w-[1px] after:h-full
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
                className="relative felx-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0 "
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUP start={0} end={24} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-wp[100px]">
                  Hours of support
                </div>
              </div>

              <div className="relative felx-1 ">
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
          className="flex flex-col w-full items-center xl:max-w-[48%] h-[480px]"
        >
          <Tabs defaultValue="personal" onChange={handleTabChange}>
            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
              <TabsTrigger className="w-[162px]" value="skills">
                Skills
              </TabsTrigger>

              <TabsTrigger className="w-[162px]" value="personal">
                Personal Info
              </TabsTrigger>

              <TabsTrigger className="w-[162px]" value="qualifications">
                Qualifications
              </TabsTrigger>
            </TabsList>
            <div className="text-lg mt-12 xl:mt-8">
              {/* Tab contents */}

              {/* Tab contents */}
              <TabsContent value="skills">
                <div className="text-center xl:text-left">
                  {/* skills */}
                  <div className="mb-16">
                    {/* skill list */}
                    <div className="grid grid-cols-6 gap-4">
                      {getData(skillData, "skills").icons.map((icon, index) => (
                        <div
                          className="w-5/6 text-center xl:text-left mx-auto xl:mx-0"
                          key={index}
                        >
                          <div className="text-3xl">{icon}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="personal">
                <div className="text-start xl:text-left">
                  <h2 className="text-base uppercase mb-7 xl:items-start items-center">
                    Motivated by the Desire to achieve Success
                  </h2>
                  {/* <p className="max-w-xl mx-auto xl:mx-0 ">
                    I specialize in crafting intuitive websites with
                    cutting-edge technology, delivering dynamic and engaging
                    user experiences.{" "}
                  </p> */}
                  {/* icons */}
                  <div className="grid xl:grid-cols-1 gap-4 mb-12">
                    {infoData.map((item, index) => (
                      <div
                        className="flex flex-row items-start gap-x-4 mx-auto xl:mx-0"
                        key={index}
                      >
                        <div>{item.icon}</div>
                        <div>{item.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="qualifications">
                <div className="flex justify-center items-center h-full">
                  {/* experience & education */}
                  <div className="grid md:grid-cols-2  gap-y-8">
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
                          (item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div className="flex gap-x-8 group " key={index}>
                                {" "}
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-accent absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-white/60 text-lg leading-none mb-2">
                                    {company}
                                  </div>
                                  <div className="text-base text-white/60 leading-none text-muted-foreground mb-4">
                                    {role}
                                  </div>
                                  <div className="text-sm text-white/60 font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>

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
                          (item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className="flex gap-x-8 group " key={index}>
                                {" "}
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-accent absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-white/60 text-lg leading-none mb-2">
                                    {university}
                                  </div>
                                  <div className="text-base text-white/60 leading-none text-muted-foreground mb-4">
                                    {qualification}
                                  </div>
                                  <div className="text-sm text-white/60 font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
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
