export default function HVACPage() {
  return (
    <div className="section-padding max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">
        HVAC & Exhaust Ducting
      </h1>

      <img
        src="/services/hvac.jpg"
        className="rounded-xl w-full shadow-md"
        alt="HVAC and Ducting Services"
      />

      <p className="text-base text-slate-700 leading-relaxed">
        We deliver end-to-end Heating, Ventilation & Air Conditioning (HVAC)
        solutions including system design, fabrication, installation, testing
        and commissioning. Our services cater to industrial facilities,
        commercial buildings, clean rooms, laboratories, and high-precision
        environments requiring controlled air flow and temperature management.
      </p>

      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
        <h2 className="text-xl font-semibold mb-3 text-slate-900">
          Our HVAC Expertise
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Complete HVAC system design & technical planning</li>
          <li>Duct fabrication using high-quality GI, MS, SS & aluminium sheets</li>
          <li>Exhaust, fresh air & ventilation duct installation</li>
          <li>Air handling units (AHU), FCU & ventilation systems setup</li>
          <li>Testing, balancing & commissioning as per industry standards</li>
          <li>Maintenance & performance optimization</li>
        </ul>
      </div>

      <p className="text-base text-slate-700 leading-relaxed">
        Our team ensures energy-efficient, durable and compliant HVAC systems,
        tailored to the unique requirements of each project for optimal
        performance and air quality.
      </p>
    </div>
  );
}
