"use client";

import { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export const Button = ({ variant = "primary", className, ...props }: Props) => {
  const base =
    "rounded-full px-6 py-2 text-sm font-medium transition shadow-sm disabled:opacity-60 disabled:cursor-not-allowed";
  const variants = {
    primary:
      "bg-primary text-white hover:bg-blue-700 focus:ring-2 focus:ring-primary/40",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary/40"
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(base, variants[variant], className)}
      {...props}
    />
  );
};
