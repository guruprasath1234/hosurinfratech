export default function LabProjectPage() {
  return (
    <div className="section-padding max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">
        Laboratory Infrastructure Project
      </h1>

      <img
        src="/projects/lab.jpg"
        className="w-full rounded-xl shadow-md"
        alt="Lab Project"
      />

      <p className="text-slate-700 leading-relaxed text-base">
        This turnkey project involved the complete development of a
        high-performance laboratory for an educational and research institution.
        Our work focused on designing a safe, functional and future-ready
        environment that supports scientific learning, experimentation and
        innovation.
      </p>

      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-3">
          Scope of Work
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Planning and layout design for efficient lab workflow</li>
          <li>Installation of modular chemical-resistant lab furniture</li>
          <li>HVAC and exhaust ventilation system for clean airflow</li>
          <li>Fume hoods, ducting and safety exhaust installations</li>
          <li>Electrical wiring, lighting and utility point setup</li>
          <li>Emergency safety units including showers and eye-wash stations</li>
          <li>Gas pipelines, sinks and specialized plumbing connections</li>
        </ul>
      </div>

      <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
        <h2 className="text-xl font-semibold text-primary mb-3">
          Project Highlights
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Designed compliant with NABL/ISO lab safety standards</li>
          <li>Optimized workspace layout for teaching & research activities</li>
          <li>Energy-efficient ventilation and lighting solutions</li>
          <li>Durable, chemical-resistant furniture for long-term use</li>
        </ul>
      </div>

      <p className="text-slate-700 text-base leading-relaxed">
        The laboratory was handed over fully operational, equipped for practical
        sessions, research experiments and safe handling of chemicals. The
        facility now supports a wide range of academic and scientific programs,
        offering students and researchers a modern, reliable, and compliant lab
        environment.
      </p>
    </div>
  );
}
