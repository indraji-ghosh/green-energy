"use client";

import Link from "next/link";
import { useState } from "react";

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer id="contact" className="relative bg-[#0d0d0d] text-white overflow-hidden">
      {/* Top content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Newsletter */}
          <div className="flex flex-col gap-5">
            <h3 className="text-lg font-bold text-white">Sign up for our Newsletter</h3>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="flex items-center bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none"
                suppressHydrationWarning
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="px-4 py-3 text-white/60 hover:text-green-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Contact Us</h4>
            <p className="text-white/60 text-sm">+91 6291-767198</p>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Location</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              National Solar Farm Factory
              <br />
              Albert road, Cork City, Ireland
            </p>
          </div>
        </div>

        {/* Need help */}
        <div className="mt-10 text-sm text-white/50">
          Need some help?{" "}
          <Link href="#" className="text-white underline underline-offset-2 hover:text-green-400 transition-colors">
            Get in touch
          </Link>
        </div>
      </div>

      {/* Large watermark text */}
      <div className="relative z-0 w-full overflow-hidden select-none pointer-events-none mt-2">
        <p className="whitespace-nowrap text-[clamp(4rem,14vw,11rem)] font-extrabold text-white/5 leading-none tracking-tight px-4">
          Powering the Future of
        </p>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Ecoray. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-white/60 hover:text-white transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}