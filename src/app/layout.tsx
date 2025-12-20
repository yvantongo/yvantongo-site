// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Yvan Tongo — Management & Expertise Agricole",
  description:
    "Management, Agriculture, Jeunesse & Expertise Agricole. Manifeste, articles, projets et réflexions pour transformer durablement le secteur agricole africain.",
  
  openGraph: {
    title: "Yvan Tongo — Management & Expertise Agricole",
    description:
      "Management, Agriculture, Jeunesse & Expertise Agricole. Réflexions, manifeste, projets et contenus pour transformer l’agriculture.",
    url: "https://www.yvantongo.com",
    siteName: "Yvan Tongo",
    images: [
      {
        // TON IMAGE SUR LA HOME
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
    title: "Yvan Tongo — Management & Expertise Agricole",
    description:
      "Management, Agriculture, Jeunesse & Expertise Agricole. Réflexions, manifeste, projets et contenus.",
    images: ["https://www.yvantongo.com/images/yvan.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-[#fbf3e5] text-[#10351f]">
        
        {/* HEADER / NAVIGATION */}
        <header className="border-b border-[#eadfcd] bg-[#fbf3e5] px-4 py-4">
          <div className="mx-auto max-w-5xl flex items-center justify-between">

            <span className="font-serif text-xl font-semibold">
              Yvan Tongo
            </span>

            <nav className="flex flex-wrap gap-4 md:gap-6 text-sm text-[#10351f]">
              <a href="/" className="hover:underline">Accueil</a>
              <a href="/manifeste" className="hover:underline">Manifeste</a>
              <a href="/articles" className="hover:underline">Articles</a>
              <a href="/projets" className="hover:underline">Projets</a>
              <a href="/a-propos" className="hover:underline">À propos</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </nav>

          </div>
        </header>

        
        {/* CONTENU DES PAGES */}
        <main>{children}</main>


        {/* FOOTER */}
        <footer className="mt-16 border-t border-[#eadfcd] bg-[#fbf3e5]">
          <div className="mx-auto max-w-5xl px-4 py-6 text-xs md:text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
            
            <p className="text-gray-700">
              © 2025 Yvan Tongo. Tous droits réservés.
            </p>

            <div className="flex gap-4">
              <a href="/mentions-legales" className="hover:underline">
                Mentions légales
              </a>

              <a href="/politique-de-confidentialite" className="hover:underline">
                Politique de confidentialité
              </a>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}
