"use client";

import { motion } from "framer-motion";
import { Home, Building2, Lightbulb, PenTool as Tool, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    description: "Complete home solar installations designed to seamlessly blend with your roof while maximizing energy production.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Building2,
    title: "Commercial Solutions",
    description: "Scale your business sustainably with high-capacity solar setups designed for maximum ROI and tax benefits.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Lightbulb,
    title: "Solar Consultation",
    description: "Expert analysis of your energy needs, providing a customized plan to transition to clean energy efficiently.",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: Tool,
    title: "System Maintenance",
    description: "Proactive monitoring and maintenance to ensure your solar panels operate at peak performance year-round.",
    color: "bg-purple-50 text-purple-600",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-slate-50 relative">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Premium Solar Services"
          subtitle="We deliver end-to-end solar solutions tailored to your unique energy requirements, ensuring maximum efficiency and savings."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${service.color}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto flex items-center text-emerald-600 font-medium text-sm gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Read more <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
