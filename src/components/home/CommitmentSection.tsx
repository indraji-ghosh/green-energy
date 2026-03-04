import Image from "next/image";
import Link from "next/link";

const benefits = [
  "Reduce Energy Costs",
  "Increase Self-Sufficiency",
  "Environmentally Friendly",
  "Notable in Remote Areas",
  "Modernize Traditional Farming",
];

export default function CommitmentSection() {
  return (
    <section id="commitment" className="relative w-full overflow-hidden">
      <div className="relative h-145 lg:h-160 w-full">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&q=80"
          alt="Wind turbines agricultural field"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* White card — right half */}
        <div className="absolute inset-0 flex items-center justify-end px-4 sm:px-8 lg:pr-16">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 max-w-lg w-full">
            {/* Tag */}
            <span className="text-xs font-bold text-green-600 uppercase tracking-widest">
              ✦ Benefits
            </span>

            {/* Heading */}
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
              Our Commitment to
              <br />
              Solar Farming
            </h2>

            {/* Benefits list */}
            <ul className="mt-6 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <span className="shrink-0 w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="#about"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0b1d2e] text-white font-semibold text-sm hover:bg-[#132a3e] transition-colors"
            >
              Learn More
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
    </section>
  );
}
