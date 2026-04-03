"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-semibold text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Our Mission
            </div>
            
            <SectionHeading
              title="Leading the transition to sustainable, clean energy."
              className="mb-0"
            />
            
            <p className="text-lg text-slate-600 leading-relaxed">
              At Neev Green Energy, we believe the future is renewable. We are dedicated to providing state-of-the-art solar solutions that help homeowners and businesses dramatically reduce their carbon footprint and save on energy costs.
            </p>

            <div className="space-y-4 pt-4">
              {[
                "100% Eco-friendly clean energy solutions",
                "Significant reduction in monthly utility bills",
                "Increased property value for residential homes",
                "Premium, long-lasting hardware with guaranteed warranties"
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  key={i} 
                  className="flex items-center gap-3 text-slate-700 font-medium"
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image & Stats Visuals */}
          <div className="flex-1 relative w-full mt-10 lg:mt-0">
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-50 rounded-full blur-3xl -z-10 opacity-70" />
            
            <div className="relative z-10 w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700" 
                style={{ backgroundImage: "url('/solar_hero.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="glass-dark inline-block px-6 py-4 rounded-xl border border-white/10 backdrop-blur-md">
                  <div className="text-3xl font-bold text-white mb-1">40%</div>
                  <div className="text-sm font-medium text-slate-300">Average energy bill reduction</div>
                  {/* Decorative line */}
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mt-3 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
