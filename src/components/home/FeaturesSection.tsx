"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
];

export default function FeaturesSection() {
  return (
    <section className="relative py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image */}
     
      <div className="absolute inset-0 bg-transparent" />

      {/* Cards row */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {/* Card 1 — image left, text right */}
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
          <Link
            href="#projects"
            className="group bg-white rounded-2xl overflow-hidden flex flex-row shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
          >
            <div className="relative w-36 shrink-0">
              <Image
                src="/light.jpeg"
                alt="Solar energy worker"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-between p-5 flex-1 relative">
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-green-600 group-hover:border-green-600 group-hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-sm sm:text-base leading-snug pr-8">
                  Building the Future with Solar Energy
                </h3>
                <p className="mt-2 text-gray-400 text-xs leading-relaxed line-clamp-3">
                  Neev Green Energy is committed to helping homes and businesses transition to clean, renewable solar power with reliable installation and smart energy solutions.
                </p>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Card 2 — image left, text right */}
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
          <Link
            href="#projects"
            className="group bg-white rounded-2xl overflow-hidden flex flex-row shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
          >
            <div className="relative w-36 shrink-0">
              <Image
                src="/battery.jpeg"
                alt="Solar energy worker"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-between p-5 flex-1 relative">
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-green-600 group-hover:border-green-600 group-hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-sm sm:text-base leading-snug pr-8">
                  Reliable Solar Solutions
                </h3>
                <p className="mt-2 text-gray-400 text-xs leading-relaxed line-clamp-3">
                  Our focus is on delivering efficient solar systems, professional installation, and long-term energy savings for every customer.
                </p>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Card 3 — text left, image right */}
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
          <Link
            href="#services"
            className="group bg-white rounded-2xl overflow-hidden flex flex-row shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
          >
            <div className="flex flex-col justify-center p-5 flex-1">
              <h3 className="text-gray-900 font-bold text-sm sm:text-base leading-snug">
                High-Efficiency Solar Panels
              </h3>
              <p className="mt-2 text-gray-400 text-xs leading-relaxed">
                We use advanced solar technology designed to capture maximum sunlight and generate reliable power for your home or business.
              </p>
            </div>
            <div className="relative w-36 shrink-0">
              <Image
                src="/panel.jpeg"
                alt="Bright solar panels"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
