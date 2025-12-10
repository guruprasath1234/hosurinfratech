import type { Metadata } from "next";
import { AnimationWrapper } from "@/components/AnimationWrapper";

export const metadata: Metadata = {
  title: "Contact | HOSUR INFRATECH",
  description: "Contact HOSUR INFRATECH for HVAC, Lab, and Interior projects.",
};

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* ✅ HEADER */}
        <AnimationWrapper>
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Contact HOSUR INFRATECH
            </h1>
            <p className="text-sm text-slate-700 max-w-2xl">
              Reach out to us for consultations, site inspections, and turnkey
              infrastructure solutions.
            </p>
          </div>
        </AnimationWrapper>

        {/* ✅ CONTACT DETAILS + FORM */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* ✅ CONTACT DETAILS */}
          <AnimationWrapper>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm">
              <h2 className="font-semibold text-slate-900">Office Address</h2>

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
          </AnimationWrapper>

          {/* ✅ CONTACT FORM */}
          <AnimationWrapper>
            <form className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="font-semibold text-slate-900 text-sm">
                Send a Message
              </h2>

              <input
                placeholder="Your Name"
                className="w-full border rounded p-2 text-xs"
              />

              <input
                placeholder="Your Email"
                className="w-full border rounded p-2 text-xs"
              />

              <input
                placeholder="Your Phone"
                className="w-full border rounded p-2 text-xs"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border rounded p-2 text-xs"
              />

              <button className="bg-primary text-white px-5 py-2 rounded-full text-xs">
                Submit
              </button>
            </form>
          </AnimationWrapper>
        </div>

        {/* ✅ ✅ ✅ GOOGLE MAP - EXACT HOSUR INFRATECH LOCATION */}
        <AnimationWrapper>
          <div className="rounded-3xl overflow-hidden border border-slate-200">
            {/* ✅ GOOGLE MAP - EXACT GIVEN ADDRESS */}
<div className="rounded-3xl overflow-hidden border border-slate-200">
  <iframe
    src="https://maps.google.com/maps?q=500/24,%20ESI%20Ring%20Road,%20Motham%20Agraharam,%20Hosur%20635126&t=&z=17&ie=UTF8&iwloc=&output=embed"
    width="100%"
    height="350"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

          </div>
        </AnimationWrapper>

      </div>
    </div>
  );
}
