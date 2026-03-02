import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

const DATA_FILE = path.join(process.cwd(), "data", "responses.json");

interface SurveyResponse {
  id: string;
  timestamp: string;
  frequency: string;
  coffeeTypes: string[];
  equipment: string[];
  expertise: string;
  features: string[];
  mostImportantFeature: string;
  featureSuggestion: string;
  designPriority: string;
  darkMode: string;
  otherApps: string;
  comments: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.frequency || !body.expertise || !body.designPriority) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    const entry: SurveyResponse = {
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

    let responses: SurveyResponse[] = [];
    try {
      const data = await fs.readFile(DATA_FILE, "utf-8");
      responses = JSON.parse(data);
    } catch {
      await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    }

    responses.push(entry);
    await fs.writeFile(DATA_FILE, JSON.stringify(responses, null, 2));

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
