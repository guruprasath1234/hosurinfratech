import type { Metadata } from "next";
import Image from "next/image";
import { AnimationWrapper } from "@/components/AnimationWrapper";

export const metadata: Metadata = {
  title: "Products | HOSUR INFRATECH",
  description:
    "Explore HVAC, laboratory, interior and infratech products by HOSUR INFRATECH.",
};

const products = [
  {
    title: "HVAC Systems",
    desc: "High-performance HVAC systems for industrial, commercial and laboratory use.",
    img: "/services/hvac.jpg",
    link: "/products/hvac",
  },
  {
    title: "Laboratory Furniture",
    desc: "Modular lab furniture, workstations and safety-compliant infrastructure.",
    img: "/services/lab.jpg",
    link: "/products/lab",
  },
  {
    title: "Interior Solutions",
    desc: "Premium interior products for homes, offices and commercial buildings.",
    img: "/services/interior.jpg",
    link: "/products/interior",
  },
  {
    title: "Installation Components",
    desc: "Reliable installation accessories and system components with AMC support.",
    img: "/services/service.jpg",
    link: "/products/installation",
  },
    {
    title: "HVAC Systems",
    desc: "High-performance HVAC systems for industrial, commercial and laboratory use.",
    img: "/services/hvac.jpg",
    link: "/products/hvac",
  },
  {
    title: "Laboratory Furniture",
    desc: "Modular lab furniture, workstations and safety-compliant infrastructure.",
    img: "/services/lab.jpg",
    link: "/products/lab",
  },
  {
    title: "Interior Solutions",
    desc: "Premium interior products for homes, offices and commercial buildings.",
    img: "/services/interior.jpg",
    link: "/products/interior",
  },
  {
    title: "Installation Components",
    desc: "Reliable installation accessories and system components with AMC support.",
    img: "/services/service.jpg",
    link: "/products/installation",
  },
];

export default function ProductsPage() {
  return (
    <section className="section-padding max-w-6xl mx-auto">
      <AnimationWrapper>
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-slate-900 mb-10">
          Our Products
        </h1>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          {products.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 border rounded-xl hover:shadow-md transition bg-white"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={120}
                height={90}
                className="rounded-lg object-cover"
              />

              <div className="space-y-1">
                <h3 className="font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {item.desc}
                </p>
                <a
                  href={item.link}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Click to view more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </AnimationWrapper>
    </section>
  );
}
