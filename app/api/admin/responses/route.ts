import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "../auth/route";
import clientPromise from "@/lib/mongodb";

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
    const client = await clientPromise;
    const db = client.db("caffio-survey");
    const responses = await db.collection("responses").find({}).toArray();
    return NextResponse.json(responses);
  } catch {
    return NextResponse.json([]);
  }
}
