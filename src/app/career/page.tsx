import type { Metadata } from "next";
import { AnimationWrapper } from "@/components/AnimationWrapper";

export const metadata: Metadata = {
  title: "Career | HOSUR INFRATECH",
  description:
    "Explore current openings and apply for roles at HOSUR INFRATECH."
};

async function getJobs() {
  try {
    const res = await fetch("http://localhost:3000/api/careers", {
      cache: "no-store"
    });

    if (!res.ok) return [];

    const data = await res.json();
    return data.jobs || [];
  } catch (error) {
    // Log error for debugging
    console.error("Failed to fetch jobs:", error);
    return [];
  }
}

export default async function CareerPage() {
  const jobs = await getJobs();

  return (
    <div className="section-padding">
      <div className="max-w-6xl mx-auto space-y-8">
        <AnimationWrapper>
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Careers
          </h1>
        </AnimationWrapper>

        {jobs.length === 0 ? (
          <div className="text-red-500">No job openings available at the moment.</div>
        ) : (
          jobs.map((job: any) => (
            <div
              key={job._id}
              className="rounded-2xl border border-slate-200 p-4 bg-white"
            >
              <h2 className="font-semibold">{job.title}</h2>
              <p className="text-xs text-slate-600">
                {job.location} • {job.type}
              </p>
              <p className="text-xs mt-2">{job.description}</p>
            </div>
          ))
        )}

        <AnimationWrapper>
          <form
            className="space-y-3 mt-6"
            action="/api/careers/apply"
            method="post"
            encType="multipart/form-data"
          >
            <h2 className="font-semibold">Upload Resume</h2>
            <input name="name" placeholder="Name" required className="border p-2 w-full" />
            <input name="email" type="email" placeholder="Email" required className="border p-2 w-full" />
            <input name="resume" type="file" required className="border p-2 w-full" />
            <button className="bg-primary text-white px-4 py-2 rounded">
              Submit
            </button>
          </form>
        </AnimationWrapper>
      </div>
    </div>
  );
}
