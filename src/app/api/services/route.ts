import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { Service } from "@/models/Service";
import { defaultServices } from "@/data/services";

export async function GET() {
  await connectToDB();
  const services = await Service.find().sort({ createdAt: -1 });
  if (!services.length) {
    // seed defaults in-memory response, but don't write if not needed
    return NextResponse.json({ services: defaultServices }, { status: 200 });
  }
  return NextResponse.json({ services }, { status: 200 });
}

export async function POST(req: NextRequest) {
  await connectToDB();
  const body = await req.json();
  const service = await Service.create(body);
  return NextResponse.json({ service }, { status: 201 });
}

export async function PUT(req: NextRequest) {
  await connectToDB();
  const body = await req.json();
  const { _id, ...rest } = body;
  const service = await Service.findByIdAndUpdate(_id, rest, { new: true });
  return NextResponse.json({ service }, { status: 200 });
}
