"use client";

import { useState } from "react";

export default function AboutPage() {
  const [selected, setSelected] = useState<any>(null);

  const founders = [
    {
      name: "Mr. Annamalai",
      role: "Founder & Chief Executive Officer",
      image: "/ceo2.jpeg",
      details:
        "Mr. Annamalai is the visionary founder of HOSUR INFRATECH with extensive experience in HVAC, clean room and turnkey infrastructure projects. He leads with a strong focus on quality, safety and long-term reliability.",
    },
    {
      name: "Mr. Senthil Vel",
      role: "Managing Director",
      image: "/ceo1.jpeg",
      details:
        "Mr. Senthil Vel manages operations and execution. He ensures project safety, on-time delivery and high-quality standards across all infrastructure projects.",
    },
  ];

  return (
    <div className="section-padding max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About HOSUR INFRATECH</h1>

      <p className="text-slate-700 mb-10">
        HOSUR INFRATECH delivers turnkey HVAC, Laboratory, Educational and Clean Room
       projects across South India.
      </p>

      <h2 className="text-2xl font-semibold mb-8">
        Meet Our Founders & CEOs
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {founders.map((person, i) => (
          <div
            key={i}
            onClick={() => setSelected(person)}
            className="border rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg transition"
          >
            <div className="w-48 h-56 mx-auto overflow-hidden rounded-xl">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="mt-4 font-semibold">{person.name}</h3>
            <p className="text-sm text-slate-500">{person.role}</p>
            <p className="text-xs text-blue-600 mt-2">
              Click to view profile →
            </p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-lg relative">
            <button
              className="absolute top-3 right-3"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <div className="text-center">
              <div className="w-40 h-48 mx-auto mb-4 rounded-xl overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-semibold text-lg">{selected.name}</h3>
              <p className="text-sm text-slate-500 mb-4">{selected.role}</p>
              <p className="text-sm text-slate-700">{selected.details}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
