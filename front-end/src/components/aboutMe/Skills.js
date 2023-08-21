import React, { useRef } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import {
  SiChakraui,
  SiCsharp,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
import { useInView } from "framer-motion";

const Skills = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Skills and Capabilities
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-slate-900">
              Skills and Capabilities I can offer you and your company
              <br /> (Ratings are self-observered).
            </p>
          </div>
          <div className="flex flex-wrap -m-4 ">
            {skills.map((skill, index) => {
              return (
                <React.Fragment key={index}>
                  <Section count={index}>
                    <div className="p-6 rounded-lg bg-gray-200/40 border border-secondary/40 shadow-lg group relative overflow-hidden">
                      {/* <div className="h-full bg-gradient-to-tr from-white/0 via-white/40 animate-pulse back w-0 transition-all group-hover:w-full to-white/0 absolute inset-0"></div> */}
                      <div className="flex">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full pt-1 bg-indigo-100 text-primary mb-4 pb-[2.3px]">
                          {skill.icon}
                        </div>
                        <h2 className="text-lg mt-2 ml-4 text-gray-900 font-medium title-font mb-2">
                          {skill.name}
                        </h2>
                      </div>

                      <div className="leading-relaxed text-base">
                        <div>
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Rate
                          </div>
                          <div className="flex items-center mb-3 gap-5">
                            {/* <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                          <div
                            className="bg-darkAccent h-2.5 rounded"
                            style={{ width: skill.rate }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {skill.rate}
                        </span> */}
                            {Array.from(
                              Array(Math.floor(skill.star)),
                              (e, i) => {
                                return (
                                  <svg
                                    key={i}
                                    className="w-8 h-8 text-yellow-500 group-hover:animate-pulse group-hover:scale-110 transition-all"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                );
                              }
                            )}
                            {Array.from(
                              Array(5 - Math.floor(skill.star)),
                              (e, i) => {
                                return (
                                  <svg
                                    key={i}
                                    className="w-8 h-8 text-gray-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                );
                              }
                            )}
                            {/* <div>{skill.star}</div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Section>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

const Section = ({ count, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        // transform: isInView ? "none" : "translateX(-200px)",
        // opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
          count * 0.2
        }s`,
      }}
      className={`xl:w-1/4 w-full md:w-1/3 p-4 text-black ${
        isInView ? "none opacity-100" : "translate-x-[200px] opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

const skills = [
  { name: "HTML", icon: <AiFillHtml5 size={30} />, rate: "88%", star: 5 },
  { name: "CSS", icon: <BiLogoCss3 size={30} />, rate: "20%", star: 3 },
  {
    name: "Javascript",
    icon: <BiLogoJavascript size={30} />,
    rate: "88%",
    star: 3,
  },
  { name: "React JS", icon: <FaReact size={30} />, rate: "88%", star: 4 },
  { name: "Express JS", icon: <SiExpress size={30} />, rate: "88%", star: 3 },
  { name: "Node JS", icon: <SiNodedotjs size={30} />, rate: "88%", star: 3 },
  { name: "MongoDB", icon: <SiMongodb size={30} />, rate: "88%", star: 3 },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={30} />,
    rate: "88%",
    star: 5,
  },
  { name: "Chakra UI", icon: <SiChakraui size={30} />, rate: "88%", star: 5 },
  { name: "Next JS", icon: <SiNextdotjs size={30} />, rate: "88%", star: 4 },
  { name: "C#", icon: <SiCsharp size={30} />, rate: "88%", star: 3 },
];
