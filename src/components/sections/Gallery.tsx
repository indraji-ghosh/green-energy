"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const galleryImages = [
  { src: "/panel.jpeg", alt: "Premium solar panel arrays" },
  { src: "/home.jpeg", alt: "Residential installation" },
  { src: "/residential.jpeg", alt: "Modern residential solar" },
  { src: "/factory.jpeg", alt: "Commercial factory solar" },
  { src: "/hero3.jpeg", alt: "Expansive solar farm" },
  { src: "/hero2.jpeg", alt: "Architectural solar integration" },
  { src: "/battery.jpeg", alt: "High-capacity battery storage" },
  { src: "/street.jpeg", alt: "Solar powered street lights" },
  { src: "/street2.jpeg", alt: "Eco-friendly street infrastructure" },
  { src: "/light.jpeg", alt: "Clean energy lighting" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-emerald-50/50 py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-16">
        <SectionHeading
          title="Visual Showcase."
          subtitle="Explore our visually stunning portfolio of completed, high-efficiency solar architectures."
          centered
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Pinterest Masonry Grid with spacing */}
        <div className="w-full columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.8, delay: (index % 4) * 0.1 }}
              className="group relative overflow-hidden bg-white rounded-2xl md:rounded-3xl mb-4 md:mb-6 block break-inside-avoid shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-shadow duration-500"
            >
              {/* Natural aspect ratio image drives the masonry height */}
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-auto block transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-110 object-cover"
                loading="lazy"
              />
              
              {/* Elegant hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1]">
                <p className="text-white font-semibold text-sm md:text-lg tracking-tight drop-shadow-md">
                  {image.alt}
                </p>
                <div className="h-0.5 w-8 md:w-12 bg-emerald-400 mt-2 md:mt-3 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
