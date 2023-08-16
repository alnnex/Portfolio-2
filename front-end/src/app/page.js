"use client";

import AboutMe from "@/components/aboutMe/AboutMe";
import Projects from "@/components/aboutMe/Projects";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
  const handleClickHome = () => {
    const element = document.getElementById("landing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickProject = () => {
    const element = document.getElementById("project");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[url('/bg.svg')]  bg-cover bg-fixed bg-right-top bg-no-repeat">
      <nav
        className={`flex justify-between px-2 md:px-16 lg:px-32 py-4 backdrop-blur-sm max-w-[1535px] w-full fixed z-50`}
      >
        <div
          id="logo"
          className={`
    text-xl font-bold my-auto w-14 flex
  `}
        >
          {/* <span className="bg-accent mr-[3px]  py-1 px-[3px] text-white rounded-md">
            AQ
          </span>
          uiwag */}
          <Image alt="logo" width={100} height={100} src={"/logo.png"} />{" "}
          <text className="my-auto">AGQuwiag</text>
        </div>
        <div className="relative group/menu">
          <button className="md:hidden group-hover/menu:text-white transition-all">
            <GiHamburgerMenu size={34} />
          </button>
          <ul
            className={` gap-2 font-semibold hidden group-hover/menu:block md:group-hover/menu:flex  absolute bg-gray-100 md:bg-transparent -z-10 right-0 w-44 md:w-[22.9rem] md:flex`}
          >
            <li
              className={`my-auto py-2 px-3 relative group/item hover:text-white transition-all cursor-pointer`}
              onClick={handleClickHome}
            >
              <div className="absolute bg-accent transition-all w-1 h-full top-0 right-0 group-hover/item:w-full text-primary/0 -z-[1]">
                l
              </div>
              Home
            </li>
            <li
              className={`my-auto py-2 px-3 relative group/item hover:text-white transition-all cursor-pointer`}
              onClick={handleClickAbout}
            >
              <div className="absolute bg-accent transition-all w-1 h-full top-0 right-0 group-hover/item:w-full text-primary/0 -z-10">
                l
              </div>
              About Me
            </li>
            <li
              className={`my-auto py-2 px-3 relative group/item hover:text-white transition-all cursor-pointer`}
              onClick={handleClickProject}
            >
              <div className="absolute bg-accent transition-all w-1 h-full top-0 right-0 group-hover/item:w-full text-primary/0 -z-10">
                l
              </div>
              Projects
            </li>
            <li
              className={`my-auto py-2 px-3 relative group/item hover:text-white transition-all cursor-pointer`}
              onClick={handleClickContact}
            >
              <div className="absolute bg-accent transition-all w-1 h-full top-0 right-0 group-hover/item:w-full text-primary/0 -z-10">
                l
              </div>
              Contact
            </li>
          </ul>
        </div>
      </nav>
      <div className="backdrop-blur-2xl snap-y snap-mandatory">
        <div id="landing">
          <Landing />
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="project">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
