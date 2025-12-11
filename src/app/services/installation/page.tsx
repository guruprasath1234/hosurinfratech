export default function InstallationPage() {
  return (
    <div className="section-padding max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">
        Installation & Service
      </h1>

      <img
        src="/services/interior.jpg"
        className="rounded-xl w-full shadow-md"
        alt="Installation and Service"
      />

      <p className="text-base text-slate-700 leading-relaxed">
        Our expert technicians deliver reliable system installation, preventive
        maintenance, emergency breakdown support and comprehensive AMC services.
        We ensure long-term performance, safety and seamless operation across
        industrial, commercial and residential environments.
      </p>

      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
        <h2 className="text-xl font-semibold mb-3 text-slate-900">
          What We Offer
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Professional installation of equipment & machinery</li>
          <li>Preventive maintenance to avoid operational downtime</li>
          <li>24/7 breakdown & emergency service support</li>
          <li>Annual Maintenance Contracts (AMC) for long-term reliability</li>
          <li>On-site inspection, calibration & performance checks</li>
          <li>Quick-response technical team with industry experience</li>
        </ul>
      </div>

      <p className="text-base text-slate-700 leading-relaxed">
        With a skilled and certified service team, we aim to deliver safe,
        efficient and dependable installation and maintenance solutions for all
        types of infrastructure projects.
      </p>
    </div>
  );
}
