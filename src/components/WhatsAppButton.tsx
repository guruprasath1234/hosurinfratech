"use client";

import { useState } from "react";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const message = encodeURIComponent(
    "Hi HOSUR INFRATECH, I am interested in your services. Please contact me."
  );

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">

      {/* ✅ CONTACT LIST */}
      {open && (
        <div className="w-72 rounded-2xl border bg-white shadow-xl overflow-hidden text-sm">

          {/* Header */}
          <div className="bg-green-500 text-white px-4 py-3 text-center">
            <p className="font-semibold">Chat with HOSUR INFRATECH</p>
            <p className="text-xs opacity-90">Office Time: 9:30 AM – 7:00 PM</p>
          </div>

          {/* ✅ Annamalai */}
          <a
            href={`https://api.whatsapp.com/send?phone=919901018556&text=Hello%20there!`}
            target="_blank"
            className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition"
          >
            <img 
              src="/ceo2.jpeg"
              alt="Annamalai"
              className="w-10 h-10 rounded-full object-cover border"
            />
            <div>
              <p className="font-medium">Annamalai</p>
              <p className="text-xs text-slate-500">Managing Director</p>
            </div>
          </a>

          {/* ✅ Senthil Vel */}
          <a
            href={`https://api.whatsapp.com/send?phone=919945600097&text=Hello%20there!`}
            target="_blank"
            className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition"
          >
            <img
              src="/ceo1.jpeg"
              alt="Senthil Vel"
              className="w-10 h-10 rounded-full object-cover border"
            />
            <div>
              <p className="font-medium">Senthil Vel</p>
              <p className="text-xs text-slate-500">Operations Head</p>
            </div>
          </a>

        </div>
      )}

      {/* ✅ MAIN FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg hover:bg-green-600 transition"
      >
        💬 <span className="text-sm font-medium">Chat on WhatsApp</span>
      </button>
    </div>
  );
}
