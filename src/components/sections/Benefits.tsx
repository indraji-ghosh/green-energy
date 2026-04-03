"use client";

import { motion } from "framer-motion";
import { Leaf, PiggyBank, Zap, Globe, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: PiggyBank,
    title: "Cut Energy Costs",
    description: "Drastically reduce your monthly utility bills by generating your own power. See ROI in as little as 3-5 years.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reduce your carbon footprint entirely. Clean, renewable energy that preserves the planet for future generations.",
  },
  {
    icon: Zap,
    title: "Self-Sufficient",
    description: "Achieve energy independence. With our advanced battery storage, you are protected against grid outages.",
  },
  {
    icon: Globe,
    title: "Remote Access",
    description: "Track your energy production and consumption in real-time from anywhere in the world via our mobile app.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 md:py-32 bg-emerald-50 relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-white opacity-40 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Why Choose Solar Power?"
          subtitle="Investing in solar isn't just about saving the environment—it's the smartest financial decision for modern living."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white shadow-xl shadow-emerald-900/5 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {[1, 2].map((_, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-emerald-600" />
                      </div>
                      <div className="h-2 w-16 bg-slate-100 rounded-full" />
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
