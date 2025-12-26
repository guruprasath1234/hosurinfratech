import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | HOSUR INFRATECH",
  description: "About HOSUR INFRATECH company and founders",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
