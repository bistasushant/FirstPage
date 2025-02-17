"use client";
import React, { useState, useEffect } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector("header")?.clientHeight || 0;
      const offset = element.offsetTop - headerHeight;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close mobile menu after click
  };
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const headerHeight = document.querySelector("header")?.clientHeight || 0;
    const scrollPosition = window.scrollY + headerHeight + 100; // Adding 100px buffer

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveSection(sectionId || "home");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-violet-950 fixed w-full top-0 z-50 shadow-md">
      <div className="container max-w-7xl mx-auto px-4 py-8 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-8 w-14 cursor-pointer"
            onClick={() => handleSmoothScroll("home")}
          />
        </div>
        <nav className="hidden md:flex space-x-8 font-sans">
          {["home", "about", "features", "team"].map(
            (item) => (
              <button
                key={item}
                onClick={() => handleSmoothScroll(item)}
                className={`relative group transition-all duration-300 capitalize ${
                  activeSection === item
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-green-500 transition-all duration-300 ${
                    activeSection === item ? "w-8" : "w-0 group-hover:w-8"
                  }`}
                ></span>
              </button>
            )
          )}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center text-gray-300 hover:text-white transition-all duration-300">
              Dropdown
              <FiChevronDown className="ml-2 h-5 w-5" />
            </button>
            {isDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                {["Dropdown1", "DropDown2", "Dropdown3"].map((dropdownItem) => (
                  <button
                    key={dropdownItem}
                    onClick={() => handleSmoothScroll(dropdownItem)}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 capitalize"
                  >
                    {dropdownItem}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => handleSmoothScroll("contact")}
            className="relative group text-gray-300 hover:text-white transition-all duration-300"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-8"></span>
          </button>
        </nav>

        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="relative h-full w-full">
            <div className="absolute inset-x-4 top-4 bottom-4 bg-white/95 backdrop-blur-sm rounded-md shadow-lg">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl text-gray-600 hover:text-green-600"
                >
                  <FiX />
                </button>
              </div>
              <nav className="flex flex-col mx-6 font-nav">
                {["home", "about", "features", "gallery", "team", "pricing"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => handleSmoothScroll(item)}
                      className="py-3 text-gray-800 hover:text-green-600 text-left capitalize"
                    >
                      {item}
                    </button>
                  )
                )}
                <div className="relative group">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="py-3 text-gray-800 hover:text-green-600 text-left"
                  >
                    Dropdown
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute left-4 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                      {["Dropdown1", "Dropdown2", "Dropdown3"].map(
                        (dropdownItem) => (
                          <button
                            key={dropdownItem}
                            onClick={() => handleSmoothScroll(dropdownItem)}
                            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 capitalize"
                          >
                            {dropdownItem}
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => handleSmoothScroll("contact")}
                  className="py-3 text-gray-800 hover:text-green-600 text-left"
                >
                  Contact
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
