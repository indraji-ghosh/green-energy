"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Durgapur",
    quote:
      "I recently installed solar panels at my home through Neev Green Energy, and the experience was excellent. The team explained everything clearly and completed the installation smoothly. My electricity bills have already started reducing.",
    avatar:
      "/star.png",
    leftImage:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=700&q=80",
    rightImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=80",
  },
  {
    id: 2,
    name: "Ananya Mukherjee",
    role: "Farm Owner",
    quote:
      "The installation process was very professional and quick. Neev Green Energy helped us understand the benefits of solar and guided us through the entire setup. Our home now runs on clean energy, and we are very happy with the results.",
    avatar: "/star.png",
    leftImage:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=700&q=80",
    rightImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&q=80",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Agricultural Engineer",
    quote:
      "We installed a solar system for our factory to reduce electricity costs. The Neev Green Energy team designed the system perfectly according to our power requirements. It has significantly lowered our monthly electricity expenses.",
    avatar: "/star.png",  
     
    leftImage:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&q=80",
    rightImage:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=700&q=80",
  },
  {
    id: 4,
    name: "Aisha Patel",
    role: "Sustainability Director",
    quote:
      "Integrating solar energy into our operations has been a game-changer. We have reduced our carbon footprint significantly and our community looks up to us as a model for green farming.",
    avatar: "/star.png",
    leftImage:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=700&q=80",
    rightImage:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=700&q=80",
  },
  {
    id: 5,
    name: "Sandeep Verma",
    role: "Crop Farmer",
    quote:
      "Neev Green Energy provided great service from consultation to installation. The team was knowledgeable and supportive throughout the process. I would definitely recommend them to anyone planning to switch to solar.",
    avatar: "/star.png",
     
    leftImage:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=700&q=80",
    rightImage:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=700&q=80",
  },

];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((i) => (i + 1) % testimonials.length);

  const current = testimonials[active];

  return (
    <section className="bg-[#f5f5f0] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Tag */}
        <div className="flex justify-center mb-6">
          <span className="text-sm font-semibold text-gray-700 flex items-center gap-1">
            <span className="text-green-600">•</span> Testimonials
          </span>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
        >
          Hear From Those Who Power
          <br className="hidden sm:block" /> the Future With Us
        </motion.h2>

        {/* Sub-description */}
        <p className="mt-5 text-center text-gray-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
         At Neev Green Energy, customer satisfaction is our top priority. We take pride in delivering reliable solar solutions and professional service. Hear from homeowners and businesses who trust us to power their future with clean energy.
        </p>

        {/* Avatar selector row */}
        <div className="mt-10 flex justify-center items-center gap-2 sm:gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`relative rounded-full overflow-hidden border-2 transition-all duration-300 focus:outline-none ${
                i === active
                  ? "w-14 h-14 border-green-500 shadow-lg scale-110"
                  : "w-10 h-10 border-transparent opacity-60 hover:opacity-90 hover:scale-105"
              }`}
              aria-label={`View testimonial from ${t.name}`}
            >
              <Image
                src={t.avatar}
                alt={t.name}
                fill
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>

        {/* Main testimonial card area */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-5 items-center">
          {/* Left image */}
          <div className="hidden lg:block relative h-72 rounded-2xl overflow-hidden shadow-lg">
            <Image
              key={`left-${active}`}
              src={current.leftImage}
              alt="Solar project"
              fill
              className="object-cover object-center transition-opacity duration-500"
            />
          </div>

          {/* Center quote card */}
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl shadow-xl px-8 py-10 flex flex-col justify-between min-h-64 relative"
          >
            {/* Opening quote mark */}
            <span className="absolute top-6 left-7 text-6xl leading-none text-gray-200 font-serif select-none">
              &ldquo;
            </span>

            <p className="relative z-10 text-gray-900 font-semibold text-base sm:text-lg leading-relaxed mt-4">
              {current.quote}
            </p>

            {/* Closing quote mark */}
            <span className="absolute bottom-16 right-7 text-6xl leading-none text-gray-200 font-serif select-none">
              &rdquo;
            </span>

            {/* Author */}
            <div className="mt-8 flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">{current.name}</p>
                <p className="text-gray-400 text-xs">{current.role}</p>
              </div>
            </div>
          </motion.div>
          <div className="hidden lg:block relative h-72 rounded-2xl overflow-hidden shadow-lg">
            <Image
              key={`right-${active}`}
              src={current.rightImage}
              alt="Solar project"
              fill
              className="object-cover object-center transition-opacity duration-500"
            />
          </div>
        </div>

        {/* Prev / Next arrows */}
        <div className="mt-10 flex justify-center items-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
