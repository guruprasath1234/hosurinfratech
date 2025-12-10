import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { Career } from "@/models/Career";

interface Params {
  params: { id: string };
}

export async function DELETE(req: NextRequest, { params }: Params) {
  await connectToDB();
  await Career.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
