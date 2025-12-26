"use client";
import { useEffect, useState } from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { AnimationWrapper } from "@/components/AnimationWrapper";
import { ServiceCard } from "@/components/ServiceCard";
import { defaultServices } from "@/data/services";
import { Testimonials } from "@/components/Testimonials";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Loader } from "@/components/Loader";


export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // loading duration

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Hero />

      <section className="section-padding">
        <div className="max-w-6xl mx-auto space-y-6">
          <AnimationWrapper>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  Services
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                  Infratech engineered for performance
                </h2>
              </div>
              <Link href="/services" className="hidden sm:inline-flex">
                <Button variant="outline" className="text-xs">
                  View all services
                </Button>
              </Link>
            </div>
          </AnimationWrapper>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {defaultServices.map((s) => (
              <ServiceCard
                key={s.title}
                title={s.title}
                description={s.description}
                category={s.category}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 items-center">
          <AnimationWrapper>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                About
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">
                Trusted engineering partner in Hosur
              </h2>
              <p className="text-sm text-slate-700 mb-3">
                HOSUR INFRATECH brings together experience in HVAC, lab
                infrastructure, and Clean room to deliver reliable, compliant,
                and future-ready facilities for clients across manufacturing,
                education, and research.
              </p>
              <p className="text-sm text-slate-700">
                Our teams work closely with consultants, architects, and
                facility owners from design to handover, ensuring every system
                is coordinated, documented, and maintainable.
              </p>
              <Link href="/about">
                <Button className="mt-4 text-xs">Know more about us</Button>
              </Link>
            </div>
          </AnimationWrapper>
          <AnimationWrapper delay={0.1}>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4 text-xs text-slate-700">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold text-slate-900">
                    Design to handover
                  </p>
                  <p>Coordinated project delivery</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Single window</p>
                  <p>For MEP & interiors</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div>
                  <p className="text-2xl font-semibold text-primary">50+</p>
                  <p className="text-[11px]">Projects executed</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-primary">20+</p>
                  <p className="text-[11px]">Institutional clients</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-primary">24x7</p>
                  <p className="text-[11px]">Service support</p>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto space-y-6">
          <AnimationWrapper>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  Projects
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                  Featured work
                </h2>
              </div>
              <Link href="/projects" className="hidden sm:inline-flex">
                <Button variant="outline" className="text-xs">
                  Explore all projects
                </Button>
              </Link>
            </div>
          </AnimationWrapper>
          <p className="text-sm text-slate-700 max-w-2xl">
            A quick snapshot of turnkey projects executed across laboratories,
            industrial facilities, and cleanroom solution.
          </p>
          {/* In a real app we could fetch featured projects here */}
          <div className="rounded-3xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
            Project slider placeholder – connect to /api/projects or enhance
            with a carousel of featured work.
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section-padding bg-primary">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-blue-100 uppercase">
              Contact
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Ready to start your next project?
            </h2>
            <p className="text-sm text-blue-100 max-w-md mt-2">
              Share a brief about your requirement and our team will connect
              with you to understand the scope, timelines, and budget.
            </p>
          </div>
          <Link href="/contact">
            <Button variant="outline" className="border-white text-white">
              Send an enquiry
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
