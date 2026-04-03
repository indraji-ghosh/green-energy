"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Arijit Banerjee",
    role: "Homeowner, Salt Lake, Kolkata",
    content: "Switching to Neev Green Energy was the best decision for our household. The frequent power cuts are no longer an issue, and our summer electricity bills have essentially disappeared.",
    rating: 5,
  },
  {
    name: "Ramesh Agarwal",
    role: "Factory Owner, Howrah Industrial Estate",
    content: "The commercial rooftop array they installed for our manufacturing unit exceeded expectations. The ROI is fantastic, and operational costs dropped significantly within the first quarter.",
    rating: 5,
  },
  {
    name: "Sarmistha Sen",
    role: "Boutique Owner, Siliguri",
    content: "Their team was incredibly professional and managed all the subsidy paperwork for us. It's thrilling to run my business entirely on clean energy while saving money every month.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it—hear from the families and businesses that have already made the switch."
          centered
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 relative group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-200 group-hover:text-emerald-100 transition-colors duration-300" />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
