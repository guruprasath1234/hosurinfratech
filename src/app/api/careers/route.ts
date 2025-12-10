import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { Career } from "@/models/Career";

export const runtime = "nodejs";

export async function GET() {
  await connectToDB();
  const jobs = await Career.find({ resumePath: { $exists: false } }).sort({
    createdAt: -1
  });
  return NextResponse.json({ jobs }, { status: 200 });
}

export async function POST(req: NextRequest) {
  await connectToDB();
  const body = await req.json();
  const job = await Career.create(body);
  return NextResponse.json({ job }, { status: 201 });
}

export async function PUT(req: NextRequest) {
  await connectToDB();
  const body = await req.json();
  const { _id, ...rest } = body;
  const job = await Career.findByIdAndUpdate(_id, rest, { new: true });
  return NextResponse.json({ job }, { status: 200 });
}
