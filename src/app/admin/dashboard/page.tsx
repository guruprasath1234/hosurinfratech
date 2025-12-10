"use client";

import { redirect } from "next/navigation";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { AdminServiceForm } from "@/components/AdminServiceForm";
import { AnimationWrapper } from "@/components/AnimationWrapper";
import { useState } from "react";

export default function AdminDashboardPage() {
  // For brevity, we only wire services section with full CRUD here.
  // Projects, careers, and contacts can follow the same pattern.

  return (
    <div className="section-padding">
      <div className="max-w-6xl mx-auto rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col md:flex-row">
        <DashboardSidebarWrapper />
      </div>
    </div>
  );
}

function DashboardSidebarWrapper() {
  const [active, setActive] = useState("services");

  return (
    <>
      <DashboardSidebar active={active} onChange={setActive} />
      <div className="flex-1 p-4 md:p-6 space-y-4">
        <AnimationWrapper>
          <h1 className="text-lg font-semibold text-slate-900">
            {active === "services" && "Services"}
            {active === "projects" && "Projects"}
            {active === "careers" && "Careers"}
            {active === "contacts" && "Contact Entries"}
          </h1>
        </AnimationWrapper>

        {active === "services" && <AdminServiceForm />}
        {active !== "services" && (
          <p className="text-sm text-slate-500">
            UI for this section can be extended similar to services, using the
            respective /api endpoints.
          </p>
        )}
      </div>
    </>
  );
}
