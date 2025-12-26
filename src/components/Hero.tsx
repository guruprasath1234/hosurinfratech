"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  
  "/services/icon-1.jpg",
  "/services/machine-1.jpg",
  "/services/machine-2.jpg",
  "/services/Duct.jpg",
  "/services/start.jpg",
];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-slate-100">
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-blue-900 uppercase">
        HOSUR INFRATECH
      </h2>



    
          {/* ✅ FIXED HEADING */}
      <h2 className="text-1xl sm:text-2xl lg:text-3xl font-semibold text-red-500 leading-tight">
        Exceeding Expectations
      </h2>


            <br />
          <p className="text-sm sm:text-base text-slate-700 max-w-xl">
            HOSUR INFRATECH is a partner for HVAC,
            laboratory, educational, and Clean Room  projects across South India.
            We engineer reliable environments that enable research, learning,
            and everyday life.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/contact">
              <Button>Discuss a Project</Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline">View Our Projects</Button>
            </Link>
          </div>

          <div className="flex gap-8 pt-4 text-xs text-slate-600">
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

        {/* RIGHT IMAGE CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative h-72 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-xl"
        >
          {images.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="Hosur Infratech Projects"
              fill
              className={`object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              priority={i === 0}
            />
          ))}

          <motion.div
            className="absolute -bottom-4 -right-4 h-24 w-24 rounded-3xl bg-primary/10 border border-primary/30"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

      </div>
    </section>
  );
};
