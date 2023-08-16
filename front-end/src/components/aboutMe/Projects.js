import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
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
          <div className="flex flex-wrap -m-4">
            {projects.map((project, index) => (
              <div key={index} className="xl:w-1/3 md:w-1/2 p-4 ">
                <div className="bg-gray-100/50 p-6 md:h-[29rem] h-full overflow-hidden rounded-lg group shadow-2xl">
                  <Image
                    width={600}
                    height={600}
                    className="md:h-[22rem] h-40 rounded w-full border shadow-xl object-cover object-center mb-6 group-hover:h-40 transition-all"
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
                    <div className="bg-accent text-white px-2 py-3 w-full mt-8 text-center">
                      View Project
                    </div>
                  </a>
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
  },
  {
    name: "CAS Department Portal",
    url: "https://cas-portal.vercel.app/",
    type: "Next JS",
    pic: "/portal.PNG",
    desc: "A portal website with content manager for the admin users. Uses NextJS, ChakraUI, ExpressJS, and MongoDB",
  },
  {
    name: "CET Department Attendance System",
    url: "https://drive.google.com/file/d/1bqywfd2638Q1h4KH2as4XbXSiVcdeO9J/view?usp=sharing",
    type: "C#",
    pic: "/attendance.PNG",
    desc: "An attendance system that automatically calculates total fines for every students. Uses C# and MsAccess.",
  },
  {
    name: "UB-Plaza",
    url: "https://ub-plaza-lledu1eg0-alnnex.vercel.app",
    type: "React JS",
    pic: "/ubplaza.png",
    desc: "A partially working front-end of an online store for school merchandise. Uses NextJS and ChakraUI.",
  },
];
