"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Years Experience", value: 12, suffix: "+" },
  { label: "Happy Clients", value: 140, suffix: "+" },
  { label: "MW Installed", value: 50, suffix: "+" },
  { label: "Support Available", value: 24, suffix: "/7" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
      {count}
      <span className="text-emerald-500">{suffix}</span>
    </div>
  );
}

export function TrustStats() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center space-y-2 group"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-slate-500 font-medium md:text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
