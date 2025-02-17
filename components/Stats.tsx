"use client";
import React from "react";
import { CiFaceSmile } from "react-icons/ci";
import { BsJournalText, BsHeadset } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";

const Stats = () => {
  return (
    <section
      id="stats"
      className="bg-gray-100"
      data-aos="fade-up"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
          {/* Stat Items */}
          {[
            {
              icon: CiFaceSmile,
              value: "232",
              label: "Happy Clients",
              iconSize: "text-3xl",
            },
            {
              icon: BsJournalText,
              value: "521",
              label: "Projects",
              iconSize: "text-2xl",
            },
            {
              icon: BsHeadset,
              value: "1463",
              label: "Hours Of Support",
              iconSize: "text-3xl",
            },
            {
              icon: IoPeopleOutline,
              value: "15",
              label: "Hard Workers",
              iconSize: "text-3xl",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="group flex flex-col items-center bg-white rounded-md shadow-lg p-4 sm:p-5 md:p-4 relative"
              data-aos={`fade-up`}
              data-aos-delay={`${index * 100}`}
            >
              {/* Icon Container */}
              <div className="absolute -top-5 sm:-top-6 bg-white shadow-md rounded-full p-2 sm:p-3 border border-gray-200 group-hover:border-green-200 transition-all">
                <stat.icon
                  className={`${stat.iconSize} text-green-500 group-hover:text-green-600 transition-colors`}
                />
              </div>

              {/* Content */}
              <div className="mt-8 sm:mt-10 text-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700">
                  {stat.value}
                </span>
                <p className="mt-2 text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
