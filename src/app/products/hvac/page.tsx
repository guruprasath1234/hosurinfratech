import Image from "next/image";

export default function HVACProductPage() {
  return (
    <section className="section-padding max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold">HVAC Systems</h1>

      <Image
        src="/services/hvac.jpg"
        alt="HVAC Systems"
        width={900}
        height={450}
        className="rounded-xl w-full object-cover"
      />

      <p className="text-sm text-slate-700 leading-relaxed">
        We provide complete HVAC system solutions including design, duct
        fabrication, installation, testing and commissioning for industrial,
        commercial and laboratory environments.
        <br /><br />
        Our systems are engineered for energy efficiency, safety compliance and
        long-term reliability, ensuring optimal indoor air quality and comfort.
        <br /><br />
        From planning to execution, our expert team delivers HVAC solutions that
        meet strict operational and performance standards.
      </p>
    </section>
  );
}
