import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="section-padding max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Our Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* ✅ HVAC Project */}
        <div className="flex gap-4 border rounded-2xl p-5">
          <img
            src="/projects/hvac.jpg"
            className="w-20 h-20 rounded-lg object-cover"
            alt="HVAC Project"
          />
          <div>
            <h3 className="font-semibold">Industrial HVAC Project</h3>
            <p className="text-sm text-slate-600">
              Large scale HVAC installation for factory.
            </p>
            <Link href="/projects/hvac" className="text-primary text-sm">
              Click to view more →
            </Link>
          </div>
        </div>

        {/* ✅ Lab Project */}
        <div className="flex gap-4 border rounded-2xl p-5">
          <img
            src="/projects/lab.jpg"
            className="w-20 h-20 rounded-lg object-cover"
            alt="Lab Project"
          />
          <div>
            <h3 className="font-semibold">Laboratory Setup</h3>
            <p className="text-sm text-slate-600">
              Turnkey lab infrastructure project.
            </p>
            <Link href="/projects/lab" className="text-primary text-sm">
              Click to view more →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
