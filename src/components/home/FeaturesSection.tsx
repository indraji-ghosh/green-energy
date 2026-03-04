import Image from "next/image";
import Link from "next/link";

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
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Card 1 — image left, text right */}
        <Link
          href="#projects"
          className="group bg-white rounded-2xl overflow-hidden flex flex-row shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="relative w-36 shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&q=80"
              alt="Solar energy worker"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col justify-between p-5 flex-1 relative">
            {/* Arrow button */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-green-600 group-hover:border-green-600 group-hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <div>
              <h3 className="text-gray-900 font-bold text-sm sm:text-base leading-snug pr-8">
                View Our Success Stories In Solar Energy
              </h3>
              <p className="mt-2 text-gray-400 text-xs leading-relaxed line-clamp-3">
                Discover how our commitment to green energy is making a real difference. Our success stories
              </p>
            </div>
          </div>
        </Link>

        {/* Card 2 — avatars + stat */}
        <Link
          href="#about"
          className="group bg-white rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-3 p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-40"
        >
          {/* Overlapping avatars */}
          <div className="flex -space-x-3">
            {avatars.map((src, i) => (
              <div
                key={i}
                className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm"
                style={{ zIndex: avatars.length - i }}
              >
                <Image src={src} alt={`Client ${i + 1}`} fill className="object-cover object-center" />
              </div>
            ))}
          </div>
          <p className="text-4xl font-extrabold text-gray-900 leading-none">140k+</p>
          <p className="text-gray-400 text-sm font-medium">Our Clients&apos; Words</p>
        </Link>

        {/* Card 3 — text left, image right */}
        <Link
          href="#services"
          className="group bg-white rounded-2xl overflow-hidden flex flex-row shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex flex-col justify-center p-5 flex-1">
            <h3 className="text-gray-900 font-bold text-sm sm:text-base leading-snug">
              Bright Panels
            </h3>
            <p className="mt-2 text-gray-400 text-xs leading-relaxed">
              Maximize every sunray with our advanced, high-efficiency solar panels.
            </p>
          </div>
          <div className="relative w-36 shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80"
              alt="Bright solar panels"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Link>

      </div>
    </section>
  );
}
