export default function LabPage() {
  return (
    <div className="section-padding max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">
        Lab & Education Infrastructure
      </h1>

      <img
        src="/services/lab.jpg"
        className="rounded-xl w-full shadow-md"
        alt="Laboratory Infrastructure"
      />

      <p className="text-base text-slate-700 leading-relaxed">
        We deliver complete laboratory and educational infrastructure solutions
        for schools, colleges, universities and research institutions. Our team
        ensures scientifically accurate layouts, compliant installations, and
        safe working environments suitable for both learning and research.
      </p>

      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
        <h2 className="text-xl font-semibold mb-3 text-slate-900">
          Our Laboratory Infrastructure Capabilities
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Turnkey lab setup: civil, MEP, HVAC and interior works</li>
          <li>Fume hoods, exhaust systems & ventilation planning</li>
          <li>Lab furniture: workbenches, storage units & chemical cabinets</li>
          <li>Safety setups: emergency showers, eye wash stations, spill kits</li>
          <li>Gas pipelines, utility points & energy-efficient layouts</li>
          <li>Electrification, controls and instrumentation wiring</li>
          <li>Fire safety compliance & NABL/ISO standard support</li>
        </ul>
      </div>

      <p className="text-base text-slate-700 leading-relaxed">
        Whether it’s a school science lab or a fully equipped research facility,
        our execution focuses on durability, safety, ergonomic design, and
        long-term maintainability ensuring future-ready infrastructure built
        to global standards.
      </p>
    </div>
  );
}
