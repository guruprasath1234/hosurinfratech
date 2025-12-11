export default function InteriorPage() {
  return (
    <div className="section-padding max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">
        Residential & Commercial Interior Work
      </h1>

      <img
        src="/services/interior.jpg"
        className="rounded-xl w-full shadow-md"
        alt="Interior Design and Execution"
      />

      <p className="text-base text-slate-700 leading-relaxed">
        We specialize in delivering premium interior solutions for villas,
        apartments, offices, showrooms and commercial buildings. From concept
        planning to flawless execution, our team ensures modern design,
        functional layouts and high-quality finishes tailored to each client's
        lifestyle and requirements.
      </p>

      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
        <h2 className="text-xl font-semibold mb-3 text-slate-900">
          Our Interior Work Expertise
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Modular kitchens, wardrobes & customized furniture</li>
          <li>False ceiling design & LED lighting setups</li>
          <li>Complete electrical, plumbing & utility planning</li>
          <li>Glass partitions, aluminum fabrication & carpentry work</li>
          <li>Painting, wall cladding, texture finish & surface treatment</li>
          <li>Office interior execution with workstation layouts</li>
          <li>End-to-end project management & quality supervision</li>
        </ul>
      </div>

      <p className="text-base text-slate-700 leading-relaxed">
        Our interior projects combine durability, aesthetics and functionality,
        ensuring spaces that not only look stunning but also enhance everyday
        comfort and productivity.
      </p>
    </div>
  );
}
