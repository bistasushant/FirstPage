"use client";
import { BiPhoneCall, BiEnvelope } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-12 md:py-16"
      data-aos="fade-up"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center">
            <h2 className="text-sm font-light text-gray-600 mr-4">CONTACT</h2>
            <div className="flex-grow-0 w-16 sm:w-28 h-[1px] bg-green-500"  />
          </div>
          <p className="text-2xl md:text-3xl font-semibold text-indigo-900">
            CHECK OUR CONTACT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="border-0 bg-green-50 rounded-full px-3 py-3">
                <IoLocationOutline className="text-2xl text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-indigo-900 mb-1">
                  Address
                </h3>
                <p className="text-dark font-light text-sm">
                  A108 Adam Street, New York, NY 535022
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="border-0 bg-green-50 rounded-full px-3 py-3">
                <BiPhoneCall className="text-2xl text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-indigo-900 mb-1">
                  Call Us
                </h3>
                <p className="text-dark font-light text-sm">+1 5589 55488 55</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="border-0 bg-green-50 rounded-full px-3 py-3">
                <BiEnvelope className="text-2xl text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-indigo-900 mb-1">
                  Email Us
                </h3>
                <p className="text-dark font-light text-sm">
                  info@example.com
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-8">
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-green-500 focus:outline-none rounded-md"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-green-500 focus:outline-none rounded-md"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-green-500 focus:outline-none rounded-md"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-green-500 focus:outline-none rounded-md"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  className="px-6 py-3 md:py-4 bg-green-600 rounded-md hover:bg-green-700 transition-colors"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
