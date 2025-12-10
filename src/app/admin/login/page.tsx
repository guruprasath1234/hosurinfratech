"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Login failed");
      return;
    }
    router.push("/admin/dashboard");
  };

  return (
    <div className="section-padding">
      <div className="max-w-md mx-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold text-slate-900 mb-4">
          Admin Login
        </h1>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <label className="text-xs font-medium text-slate-700">
            Email
            <input
              type="email"
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="text-xs font-medium text-slate-700">
            Password
            <input
              type="password"
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {error && (
            <p className="text-xs text-red-500">
              {error}
            </p>
          )}
          <button className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-xs font-medium text-white hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
