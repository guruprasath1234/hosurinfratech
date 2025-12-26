import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import ContactForm from "@/models/ContactForm";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await connectDB();

    await ContactForm.create({
      name,
      email,
      phone,
      message,
    });

    return NextResponse.json(
      { success: true, message: "Message saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

