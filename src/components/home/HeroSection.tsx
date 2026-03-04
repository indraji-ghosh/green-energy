import Image from "next/image";
import Link from "next/link";
import FeaturesSection from "./FeaturesSection";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Solar farm agriculture"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#071423]/40 via-[#0b1d2e]/40 to-[#0b1d2e]/85" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-32">
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Sustainable Agriculture &amp; Solar Solutions
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto">
          Powering the Future
          <br />
          of House
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-center text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Sustainable agriculture right from the solar power rails. We help
          farmers harness clean energy to power every step of modern farming.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-gray-900 font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg"
          >
            Learn More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Bottom Stats Badges */}
        <div className="mt-16 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6">
          {/* Left Badge */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 text-white">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-white/60 uppercase tracking-wider">Energy Storage</p>
              <p className="text-xl font-bold">24/7</p>
            </div>
          </div>

          {/* Right Badge */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 text-white">
            <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zm8.66-10a1 1 0 0 1-.366 1.366l-1.732 1a1 1 0 1 1-1-1.732l1.732-1A1 1 0 0 1 20.66 8zM6.072 15.634a1 1 0 0 1-.366 1.366l-1.732 1a1 1 0 1 1-1-1.732l1.732-1a1 1 0 0 1 1.366.366zM20.66 16a1 1 0 0 1-1.366.366l-1.732-1a1 1 0 1 1 1-1.732l1.732 1A1 1 0 0 1 20.66 16zM6.072 8.366a1 1 0 0 1-1.366.366l-1.732-1a1 1 0 1 1 1-1.732l1.732 1a1 1 0 0 1 .366 1.366zM12 6a6 6 0 1 1 0 12A6 6 0 0 1 12 6z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-white/60 uppercase tracking-wider">Solar Power</p>
              <p className="text-xl font-bold">7.8 kW</p>
            </div>
          </div>
        </div>
        <FeaturesSection/>
      </div>
    </section>
  );
}
