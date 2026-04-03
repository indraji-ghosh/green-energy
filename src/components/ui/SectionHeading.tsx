"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  lightText?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
  lightText = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center flex flex-col items-center", className)}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4",
          lightText ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            "text-lg md:text-xl max-w-2xl",
            lightText ? "text-slate-300" : "text-slate-600",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
