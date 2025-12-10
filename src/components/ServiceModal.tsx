"use client";

import { motion } from "framer-motion";

export default function ServiceModal({ service, onClose }: any) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative max-w-2xl w-full rounded-2xl bg-white p-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-sm text-slate-500 hover:text-red-600"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={service.image}
          className="w-full h-56 object-cover rounded-xl mb-4"
          alt={service.title}
        />

        {/* Title */}
        <h2 className="text-lg font-semibold text-slate-900 mb-2">
          {service.title}
        </h2>

        {/* Full Description */}
        <p className="text-sm text-slate-700 leading-relaxed">
          {service.fullDescription}
        </p>

        {/* CTA */}
        <div className="mt-6 text-right">
          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-xs font-medium text-white hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
}
