"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "glass py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 group">
          <img 
            src="/neev.png" 
            alt="Neev Energy Logo" 
            className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <span className={cn(
            "font-extrabold text-xl tracking-tight transition-colors duration-300",
            scrolled ? "text-slate-900" : "text-white"
          )}>
            Neev<span className={cn(
              "font-light",
              scrolled ? "text-emerald-600" : "text-emerald-400"
            )}> Energy</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-emerald-500",
                scrolled ? "text-slate-600 focus-visible:text-emerald-500" : "text-slate-200"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button 
            variant={scrolled ? "default" : "glass"} 
            className="group"
            onClick={() => window.open('https://wa.me/916291767198?text=Hi,%20I%20would%20like%20to%20get%20a%20free%20solar%20quote.', '_blank')}
          >
            <img src="/whatsappLogo.png" alt="WhatsApp" className="w-5 h-5 mr-2 object-contain" />
            Get Free Quote
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-emerald-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className={cn("h-6 w-6", scrolled ? "text-slate-900" : "text-white")} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass absolute top-full left-0 right-0 border-t border-slate-200 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 hover:text-emerald-600 py-2 border-b border-slate-100"
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                className="mt-4 w-full justify-center"
                onClick={() => window.open('https://wa.me/916291767198?text=Hi,%20I%20would%20like%20to%20get%20a%20free%20solar%20quote.', '_blank')}
              >
                <img src="/whatsappLogo.png" alt="WhatsApp" className="w-5 h-5 mr-2 object-contain" />
                Get Free Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
