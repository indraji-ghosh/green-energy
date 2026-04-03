"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent z-10" />
        {/* We'll use a placeholder or image here */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/solar_hero.png')" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-slate-200 tracking-wide uppercase">Leading Solar Tech</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Smart Solar Solutions for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Sustainable Future</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              Transform your home or business with premium solar installations. Lower your energy bills, increase property value, and power your life with clean energy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto h-14 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="glass" 
                className="w-full sm:w-auto h-14 text-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 h-5 w-5 text-emerald-400" />
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Badges */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="hidden lg:flex absolute bottom-12 right-12 z-20 glass-dark rounded-2xl p-6 items-center gap-6 max-w-xs"
      >
        <div className="text-5xl font-black text-emerald-400 opacity-90">12+</div>
        <div>
          <div className="font-semibold text-white">Years Experience</div>
          <div className="text-sm text-slate-400 mt-1">Trusted implicitly across the region for quality solar tech.</div>
        </div>
      </motion.div>
    </section>
  );
}
