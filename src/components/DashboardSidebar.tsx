"use client";

interface Props {
  active: string;
  onChange: (key: string) => void;
}

const items = [
  { key: "services", label: "Services" },
  { key: "projects", label: "Projects" },
  { key: "careers", label: "Careers" },
  { key: "contacts", label: "Contact Entries" }
];

export const DashboardSidebar = ({ active, onChange }: Props) => {
  return (
    <aside className="w-full md:w-60 border-r border-slate-200 bg-slate-50">
      <div className="p-4 border-b border-slate-200 text-sm font-semibold text-slate-900">
        Admin Dashboard
      </div>
      <nav className="p-3 space-y-1 text-sm">
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => onChange(item.key)}
            className={`w-full rounded-lg px-3 py-2 text-left ${
              active === item.key
                ? "bg-primary text-white"
                : "text-slate-700 hover:bg-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};
