import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { promises as fs } from "fs";
import path from "path";
import { verifyToken } from "../auth/route";

const DATA_FILE = path.join(process.cwd(), "data", "responses.json");

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (!token) {
    return NextResponse.json(
      { error: "Non autorise" },
      { status: 401 }
    );
  }

  try {
    if (!verifyToken(token)) {
      return NextResponse.json(
        { error: "Token invalide" },
        { status: 401 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Token invalide" },
      { status: 401 }
    );
  }

  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    const responses = JSON.parse(data);
    return NextResponse.json(responses);
  } catch {
    return NextResponse.json([]);
  }
}
