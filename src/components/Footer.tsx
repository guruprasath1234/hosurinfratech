export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-4 text-sm">

        {/* ✅ COMPANY INFO */}
        <div className="space-y-3">
          <h2 className="font-semibold text-slate-900">HOSUR INFRATECH</h2>
          <p className="text-xs text-slate-700">
            Exceeding Expectations in Infrastructure Solutions.  
            HVAC, Lab, Interior & Installation specialists.
          </p>
        </div>

        {/* ✅ QUICK LINKS */}
        <div className="space-y-2">
          <h3 className="font-semibold text-slate-900">Quick Links</h3>
          <ul className="space-y-1 text-xs text-slate-700">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/about" className="hover:text-primary">About</a></li>
            <li><a href="/services" className="hover:text-primary">Services</a></li>
            <li><a href="/projects" className="hover:text-primary">Projects</a></li>
            <li><a href="/csr" className="hover:text-primary">CSR</a></li>
            <li><a href="/career" className="hover:text-primary">Career</a></li>
            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* ✅ SERVICES */}
        <div className="space-y-2">
          <h3 className="font-semibold text-slate-900">Our Services</h3>
          <ul className="space-y-1 text-xs text-slate-700">
            <li>HVAC & Exhaust Ducting</li>
            <li>Lab & Education Infrastructure</li>
            <li>Residential & Commercial Interior</li>
            <li>Installation & Service</li>
          </ul>
        </div>

        {/* ✅ CONTACT INFO (FROM VISITING CARD) */}
        <div className="space-y-2">
          <h3 className="font-semibold text-slate-900">Contact</h3>
          <p className="text-xs text-slate-700">
            #500/24, ESI Ring Road,  
            Motham Agraharam,  
            Hosur – 635 126
          </p>
          <p className="text-xs text-slate-700">
            📞 Annamalai: +91 99010 18556
          </p>
          <p className="text-xs text-slate-700">
            📞 Senthil Vel: +91 99456 00097
          </p>
          <p className="text-xs text-slate-700">
            ✉️ hosurinfratech24@gmail.com
          </p>
        </div>

      </div>

      {/* ✅ COPYRIGHT */}
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} HOSUR INFRATECH. All rights reserved.
      </div>
    </footer>
  );
}
