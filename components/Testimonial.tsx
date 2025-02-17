"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { BiSolidStar, BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Saul Goodman",
      role: "Ceo & Founder",
      image: "/testimonials/testimonials-1.jpg",
      text:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    },
    {
      id: 2,
      name: "Sara Wilsson",
      role: "Designer",
      image: "/testimonials/testimonials-2.jpg",
      text:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      id: 3,
      name: "Jena Karlis",
      role: "Store Owner",
      image: "/testimonials/testimonials-3.jpg",
      text:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    },
    {
      id: 4,
      name: "Matt Brandon",
      role: "Freelancer",
      image: "/testimonials/testimonials-4.jpg",
      text:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    },
    {
      id: 5,
      name: "John Larson",
      role: "Entrepreneur",
      image: "/testimonials/testimonials-5.jpg",
      text:
        "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-16 bg-gray-900"
      data-aos="fade-up"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-custom-blue to-transparent" />
      <div className="absolute inset-0 z-0">
        <Image
          src="/testimonials/testimonials-bg.jpg"
          alt="Testimonials background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={600}
          centeredSlides={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="swiper-init"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="max-w-2xl mx-auto backdrop-blur-sm p-8">
                <div className="relative w-24 h-24 mx-auto mb-2 border-4 border-gray-600 rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white text-center">
                  {testimonial.name}
                </h3>
                <h4 className="text-gray-400 text-sm text-center mb-4">
                  {testimonial.role}
                </h4>
                <div className="flex justify-center mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <BiSolidStar key={i} />
                  ))}
                </div>
                <p className="text-white font-heading italic relative px-8">
                  <BiSolidQuoteLeft className="absolute left-0 top-0 text-2xl text-gray-400" />
                  {testimonial.text}
                  <BiSolidQuoteRight className="absolute right-0 bottom-0 text-2xl text-gray-400" />
                </p>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination !bottom-0 mt-8" />
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
