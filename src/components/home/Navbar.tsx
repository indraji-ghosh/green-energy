"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="white"
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 10 22 10c0 0-6 3-9 3-3.18 0-5.76-3-5.76-3S9 15 12 15a5 5 0 0 0 5-5V8z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900">Ecoray</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="hover:text-green-600 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#contact"
            className="px-5 py-2 rounded-full bg-orange-400 text-white text-sm font-semibold hover:bg-orange-500 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block py-1 hover:text-green-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="inline-block mt-2 px-5 py-2 rounded-full bg-orange-400 text-white text-sm font-semibold hover:bg-orange-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
