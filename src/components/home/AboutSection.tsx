"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "140+", label: "Satisfied Clients" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Intro Text — centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">
            About Us
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">


🌞 Powering the Future
          </h2>
          <p className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 leading-tight">
           with Clean Solar Energy
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden aspect-4/3 shadow-xl"
          >
            <Image
              src="/factory.jpeg"
              alt="Solar panels on farm"
              fill
              className="object-cover object-center"
            />
          </motion.div>

          {/* Right — Stats + Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            {/* Stats Row */}
            <div className="flex gap-8 flex-wrap">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {stat.value}
                  </span>
                  <span className="text-sm text-gray-500 mt-1">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
             At Neev Green Energy, we are dedicated to building a sustainable future by providing reliable and affordable solar energy solutions. Our mission is to help homes and businesses transition to clean, renewable power while reducing electricity costs and environmental impact.

We specialize in solar panel installation, system design, and energy consultation, ensuring every project is tailored to maximize efficiency and long-term performance. With a focus on quality technology and professional service, we aim to make solar energy simple, accessible, and beneficial for everyone.

            </p>

            {/* CTA */}
            <Link
              href="#services"
              className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white font-semibold text-sm hover:bg-green-700 transition-colors shadow-md"
            >
             Contact us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
