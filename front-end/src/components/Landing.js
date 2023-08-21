import Image from "next/image";
import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiOutlineArrowDown,
  AiOutlineDownload,
} from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div
      className="
    md:flex-row-reverse md:px-16
    lg:px-32
    h-[100vh] pt-16 md:pt-24 flex flex-col"
    >
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.8 }}
        className="md:my-auto md:w-1/2"
      >
        <Image
          className="w-92 md:w-full mx-auto"
          width={500}
          height={500}
          src="/picture.png"
          alt="self-portrait"
          priority
        />
      </motion.div>
      <div
        className="
    flex flex-col gap-4 text-slate-800 text-center
    md:my-auto md:w-1/2 md:text-start
  "
      >
        <h1
          className="
      text-3xl font-bold
      md:text-5xl md:tracking-tight
      lg:text-6xl
      "
        >
          Hi! I am{" "}
          <span
            className="
      bg-gradient-to-r text-transparent bg-clip-text from-primary to-accent
     
      "
          >
            Alnnex Quiwag
          </span>
          <span className="text-accent animate-pulse">.</span>
          <span className="text-accent animate-pulse delay-[2000ms]">.</span>
          <span className="text-accent animate-pulse delay-[4000ms]">.</span>
        </h1>
        <p
          className="
      text-lg
      md:text-2xl md:font-medium
      lg:text-3xl
    "
        >
          A Full-stack Web and Software Developer.
        </p>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 1,
            delay: 0.6,
          }}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1np2a_qtHlwQuJuJo2feKkW4NBarOoKeP/view?usp=sharing"
          >
            <button
              type="button"
              className="md:mt-16 md:justify-normal px-10 py-3 flex  mx-auto md:mx-0
            lg:mt-16 focus:outline-none text-white bg-accent hover:scale-110 transition-all focus:ring-4 focus:ring-secondary font-medium text-lg tracking-widest rounded-lg mb-2 "
            >
              CV/Resume
              <span className="my-auto ml-3">
                <AiOutlineDownload size={24} />
              </span>
            </button>
          </a>
        </motion.div>

        {/* <div
      className="
      flex gap-2 text-lg border w-fit mx-auto py-1 px-2 border-slate-400/50 rounded-sm shadow-lg animate-pulse cursor-pointer hover:scale-110 transition-all
      md:mt-32
    "
    >
      <div>Read More</div>
      <div className="my-auto">
        <AiOutlineArrowDown />
      </div>
    </div> */}
      </div>
    </div>
  );
};

export default Landing;
