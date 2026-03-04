"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Powering Irrigation with the Sun.",
    description:
      "Use solar energy to power efficient irrigation systems that conserve water and reduce costs.",
  },
  {
    id: 2,
    title: "Solar Solutions for Livestock.",
    description:
      "Reliable off-grid solar power to support livestock management and welfare.",
  },
  {
    id: 3,
    title: "Solar-Powered Cold Storage.",
    description:
      "Keep produce fresh longer with solar-powered refrigeration systems that operate independently from the grid.",
    highlight: true,
  },
  {
    id: 4,
    title: "Solar Electric Fencing.",
    description:
      "Affordable and reliable solar-powered electric fencing to protect your crops and livestock.",
  },
  {
    id: 5,
    title: "Agric Solar Fields.",
    description:
      "Dedicated solar field installations designed specifically for agricultural land use.",
  },
];

const imageTabs = [
  {
    label: "Solar Panels",
    src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
    alt: "Solar panels installation",
  },
  {
    label: "Solar Powered",
    src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
    alt: "Solar powered farm",
  },
  {
    label: "Cold Storage",
    src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80",
    alt: "Solar cold storage",
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeService, setActiveService] = useState(2); // highlight service 3 by default

  return (
    <section id="services" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">
            About What We Do
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-xl">
            Solar Energy in Every Step of Farming
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Image with tabs */}
          <div className="flex flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden aspect-4/3 shadow-xl">
              <Image
                src={imageTabs[activeTab].src}
                alt={imageTabs[activeTab].alt}
                fill
                className="object-cover object-center transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-3">
              {imageTabs.map((tab, idx) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                    activeTab === idx
                      ? "bg-green-600 text-white border-green-600 shadow"
                      : "bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:text-green-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right — Services list */}
          <div className="flex flex-col gap-3">
            {services.map((service, idx) => (
              <button
                key={service.id}
                onClick={() => setActiveService(idx)}
                className={`w-full text-left rounded-2xl px-6 py-5 flex items-start gap-4 transition-all duration-200 ${
                  activeService === idx
                    ? "bg-[#0b1d2e] text-white shadow-xl"
                    : "bg-white text-gray-700 border border-gray-100 hover:border-green-200 hover:shadow-md"
                }`}
              >
                {/* Number */}
                <span
                  className={`text-3xl font-extrabold leading-none shrink-0 ${
                    activeService === idx ? "text-green-400" : "text-gray-200"
                  }`}
                >
                  {service.id}
                </span>

                {/* Text */}
                <div className="flex flex-col gap-1">
                  <p
                    className={`font-semibold text-base ${
                      activeService === idx ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {service.title}
                  </p>
                  {activeService === idx && (
                    <p className="text-white/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  )}
                </div>

                {/* Arrow */}
                <span
                  className={`ml-auto shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    activeService === idx
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            ))}

            {/* CTA */}
            <div className="mt-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-green-600 text-green-700 font-semibold text-sm hover:bg-green-600 hover:text-white transition-all"
              >
                Visit All Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
