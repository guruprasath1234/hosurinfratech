import Image from "next/image";

export default function InstallationProductPage() {
  return (
    <section className="section-padding max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold">
        Installation & Service
      </h1>

      <Image
        src="/services/service.jpg"
        alt="Installation & Service"
        width={900}
        height={450}
        className="rounded-xl w-full object-cover"
      />

      <p className="text-sm text-slate-700 leading-relaxed">
        We provide complete installation and service support for HVAC,
        laboratory, electrical and interior infrastructure systems with a
        strong focus on safety and long-term reliability.
        <br /><br />
        Our technicians handle on-site installation, testing, commissioning and
        preventive maintenance to ensure all systems operate efficiently and
        meet industry standards.
        <br /><br />
        We offer regular service visits, AMCs (Annual Maintenance Contracts),
        emergency breakdown support and performance monitoring to keep your
        infrastructure running smoothly without interruptions.
        <br /><br />
        Our goal is to deliver reliable, timely and professional service that
        extends equipment lifespan and ensures optimal performance at all times.
      </p>
    </section>
  );
}
