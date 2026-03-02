import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caffio · Aidez-nous à créer l'app café parfaite",
  description:
    "Participez à notre enquête pour façonner Caffio, l'application iOS de gestion de cafés. Vos réponses guident nos décisions produit.",
  openGraph: {
    title: "Caffio · Recherche Utilisateur",
    description:
      "Participez à notre enquête pour façonner Caffio, l'application iOS de gestion de cafés.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
