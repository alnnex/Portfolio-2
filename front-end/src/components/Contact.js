import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="pb-10">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 pt-24 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
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
          <div className="w-full flex justify-center">
            <text className="text-slate-900">alnnexquiwagtrabs@gmail.com</text>
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
  { icon: <AiFillLinkedin />, link: "#", color: "hover:text-[#0077B5]" },
  { icon: <AiOutlineWhatsApp />, link: "#", color: "hover:text-[#25D366]" },
  // { icon: <BiLogoGmail />, link: "#", color: "hover:text-[#c71610]" },
];
