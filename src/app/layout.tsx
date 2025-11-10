import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yvan Tongo – Management & Expertise Agricole",
  description:
    "Manifeste, articles et projets. L’agriculture n’est pas un héritage, c’est une mission.",
  metadataBase: new URL("https://yvantongo.com"),
  alternates: { canonical: "https://yvantongo.com" },
  openGraph: {
    title: "Yvan Tongo – Management & Expertise Agricole",
    description:
      "Manifeste, articles et projets. L’agriculture n’est pas un héritage, c’est une mission.",
    url: "https://yvantongo.com",
    siteName: "Yvan Tongo",
    locale: "fr_FR",
    type: "website",
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
