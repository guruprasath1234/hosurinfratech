"use client";

import { useEffect, useState } from "react";

interface Service {
  _id?: string;
  title: string;
  description: string;
  category: string;
}

export const AdminServiceForm = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [form, setForm] = useState<Service>({
    title: "",
    description: "",
    category: ""
  });
  const [loading, setLoading] = useState(false);

  const fetchServices = async () => {
    const res = await fetch("/api/services");
    const data = await res.json();
    setServices(data.services || []);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/services", {
      method: form._id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    setForm({ title: "", description: "", category: "" });
    setLoading(false);
    fetchServices();
  };

  const handleEdit = (s: Service) => setForm(s);

  const handleDelete = async (id?: string) => {
    if (!id) return;
    await fetch(`/api/services/${id}`, { method: "DELETE" });
    fetchServices();
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="rounded-xl border border-slate-200 bg-white p-4 space-y-3"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="text-xs font-medium text-slate-700">
              Title
              <input
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                value={form.title}
                onChange={(e) =>
                  setForm((f) => ({ ...f, title: e.target.value }))
                }
                required
              />
            </label>
          </div>
          <div>
            <label className="text-xs font-medium text-slate-700">
              Category
              <input
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                value={form.category}
                onChange={(e) =>
                  setForm((f) => ({ ...f, category: e.target.value }))
                }
                required
              />
            </label>
          </div>
        </div>
        <div>
          <label className="text-xs font-medium text-slate-700">
            Description
            <textarea
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              rows={3}
              value={form.description}
              onChange={(e) =>
                setForm((f) => ({ ...f, description: e.target.value }))
              }
              required
            />
          </label>
        </div>
        <button
          disabled={loading}
          className="inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
        >
          {form._id ? "Update Service" : "Add Service"}
        </button>
      </form>

      <div className="grid gap-3 md:grid-cols-2">
        {services.map((s) => (
          <div
            key={s._id}
            className="rounded-xl border border-slate-200 bg-white p-4 space-y-1 text-sm"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-primary">
              {s.category}
            </p>
            <p className="font-semibold text-slate-900">{s.title}</p>
            <p className="text-xs text-slate-600 line-clamp-3">
              {s.description}
            </p>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => handleEdit(s)}
                className="text-xs text-primary"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(s._id)}
                className="text-xs text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
