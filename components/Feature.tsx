import React from "react";
import { LuEye, LuGraduationCap } from "react-icons/lu";
import { GoInfinity } from "react-icons/go";
import { PiNut } from "react-icons/pi";
import { CiShuffle, CiStar } from "react-icons/ci";
import { BsXDiamond, BsCameraVideo, BsBrightnessHigh } from "react-icons/bs";
import { ImCommand } from "react-icons/im";
import { FaDribbble } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";

const Feature = () => {
  const features = [
    { icon: <LuEye />, color: "#ffbb2c", title: "Lorem Ipsum" },
    { icon: <GoInfinity />, color: "#5578ff", title: "Dolor Sitema" },
    {
      icon: <LuGraduationCap />,
      color: "#e80368",
      title: "Sed perspiciatis",
    },
    { icon: <PiNut />, color: "#e361ff", title: "Magni Dolores" },
    { icon: <CiShuffle />, color: "#47aeff", title: "Nemo Enim" },
    { icon: <CiStar />, color: "#ffa76e", title: "Eiusmod Tempor" },
    { icon: <BsXDiamond />, color: "#11dbcf", title: "Midela Teren" },
    { icon: <BsCameraVideo />, color: "#4233ff", title: "Pira Neve" },
    { icon: <ImCommand />, color: "#b2904f", title: "Dirada Pack" },
    { icon: <FaDribbble />, color: "#b20969", title: "Moton Ideal" },
    { icon: <FiActivity />, color: "#ff5828", title: "Verdo Park" },
    {
      icon: <BsBrightnessHigh />,
      color: "#29cc61",
      title: "Flavor Nivelanda",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 bg-white"
      data-aos="fade-up"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-4 bg-white border flex flex-row space-x-4 items-center border-gray-200 hover:border-green-500 transition-colors duration-300 cursor-pointer"
            >
              <div
                className="text-4xl transition-colors duration-300"
                style={{ color: feature.color }}
              >
                {feature.icon}
              </div>
              <h3 className="text-md text-indigo-950 font-nav font-semibold group-hover:text-green-500 transition-colors duration-300">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
