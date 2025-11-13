import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yvan Tongo – Management & Expertise Agricole",
  description:
    "Manifeste, articles et projets pour une agriculture moderne, rentable et inclusive.",
  keywords: [
    "Yvan Tongo",
    "Agriculture Cameroun",
    "Agribusiness",
    "Management Agricole",
    "Jeunes Agriculteurs",
    "Leadership Agricole",
    "Objectifs de Développement Durable",
    "ODD",
    "Agribusiness Afrique",
  ],
  authors: [{ name: "Yvan Tongo" }],
  creator: "Yvan Tongo",
  publisher: "Yvan Tongo",
  metadataBase: new URL("https://yvantongo.com"),

  alternates: {
    canonical: "https://yvantongo.com",
  },

  openGraph: {
    title: "Yvan Tongo – Management & Expertise Agricole",
    description:
      "Manifeste, articles et projets pour une agriculture moderne, rentable et inclusive.",
    url: "https://yvantongo.com",
    siteName: "Yvan Tongo",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yvan Tongo – Management & Expertise Agricole",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yvan Tongo – Management & Expertise Agricole",
    description:
      "Manifeste, articles et projets pour une agriculture moderne, rentable et inclusive.",
    images: ["/images/manifesto-cover.jpg"], // on ajustera ce fichier plus tard
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
