import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="section-padding max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* ✅ 1. HVAC */}
        <div className="flex gap-4 border rounded-2xl p-5 items-center">
          <img
            src="/services/hvac.jpg"
            className="w-20 h-20 rounded-lg object-cover"
            alt="HVAC"
          />
          <div>
            <h3 className="font-semibold">HVAC & Exhaust Ducting</h3>
            <p className="text-sm text-slate-600">
              Complete HVAC and exhaust ducting solutions.
            </p>
            <Link href="/services/hvac" className="text-primary text-sm">
              Click to view more →
            </Link>
          </div>
        </div>

        {/* ✅ 2. LAB */}
        <div className="flex gap-4 border rounded-2xl p-5 items-center">
          <img
            src="/services/lab.jpg"
            className="w-20 h-20 rounded-lg object-cover"
            alt="Lab"
          />
          <div>
            <h3 className="font-semibold">Lab & Education Infrastructure</h3>
            <p className="text-sm text-slate-600">
              Turnkey lab and education infrastructure setup.
            </p>
            <Link href="/services/lab" className="text-primary text-sm">
              Click to view more →
            </Link>
          </div>
        </div>

        {/* ✅ 3. INTERIOR */}
        <div className="flex gap-4 border rounded-2xl p-5 items-center">
          <img
            src="/services/interior.jpg"
            className="w-20 h-20 rounded-lg object-cover"
            alt="Interior"
          />
          <div>
            <h3 className="font-semibold">Residential & Commercial Interior Work</h3>
            <p className="text-sm text-slate-600">
              Interior fit-outs for homes and offices.
            </p>
            <Link href="/services/interior" className="text-primary text-sm">
              Click to view more →
            </Link>
          </div>
        </div>

        {/* ✅ 4. INSTALLATION */}
        <div className="flex gap-4 border rounded-2xl p-5 items-center">
          <img
            src="/services/installation.jpg"
            className="w-20 h-20 rounded-lg object-cover"
            alt="Installation"
          />
          <div>
            <h3 className="font-semibold">Installation & Service</h3>
            <p className="text-sm text-slate-600">
              Professional system installation & AMC support.
            </p>
            <Link href="/services/installation" className="text-primary text-sm">
              Click to view more →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
