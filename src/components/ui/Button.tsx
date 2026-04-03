"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "default" | "outline" | "ghost" | "glass" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          {
            "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20": variant === "default",
            "border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50": variant === "outline",
            "hover:bg-slate-100 text-slate-700 hover:text-slate-900": variant === "ghost",
            "glass-dark text-white hover:bg-slate-800/80": variant === "glass",
            "underline-offset-4 hover:underline text-emerald-600": variant === "link",
            "h-10 px-4 py-2 text-sm": size === "default",
            "h-9 rounded-md px-3 text-sm": size === "sm",
            "h-12 rounded-md px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
