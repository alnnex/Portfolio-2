import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BiCopy, BiLogoGmail } from "react-icons/bi";
import { FaCopy } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Contact = () => {
  return (
    <div className="">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 pt-24 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Contact me through this websites or email me through the address
              below.
            </p>
          </div>

          <div
            className="
      flex gap-4 mx-auto justify-center py-6 text-slate-900
      md:gap-6 
       lg:gap-10 
    "
          >
            {icons.map((icon, index) => (
              <a
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className={`text-4xl md:text-5xl lg:text-6xl ${icon.color} transition-all`}
              >
                {icon.icon}
              </a>
            ))}
          </div>
          <div
            className="w-fit flex mx-auto border-b-2 hover:border-slate-900 group/email border-transparent cursor-pointer relative"
            onClick={() => {
              navigator.clipboard.writeText("alnnexquiwagtrabs@gmail.com");
            }}
          >
            <div className="absolute -top-6 left-0 hidden group-hover/email:inline-block">
              Click to copy to clipboard.
            </div>
            <text className="text-slate-900 text-xl">
              alnnexquiwagtrabs@gmail.com
            </text>

            <span className="ml-2 my-auto">
              <BiCopy size={22} />
            </span>
          </div>
          <div className="justify-center text-sm flex w-full pt-6 pb-2">
            <text>Created through </text>
            <span className="ml-3">
              <SiNextdotjs size={20} />
            </span>
            <text>NextJS and</text>
            <span className="ml-3">
              <SiTailwindcss size={20} />
            </span>
            <text>TailwindCSS </text>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
const icons = [
  {
    icon: <AiFillFacebook />,
    link: "https://www.facebook.com/alnek.mamen",
    color: "hover:text-[#1877F2]",
  },
  {
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/alnnex-quiwag-116b61288/",
    color: "hover:text-[#0077B5]",
  },
  {
    icon: <AiOutlineWhatsApp />,
    link: "https://api.whatsapp.com/send?phone=639615771603",
    color: "hover:text-[#25D366]",
  },
  // { icon: <BiLogoGmail />, link: "#", color: "hover:text-[#c71610]" },
];
