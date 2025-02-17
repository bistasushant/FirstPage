"use client";
import React from "react";
import { Button } from "./ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  BsBuildings,
  BsClipboardPulse,
  BsCommand,
  BsGraphUpArrow,
} from "react-icons/bs";

const About = () => {
  return (
    <section
      id="about"
      className="py-12 md:py-16 lg:py-24 bg-white"
      data-aos="fade-up"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 xl:gap-12">
          {/* Content Column */}
          <div className="lg:w-5/12 space-y-4">
            <div className="bg-gray-100 rounded-md w-fit px-3 py-2">
              <h3 className="text-base md:text-lg font-semibold font-heading text-green-600">
                About Us
              </h3>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-indigo-900 leading-tight">
              Ducimus rerum libero reprehenderit cumque
            </h2>
            <p className="text-gray-700 font-heading text-base sm:text-md">
              Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor
              cumque alias maxime. Enim reiciendis minus et rerum hic non.
              Dicta quas cum quia maiores iure.
            </p>
            <Button className="font-heading bg-green-600 hover:bg-green-700 text-sm md:text-md px-4 py-3 md:p-5 transition-all">
              Read More
              <FaArrowRightLong className="ml-2" />
            </Button>
          </div>

          {/* Icon Boxes Grid */}
          <div className="lg:w-7/12 mt-8 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  icon: BsBuildings,
                  title: "Eius provident",
                  text:
                    "Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem",
                },
                {
                  icon: BsClipboardPulse,
                  title: "Rerum aperiam",
                  text:
                    "Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia",
                },
                {
                  icon: BsCommand,
                  title: "Veniam omnis",
                  text:
                    "Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti",
                },
                {
                  icon: BsGraphUpArrow,
                  title: "Delares sapiente",
                  text:
                    "Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 sm:p-6 md:p-8 bg-white rounded-xl border-2 border-gray-100 shadow-lg transition-all"
                  data-aos="fade-up"
                  data-aos-delay={`${(index % 2) * 100 + 100}`}
                >
                  <div className="group bg-gray-100 w-[70px] h-[70px] rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
                    <item.icon
                      size={28}
                      className="text-green-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-indigo-900 mt-4 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
