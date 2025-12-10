import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { AdminUser } from "@/models/AdminUser";
import bcrypt from "bcryptjs";
import { signAdminToken } from "@/lib/auth";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL as string;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD as string;

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "Admin credentials not configured" },
      { status: 500 }
    );
  }

  await connectToDB();
  let user = await AdminUser.findOne({ email: ADMIN_EMAIL });

  if (!user) {
    const hashed = await bcrypt.hash(ADMIN_PASSWORD, 10);
    user = await AdminUser.create({ email: ADMIN_EMAIL, password: hashed });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid || email !== ADMIN_EMAIL) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = signAdminToken({ id: user._id.toString(), email: user.email });

  const res = NextResponse.json({ success: true }, { status: 200 });
  res.cookies.set("admin_token", token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });

  return res;
}
