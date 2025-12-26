"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Encode values (VERY IMPORTANT)
    const subject = encodeURIComponent(
      "New Project Enquiry - Hosur Infratech"
    );

    const body = encodeURIComponent(
      `Hello Hosur Infratech Team,

A new enquiry has been received.

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Message:
${form.message}

Regards,
${form.name}`
    );

    // ✅ OPEN GMAIL / MAIL APP
    window.location.href = `mailto:hosurinfratech24@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={form.name}
        onChange={handleChange}
        className="w-full border rounded-md px-3 py-2"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={form.email}
        onChange={handleChange}
        className="w-full border rounded-md px-3 py-2"
      />

      <input
        type="text"
        name="phone"
        placeholder="Your Phone"
        required
        value={form.phone}
        onChange={handleChange}
        className="w-full border rounded-md px-3 py-2"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        required
        value={form.message}
        onChange={handleChange}
        className="w-full border rounded-md px-3 py-2"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
