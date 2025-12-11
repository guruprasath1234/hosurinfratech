export default function HVACProjectPage() {
  return (
    <div className="section-padding max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">
        Industrial HVAC Project
      </h1>

      <img
        src="/projects/hvac.jpg"
        className="w-full rounded-xl shadow-md"
        alt="HVAC Project"
      />

      <p className="text-slate-700 leading-relaxed text-base">
        This project involved the complete HVAC setup for a large-scale
        industrial production facility requiring precision cooling, clean air
        flow management, and strict adherence to safety and compliance
        protocols. Our team handled everything from design to commissioning,
        ensuring reliable performance and energy-efficient operation.
      </p>

      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">
          Scope of Work
        </h2>
        <ul className="list-disc pl-5 text-slate-700 space-y-2">
          <li>Centralized HVAC system planning & heat load calculation</li>
          <li>Fabrication and installation of MS & GI ducting networks</li>
          <li>Air handling units (AHU) and fresh air ventilation setup</li>
          <li>Industrial exhaust and fume extraction systems</li>
          <li>Insulation, vibration control & acoustic treatment</li>
          <li>Electrical integration and controls automation</li>
          <li>Testing, balancing and final system commissioning</li>
        </ul>
      </div>

      <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
        <h2 className="text-xl font-semibold text-primary mb-3">
          Project Highlights
        </h2>
        <ul className="list-disc pl-5 text-slate-700 space-y-2">
          <li>Designed for continuous 24×7 industrial operations</li>
          <li>Optimized airflow distribution across multiple production zones</li>
          <li>Reduced energy consumption with high-efficiency components</li>
          <li>Achieved excellent indoor air quality under strict regulations</li>
        </ul>
      </div>

      <p className="text-slate-700 text-base leading-relaxed">
        The project was completed within the scheduled timeline, ensuring
        uninterrupted production workflows. Our HVAC installation continues to
        deliver balanced temperatures, efficient air changes, and dependable
        performance, supporting the facility’s daily operations.
      </p>
    </div>
  );
}
