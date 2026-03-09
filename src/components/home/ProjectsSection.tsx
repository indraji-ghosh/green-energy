"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    year: "2023",
    title: "The Outreach Fields",
    description:
      "Planting the seeds of tomorrow's energy through our solar-powered community farming initiatives, creating a sustainable pathway forward.",
    imageUrl:
      "/light.jpeg",
    imageAlt: "Solar panels on fields",
    featured: true,
  },
  {
    id: 2,
    year: "2023",
    title: "Sunscape Energy Project",
    imageUrl:
      "/home.jpeg",
    imageAlt: "Solar energy installation",
    featured: false,
  },
  {
    id: 3,
    year: "2023",
    title: "The Sunscape Fields",
    imageUrl:
      "/residential.jpeg",
    imageAlt: "Solar farm fields",
    featured: false,
  },
  {
    id: 4,
    year: "2023",
    title: "Sunroam Survey",
    imageUrl:
      "/factory.jpeg",
    imageAlt: "Solar survey aerial",
    featured: false,
  },
  {
    id: 5,
    year: "2023",
    title: "Earthward Essay",
    imageUrl:
      "/street2.jpeg",
    imageAlt: "Earthward solar project",
    featured: false,
  },
];

export default function ProjectsSection() {
  const [featured, ...rest] = projects;
  const topRow = rest.slice(0, 2);
  const bottomRow = rest.slice(2);

  return (
    <section id="projects" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-bold text-green-600 uppercase tracking-widest">
            ✦ Our Projects
          </span>
          <div className="mt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-xl">
              Discover Our Successful
              <br />
              Solar Projects.
            </h2>
            <div className="flex flex-col gap-4 lg:items-end max-w-sm">
              {/* <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                By adopting solar energy into our farming practices, we
                significantly reduce our carbon footprint while cutting down on
                energy costs.
              </p> */}
              <Link
                href="#"
                className="self-start lg:self-end inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white font-semibold text-sm hover:bg-green-700 transition-colors shadow-md"
              >
                Contact us
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Project grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5"
        >
          {/* Featured card — spans 1 col, full height on left */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="lg:row-span-2"
          >
          <Link
            href="#"
            className="group flex flex-col rounded-2xl overflow-hidden bg-gray-50 hover:shadow-xl transition-shadow duration-300 h-full"
          >
            <div className="relative h-64 lg:h-72 w-full overflow-hidden shrink-0">
              <Image
                src={featured.imageUrl}
                alt={featured.imageAlt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="px-5 py-5 flex flex-col grow">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                {featured.year}
              </span>
              <h3 className="mt-1 text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                {featured.title}
              </h3>
              {featured.description && (
                <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-4">
                  {featured.description}
                </p>
              )}
            </div>
          </Link>
          </motion.div>

          {/* Top row — 2 smaller cards */}
          {topRow.map((project) => (
            <motion.div
              key={project.id}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
            <Link
              href="#"
              className="group flex flex-col rounded-2xl overflow-hidden bg-gray-50 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-5 py-4">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  {project.year}
                </span>
                <h3 className="mt-1 text-base font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>
              </div>
            </Link>
            </motion.div>
          ))}

          {/* Bottom row — 2 wider cards */}
          {bottomRow.map((project) => (
            <motion.div
              key={project.id}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
            <Link
              href="#"
              className="group flex flex-col rounded-2xl overflow-hidden bg-gray-50 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-5 py-4">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  {project.year}
                </span>
                <h3 className="mt-1 text-base font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>
              </div>
            </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
