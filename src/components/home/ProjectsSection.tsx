import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    year: "2023",
    title: "The Outreach Fields",
    description:
      "Planting the seeds of tomorrow's energy through our solar-powered community farming initiatives, creating a sustainable pathway forward.",
    imageUrl:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
    imageAlt: "Solar panels on fields",
    featured: true,
  },
  {
    id: 2,
    year: "2023",
    title: "Sunscape Energy Project",
    imageUrl:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    imageAlt: "Solar energy installation",
    featured: false,
  },
  {
    id: 3,
    year: "2023",
    title: "The Sunscape Fields",
    imageUrl:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    imageAlt: "Solar farm fields",
    featured: false,
  },
  {
    id: 4,
    year: "2023",
    title: "Sunroam Survey",
    imageUrl:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800&q=80",
    imageAlt: "Solar survey aerial",
    featured: false,
  },
  {
    id: 5,
    year: "2023",
    title: "Earthward Essay",
    imageUrl:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
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
        <div className="mb-12">
          <span className="text-xs font-bold text-green-600 uppercase tracking-widest">
            ✦ Our Projects
          </span>
          <div className="mt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-xl">
              Discover Our Successful
              <br />
              Solar Farming Projects.
            </h2>
            <div className="flex flex-col gap-4 lg:items-end max-w-sm">
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                By adopting solar energy into our farming practices, we
                significantly reduce our carbon footprint while cutting down on
                energy costs.
              </p>
              <Link
                href="#"
                className="self-start lg:self-end inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white font-semibold text-sm hover:bg-green-700 transition-colors shadow-md"
              >
                See All Projects
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
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Featured card — spans 1 col, full height on left */}
          <Link
            href="#"
            className="group lg:row-span-2 flex flex-col rounded-2xl overflow-hidden bg-gray-50 hover:shadow-xl transition-shadow duration-300"
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

          {/* Top row — 2 smaller cards */}
          {topRow.map((project) => (
            <Link
              key={project.id}
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
          ))}

          {/* Bottom row — 2 wider cards */}
          {bottomRow.map((project) => (
            <Link
              key={project.id}
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
          ))}
        </div>
      </div>
    </section>
  );
}
