import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { Service } from "@/models/Service";

interface Params {
  params: { id: string };
}

export async function DELETE(req: NextRequest, { params }: Params) {
  await connectToDB();
  await Service.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
