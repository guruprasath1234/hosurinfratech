import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { Project } from "@/models/Project";
import { defaultProjects } from "@/data/projects";

export async function GET() {
  await connectToDB();
  const projects = await Project.find().sort({ createdAt: -1 });
  if (!projects.length) {
    return NextResponse.json({ projects: defaultProjects }, { status: 200 });
  }
  return NextResponse.json({ projects }, { status: 200 });
}

export async function POST(req: NextRequest) {
  await connectToDB();
  const body = await req.json();
  const project = await Project.create(body);
  return NextResponse.json({ project }, { status: 201 });
}

export async function PUT(req: NextRequest) {
  await connectToDB();
  const body = await req.json();
  const { _id, ...rest } = body;
  const project = await Project.findByIdAndUpdate(_id, rest, { new: true });
  return NextResponse.json({ project }, { status: 200 });
}
