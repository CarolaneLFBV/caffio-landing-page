import { NextResponse } from "next/server";
import crypto from "crypto";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.frequency || !body.expertise || !body.designPriority) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    const entry = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      frequency: body.frequency,
      coffeeTypes: body.coffeeTypes || [],
      equipment: body.equipment || [],
      expertise: body.expertise,
      features: body.features || [],
      mostImportantFeature: body.mostImportantFeature || "",
      featureSuggestion: body.featureSuggestion || "",
      designPriority: body.designPriority,
      darkMode: body.darkMode || "",
      otherApps: body.otherApps || "",
      comments: body.comments || "",
    };

    const client = await clientPromise;
    const db = client.db("caffio-survey");
    await db.collection("responses").insertOne(entry);

    return NextResponse.json(
      { message: "Reponse enregistree avec succes", id: entry.id },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
