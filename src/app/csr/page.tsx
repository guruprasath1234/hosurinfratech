import Link from "next/link";

export default function CSRPage() {
  return (
    <div className="section-padding max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Our CSR Activities</h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* ✅ Education CSR */}
        <div className="flex gap-4 border rounded-2xl p-5">
          <img
            src="/csr/education.jpg"
            className="w-20 h-20 rounded-lg object-cover"
            alt="Education CSR"
          />
          <div>
            <h3 className="font-semibold">Education Support</h3>
            <p className="text-sm text-slate-600">
              School & student infrastructure development.
            </p>
            <Link href="/csr/education" className="text-primary text-sm">
              Click to view more →
            </Link>
          </div>
        </div>

        {/* ✅ Community CSR */}
        <div className="flex gap-4 border rounded-2xl p-5">
          <img
            src="/csr/community.jpg"
            className="w-20 h-20 rounded-lg object-cover"
            alt="Community CSR"
          />
          <div>
            <h3 className="font-semibold">Community Welfare</h3>
            <p className="text-sm text-slate-600">
              Social welfare & development programs.
            </p>
            <Link href="/csr/community" className="text-primary text-sm">
              Click to view more →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
