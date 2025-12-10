import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | HOSUR INFRATECH",
  description: "About HOSUR INFRATECH company and founders",
};

export default function AboutPage() {
  return (
    <div className="section-padding max-w-6xl mx-auto">

      <h1 className="text-3xl font-bold mb-4">
        About HOSUR INFRATECH
      </h1>

      <p className="text-slate-700 mb-10">
        HOSUR INFRATECH delivers turnkey HVAC, Laboratory, Educational and Interior
        infrastructure projects across South India with safety, quality and long-term reliability.
      </p>

      <h2 className="text-2xl font-semibold mb-8">
        Meet Our Founders & CEOs
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* ✅ CEO 1 */}
        <div className="border rounded-2xl p-6 text-center">
          <div className="overflow-hidden rounded-full w-40 h-40 mx-auto">
            <img
              src="/ceo2.jpeg"
              alt="Annamalai"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          <h3 className="mt-4 font-semibold">Mr. Annamalai</h3>

          <p className="text-sm text-slate-500">
            Founder & Chief Executive Officer
          </p>

          <p className="mt-2 text-sm text-slate-600">
            Visionary leader driving innovation, quality and infrastructure excellence.
          </p>
        </div>

        {/* ✅ CEO 2 */}
        <div className="border rounded-2xl p-6 text-center">
          <div className="overflow-hidden rounded-full w-40 h-40 mx-auto">
            <img
              src="/ceo1.jpeg"
              alt="Senthil Vel"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          <h3 className="mt-4 font-semibold">Mr. Senthil Vel</h3>

          <p className="text-sm text-slate-500">
            Managing Director
          </p>

          <p className="mt-2 text-sm text-slate-600">
            Expert in operations and project execution ensuring safety and delivery.
          </p>
        </div>

      </div>
    </div>
  );
}
