import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "HOSUR INFRATECH",
  description: "Exceeding Expectations in Infrastructure Solutions",
  icons: {
    icon: [
      { url: "/favicon.ico", media: "(prefers-color-scheme: light)" },
      { url: "/favicon.ico", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

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