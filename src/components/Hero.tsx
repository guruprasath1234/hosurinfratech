"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Hosur • Infrastructure • Turnkey
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            Building Quality Infrastructure
            <br />
            <span className="text-primary">for a Better Tomorrow.</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-700 max-w-xl">
            HOSUR INFRATECH is a turnkey infrastructure partner for HVAC,
            laboratory, educational, and interior projects across South India.
            We engineer reliable environments that enable research, learning,
            and everyday life.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact">
              <Button>Discuss a Project</Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline">View Our Projects</Button>
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 pt-4 text-xs text-slate-600">
            <div>
              <p className="font-semibold text-slate-900">10+ years</p>
              <p>Project experience</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">On-time</p>
              <p>Delivery focus</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Safety-first</p>
              <p>Execution standards</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative h-64 sm:h-80 lg:h-96"
        >
          <div className="absolute inset-0 rounded-3xl border border-slate-200 bg-white shadow-lg shadow-blue-100 overflow-hidden flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 p-6">
              <div className="space-y-4 text-xs">
                <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100">
                  <p className="font-semibold text-slate-900">
                    HVAC & Exhaust Ducting
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Precision airflow solutions for labs, plants, and offices.
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="font-semibold text-slate-900">
                    Lab Infrastructure
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Workstations, utilities, and safety systems for research.
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-xs">
                <div className="p-3 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <p className="font-semibold text-slate-900">
                    Interior Fit-outs
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Corporate, institutional, and residential spaces.
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-blue-900 text-blue-50">
                  <p className="font-semibold text-sm">Trusted partner</p>
                  <p className="text-[11px] text-blue-100">
                    Engineered delivery, transparent communication, and
                    long-term service support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            className="absolute -bottom-4 -right-4 h-24 w-24 rounded-3xl bg-primary/10 border border-primary/30"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};
