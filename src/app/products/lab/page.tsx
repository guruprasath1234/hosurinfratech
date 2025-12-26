import Image from "next/image";

export default function LabProductPage() {
  return (
    <section className="section-padding max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold">
        Lab & Education Infrastructure
      </h1>

      <Image
        src="/services/lab.jpg"
        alt="Lab & Education Infrastructure"
        width={900}
        height={450}
        className="rounded-xl w-full object-cover"
      />

      <p className="text-sm text-slate-700 leading-relaxed">
        We execute complete turnkey laboratory and educational infrastructure
        projects for schools, colleges, universities and research institutions.
        <br /><br />
        Our scope includes modular lab furniture, HVAC ventilation systems,
        safety equipment, gas piping, electrical utilities and ergonomic
        workspace planning.
        <br /><br />
        Every setup is designed to meet academic standards, safety regulations
        and workflow efficiency, supporting research, experimentation and
        learning environments.
        <br /><br />
        From concept to commissioning, we deliver reliable and compliant lab
        infrastructures built for long-term performance.
      </p>
    </section>
  );
}
