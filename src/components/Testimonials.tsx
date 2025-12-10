"use client";

import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";

export const Testimonials = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Testimonials
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              What our clients say
            </h2>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-slate-700 mb-4">“{t.quote}”</p>
              <p className="text-sm font-semibold text-slate-900">{t.name}</p>
              <p className="text-xs text-slate-500">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
