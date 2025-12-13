import type { Metadata } from "next";
import { AnimationWrapper } from "@/components/AnimationWrapper";

export const metadata: Metadata = {
  title: "Contact | HOSUR INFRATECH",
  description: "Contact page coming soon for HOSUR INFRATECH.",
};

export default function ContactPage() {
  return (
    <div className="section-padding min-h-[70vh] flex items-center justify-center">
      <AnimationWrapper>
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 animate-pulse">
            Coming Soon . . .
          </h1>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Our products page is under development.  
            Please check back shortly.
          </p>
        </div>
      </AnimationWrapper>
    </div>
  );
}
