"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

import { useInView } from "framer-motion";

const Projects = () => {
  const titleRef = useRef(null);
  const projectsRef = useRef(null);
  const titleIsInView = useInView(titleRef, { once: true });
  const projectsIsInView = useInView(projectsRef, { once: true });

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div
            ref={titleRef}
            className={`delay-400 duration-500 transition-all flex flex-wrap w-full mb-20 ${
              titleIsInView ? "opacity-100" : "translate-x-[200px] opacity-0 "
            }`}
          >
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Projects
              </h1>
              <div className="h-1 w-20 bg-primary rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-slate-900">
              All projects displayed is made or contributed by me. This projects
              consists of college thesis, hobbies, and work projects during my
              entire coding career.
            </p>
          </div>
          <div
            ref={projectsRef}
            className={`delay-400 duration-500 transition-all flex flex-wrap -m-4 ${
              projectsIsInView
                ? "opacity-100"
                : "translate-y-[200px] opacity-0 "
            }`}
          >
            {projects.map((project, index) => (
              <div key={index} className="xl:w-1/3 md:w-1/2 p-4 ">
                <div className="bg-gray-100/50 p-6 md:h-[512px] h-full overflow-hidden rounded-lg group shadow-2xl">
                  <Image
                    width={600}
                    height={600}
                    className="md:h-[400px] h-40 rounded w-full border shadow-xl object-cover object-center duration-500 mb-6 group-hover:h-40 transition-all"
                    src={project.pic}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-primary text-xs font-medium title-font">
                    {project.type}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4 h-9 ">
                    {project.name}
                  </h2>
                  <p className="leading-relaxed text-base">{project.desc}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`bg-accent text-white px-2 py-3 w-full text-center ${
                        !project.gitRepoFront & !project.gitRepoBack
                          ? "mt-20"
                          : "mt-7"
                      }`}
                    >
                      View Project
                    </div>
                  </a>{" "}
                  <div className="flex w-full gap-3">
                    <p
                      className={`${
                        !project.gitRepoBack & !project.gitRepoFront && "hidden"
                      } my-auto`}
                    >
                      Source Code:
                    </p>
                    <a
                      href={project.gitRepoFront}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full ${!project.gitRepoFront && "hidden"}`}
                    >
                      <div
                        className={`border-accent border text-accent  px-2 py-3  mt-2 text-center `}
                      >
                        Front-End
                      </div>
                    </a>
                    <a
                      href={project.gitRepoBack}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full ${!project.gitRepoBack && "hidden"}`}
                    >
                      <div className="border-accent border text-accent px-2 py-3 mt-2 text-center">
                        Back-End
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

const projects = [
  {
    name: "eKonsulta",
    url: "https://front-end-pi-sepia.vercel.app/",
    type: "React JS",
    pic: "/ekonsulta.png",
    desc: "A fully working chatting platform for consultation which uses ReactJS, ChakraUI, ExpressJS, and MongoDB.",
    gitRepoFront: "https://github.com/alnnex/front-end",
    gitRepoBack: "https://github.com/alnnex/backend_ekonsulta",
  },
  {
    name: "CAS Department Portal",
    url: "https://cas-portal.vercel.app/",
    type: "Next JS",
    pic: "/portal.PNG",
    desc: "A portal website with content manager for the admin users. Uses NextJS, ChakraUI, ExpressJS, and MongoDB",
    gitRepoFront: "https://github.com/alnnex/portalWebsite",
    gitRepoBack: "https://github.com/alnnex/back",
  },
  {
    name: "CET Department Attendance System",
    url: "https://drive.google.com/file/d/1bqywfd2638Q1h4KH2as4XbXSiVcdeO9J/view?usp=sharing",
    type: "C#",
    pic: "/attendance.PNG",
    desc: "An attendance system that automatically calculates total fines for every students. Uses C# and MsAccess.",
    gitRepoFront: "",
    gitRepoBack: "",
  },
  {
    name: "UB-Plaza",
    url: "https://ub-plaza-lledu1eg0-alnnex.vercel.app",
    type: "React JS",
    pic: "/ubplaza.png",
    desc: "A partially working front-end of an online store for school merchandise. Uses NextJS and ChakraUI.",
    gitRepoFront: "https://github.com/alnnex/front-end",
    gitRepoBack: "",
  },
];
