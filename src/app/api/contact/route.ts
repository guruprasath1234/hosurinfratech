import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // ✅ ONE FIXED SENDER (ANY GMAIL YOU OWN)
    const SENDER_EMAIL = "balakrishnanmh22@gmail.com";
    const SENDER_PASS = "szokmosupxlqrtzt"; // app password

    // ✅ ALWAYS FIXED RECEIVER
    const RECEIVER_EMAIL = "hosurinfratech24@gmail.com";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SENDER_EMAIL,
        pass: SENDER_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Enquiry" <${SENDER_EMAIL}>`,
      to: RECEIVER_EMAIL,          // ✅ COMPANY MAIL
      replyTo: email,             // ✅ CUSTOMER MAIL
      subject: "New Contact Enquiry - HOSUR INFRATECH",
      html: `
        <h2>New Website Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}
