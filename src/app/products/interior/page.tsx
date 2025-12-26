import Image from "next/image";

export default function InteriorProductPage() {
  return (
    <section className="section-padding max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold">
        Residential & Commercial Interior Work
      </h1>

      <Image
        src="/services/interior.jpg"
        alt="Interior Work"
        width={900}
        height={450}
        className="rounded-xl w-full object-cover"
      />

      <p className="text-sm text-slate-700 leading-relaxed">
        We execute premium interior works for villas, apartments, offices, and
        commercial buildings with high-quality finishes.
        <br /><br />
        Our services include custom furniture design, modular kitchen
        installations, false ceilings, lighting layouts, space planning, and
        complete civil modifications tailored to each client’s requirements.
        <br /><br />
        We ensure the use of durable materials, detailed craftsmanship, and
        efficient project execution to transform any space into a functional and
        visually appealing environment.
        <br /><br />
        From concept to completion, our team delivers interior solutions that
        balance comfort, aesthetics, and long-lasting performance.
      </p>
    </section>
  );
}
