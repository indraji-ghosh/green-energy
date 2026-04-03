"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-800 to-slate-900 z-0" />
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 z-0 mix-blend-overlay" />

      {/* Decorative large circles */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 w-96 h-96 bg-emerald-400/20 blur-[100px] rounded-full z-0" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/3 w-[500px] h-[500px] bg-teal-400/20 blur-[120px] rounded-full z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Start Your Solar Journey Today
          </h2>
          <p className="text-xl text-emerald-50 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Join the hundreds of property owners who have already made the switch. Get a free, personalized solar consultation and see exactly how much you can save.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 px-8 text-lg bg-white text-emerald-700 hover:bg-emerald-50 shadow-xl shadow-slate-900/20 group"
              onClick={() => window.open('https://wa.me/916291767198?text=Hi,%20I%20would%20like%20to%20get%20a%20free%20solar%20quote.', '_blank')}
            >
              {/* <img src="/whatsappLogo.png" alt="WhatsApp" className="w-6 h-6 mr-3 object-contain group-hover:scale-110 transition-transform" /> */}
              Get Free Quote
            </Button>
            <Button size="lg" variant="glass" className="w-full sm:w-auto h-14 px-8 text-lg border-white/20 hover:bg-white/10">
              <PhoneCall className="mr-2 h-5 w-5" />
              Call +91 6291-767198
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
