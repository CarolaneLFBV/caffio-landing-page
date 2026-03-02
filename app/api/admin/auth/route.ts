import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";

const TOKEN_NAME = "admin_token";
const SECRET = process.env.ADMIN_PASSWORD ?? "";

function generateToken(): string {
  return crypto
    .createHmac("sha256", SECRET)
    .update("caffio-admin")
    .digest("hex");
}

export function verifyToken(token: string): boolean {
  const expected = generateToken();
  return crypto.timingSafeEqual(
    Buffer.from(token),
    Buffer.from(expected)
  );
}

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (!password || password !== SECRET) {
      return NextResponse.json(
        { error: "Mot de passe incorrect" },
        { status: 401 }
      );
    }

    const token = generateToken();
    const cookieStore = await cookies();
    cookieStore.set(TOKEN_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24, // 24h
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.set(TOKEN_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });

  return NextResponse.json({ success: true });
}
