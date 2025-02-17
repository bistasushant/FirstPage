"use client";
import React from "react";
import { BiCheck } from "react-icons/bi";

const Details = () => {
  return (
    <section
      id="details"
      className="py-12 md:py-16 lg:py-20"
      data-aos="fade-up"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
        <div className="flex items-center">
          <h2 className="text-xs sm:text-sm font-medium text-gray-600 mr-2 sm:mr-4 max-w-[100px] sm:max-w-none">
            DETAILS
          </h2>
          <div className="flex-grow-0 w-16 sm:w-28 h-[1px] bg-green-500" />
        </div>
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-indigo-900 mt-2">
          CHECK OUR DETAILS
        </p>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12">
        {/* Section 1 */}
        <div
          className="flex flex-col lg:flex-row items-center gap-6 md:gap-8"
          data-aos="fade-right"
        >
          <div className="w-full lg:w-1/2">
            <img
              src="/images/details-1.png"
              className="w-full h-auto max-w-md lg:max-w-xl mx-auto object-cover rounded-lg"
              alt="Detail-1"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-6 xl:pl-8">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-indigo-900">
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p className="italic mb-4 text-gray-600 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="space-y-2 md:space-y-3">
              {[
                "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Duis aute irure dolor in reprehenderit in voluptate velit.",
                "Ullam est qui quos consequatur eos accusamus.",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <BiCheck className="flex-shrink-0 mt-1 mr-2 text-green-600 text-lg" />
                  <span className="text-gray-500 text-sm md:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div
          className="flex flex-col lg:flex-row items-center gap-6 md:gap-8"
          data-aos="fade-left"
        >
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
              src="/images/details-2.png"
              className="w-full h-auto max-w-md lg:max-w-xl mx-auto object-contain rounded-lg"
              alt="detail-2"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pr-6 xl:pr-8 order-2 lg:order-1">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-indigo-900">
              Corporis temporibus maiores provident
            </h3>
            <p className="italic mb-4 text-gray-600 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div
          className="flex flex-col lg:flex-row items-center gap-6 md:gap-8"
          data-aos="fade-right"
        >
          <div className="w-full lg:w-1/2">
            <img
              src="/images/details-3.png"
              className="w-full h-auto max-w-md lg:max-w-xl mx-auto object-cover rounded-lg"
              alt="Detail-3"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-6 xl:pl-8">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-indigo-900">
              Sunt consequatur ad ut est nulla consectetur reiciendis animi
              voluptas
            </h3>
            <p className="mb-4 text-gray-600 text-sm md:text-base">
              Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus
              quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas
              dolor doloremque.
            </p>
            <div className="space-y-2 md:space-y-3">
              {[
                "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Duis aute irure dolor in reprehenderit in voluptate velit.",
                "Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <BiCheck className="flex-shrink-0 mt-1 mr-2 text-green-600 text-lg" />
                  <span className="text-gray-500 text-sm md:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div
          className="flex flex-col lg:flex-row items-center gap-6 md:gap-8"
          data-aos="fade-left"
        >
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
              src="/images/details-4.png"
              className="w-full h-auto max-w-md lg:max-w-xl mx-auto object-contain rounded-lg"
              alt="detail-4"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pr-6 xl:pr-8 order-2 lg:order-1">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-indigo-900">
              Quas et necessitatibus eaque impedit ipsum animi consequatur
              incidunt in
            </h3>
            <p className="italic mb-4 text-gray-600 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
