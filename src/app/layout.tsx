import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// ✅ Import metadata from home-metadata
import { metadata as homeMetadata } from "./home-metadata";

// ✅ Use the imported metadata
export const metadata: Metadata = homeMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        {/* ✅ Navbar */}
        <Navbar />

        {/* ✅ Page Content */}
        <main>{children}</main>

        {/* ✅ Footer */}
        <Footer />

        {/* ✅ WhatsApp Floating Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
