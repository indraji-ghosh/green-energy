"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const projects = [
  {
    id: 1,
    title: "Vista Ridge Residential",
    category: "Residential Setup",
    energy: "12 kW System",
    image: "/residential.jpeg",
    year: "2024",
  },
  {
    id: 2,
    title: "TechPark Commercial",
    category: "Commercial Array",
    energy: "150 kW System",
    image: "/factory.jpeg",
    year: "2023",
  },
  {
    id: 3,
    title: "Sunrise Villa Community",
    category: "Community Grid",
    energy: "85 kW System",
    image: "/home.jpeg",
    year: "2023",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-900 text-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-900/20 blur-[150px] -z-10" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <SectionHeading
            title="Our Latest Projects"
            subtitle="Explore our successful installations powering a sustainable and cost-effective future."
            lightText
            className="mb-0 text-left"
          />
          <button className="hidden md:inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors bg-white/5 px-6 py-3 rounded-full hover:bg-white/10 shrink-0">
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-800"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent transition-opacity duration-300 pointer-events-none" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-emerald-400 text-sm font-semibold tracking-wide uppercase">
                      {project.category}
                    </span>
                    <span className="text-slate-400 text-sm">{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">{project.energy}</span>
                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 -translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <button className="mt-10 md:hidden w-full inline-flex items-center justify-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors bg-white/5 px-6 py-4 rounded-xl hover:bg-white/10">
          View All Projects
          <ArrowUpRight className="w-5 h-5" />
        </button>

      </div>
    </section>
  );
}
