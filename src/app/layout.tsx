// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Yvan Tongo — Management & Expertise Agricole",
  description:
    "Management & Expertise Agricole | Agribusiness & Rural Transformation | Réflexions, projets et contenus pour réinventer l'image de l'agriculture.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-[#fbf3e5] text-[#10351f]">
        {/* HEADER */}
        <header className="border-b border-[#eadfcd] bg-[#fbf3e5] px-4 py-4">
          <div className="mx-auto max-w-5xl flex items-center justify-between">
            <span className="font-serif text-xl font-semibold">Yvan Tongo</span>

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
        <footer className="mt-16 border-t border-[#eadfcd] bg-[#fbf3e5] text-xs md:text-sm">
          <div className="mx-auto max-w-5xl px-4 py-6 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <p className="text-gray-700">© 2025 Yvan Tongo. Tous droits réservés.</p>

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
