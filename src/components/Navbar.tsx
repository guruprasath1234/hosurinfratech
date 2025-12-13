"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "CSR", href: "/csr" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" }
];


export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

        {/* ✅ LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="HOSUR INFRATECH Logo"
            className="h-9 w-auto"
          />
          <span className="font-semibold text-slate-900">
            HOSUR INFRATECH
          </span>
        </Link>

        {/* ✅ DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-slate-700 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* ✅ MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-slate-800"
        >
          ☰
        </button>
      </div>

      {/* ✅ MOBILE SLIDE MENU */}
      {open && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-4 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block ${
                pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-slate-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
