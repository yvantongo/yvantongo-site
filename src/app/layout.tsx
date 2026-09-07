// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Yvan Tongo — Fondateur d'AgriComp | Management & Expertise Agricole",
  description:
    "Fondateur d'AgriComp. Management, Agriculture, Jeunesse & Expertise Agricole. Manifeste, articles, projets et réflexions pour transformer durablement le secteur agricole africain.",

  openGraph: {
    title: "Yvan Tongo — Fondateur d'AgriComp",
    description:
      "Management, Agriculture, Jeunesse & Expertise Agricole. Réflexions, manifeste, projets et contenus pour transformer l'agriculture.",
    url: "https://www.yvantongo.com",
    siteName: "Yvan Tongo",
    images: [
      {
        url: "https://www.yvantongo.com/images/yvan.jpg",
        width: 1200,
        height: 630,
        alt: "Photo de Yvan Tongo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yvan Tongo — Fondateur d'AgriComp",
    description:
      "Management, Agriculture, Jeunesse & Expertise Agricole. Réflexions, manifeste, projets et contenus.",
    images: ["https://www.yvantongo.com/images/yvan.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-[#F6F1E2] text-[#1E2A22]">

        {/* HEADER / NAVIGATION */}
        <header className="border-b border-[#E3D9C0] bg-[#F6F1E2] px-4 py-4 sticky top-0 z-50">
          <div className="mx-auto max-w-5xl flex items-center justify-between">

            <a href="/" className="font-serif text-xl font-semibold text-[#173D1F]">
              Yvan Tongo
            </a>

            <nav className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-[#1E2A22]">
              <a href="/" className="hover:text-[#173D1F] hover:underline">Accueil</a>
              <a href="https://agricomp.fr" target="_blank" rel="noreferrer" className="rounded-full bg-[#173D1F] px-4 py-1.5 text-white font-medium hover:bg-[#2E7D45]">🌾 AgriComp</a>
              <a href="/#ebook" className="hover:text-[#173D1F] hover:underline">Le Livre</a>
              <a href="/manifeste" className="hover:text-[#173D1F] hover:underline">Manifeste</a>
              <a href="/articles" className="hover:text-[#173D1F] hover:underline">Articles</a>
              <a href="/projets" className="hover:text-[#173D1F] hover:underline">Projets</a>
              <a href="/a-propos" className="hover:text-[#173D1F] hover:underline">À propos</a>
              <a href="/contact" className="hover:text-[#173D1F] hover:underline">Contact</a>
            </nav>

          </div>
        </header>


        {/* CONTENU DES PAGES */}
        <main>{children}</main>


        {/* FOOTER */}
        <footer className="mt-16 border-t border-[#E3D9C0] bg-[#F6F1E2]">
          <div className="mx-auto max-w-5xl px-4 py-8">
            <div className="mosaic-strip mb-6 max-w-xs">
              <div className="m1"></div><div className="m2"></div><div className="m3"></div><div className="m4"></div><div className="m5"></div>
              <div className="m6"></div><div className="m7"></div><div className="m8"></div><div className="m9"></div><div className="m10"></div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="text-gray-700 text-xs md:text-sm">
                © 2026 Yvan Tongo — Fondateur d'AgriComp. Tous droits réservés.
              </p>

              <div className="flex gap-4 text-xs md:text-sm">
                <a href="/mentions-legales" className="hover:underline">Mentions légales</a>
                <a href="/politique-de-confidentialite" className="hover:underline">Politique de confidentialité</a>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}