import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { Career } from "@/models/Career";
import path from "path";
import { promises as fs } from "fs";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const jobId = formData.get("jobId") as string;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const file = formData.get("resume") as File | null;

  if (!jobId || !name || !email || !file) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(uploadDir, { recursive: true });
  const filePath = path.join(uploadDir, `${Date.now()}-${file.name}`);
  await fs.writeFile(filePath, new Uint8Array(buffer));

  await connectToDB();
  await Career.create({
    title: "Application",
    location: "",
    department: "",
    type: "",
    description: "",
    resumePath: `/uploads/${path.basename(filePath)}`,
    applicantName: name,
    applicantEmail: email
  });

  return NextResponse.json({ success: true });
}
