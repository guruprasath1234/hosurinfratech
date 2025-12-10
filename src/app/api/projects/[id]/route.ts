import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { Project } from "@/models/Project";

interface Params {
  params: { id: string };
}

export async function DELETE(req: NextRequest, { params }: Params) {
  await connectToDB();
  await Project.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
