import React from "react";

export const metadata = {
  title: "Manifeste – Yvan Tongo",
  description:
    "Le manifeste de Yvan Tongo : vision, engagement et transformation agricole.",
};

export default function ManifestePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-green-900 mb-6">
        Le Manifeste
      </h1>

      <p className="text-lg leading-relaxed text-gray-800 mb-6">
        L’agriculture n’est pas un héritage. <br />
        <strong>C’est une mission.</strong>
      </p>

      <p className="text-lg leading-relaxed text-gray-800 mb-6">
        Dans un monde en transformation, où les défis alimentaires,
        environnementaux et sociaux sont de plus en plus complexes,
        l’agriculture reste au cœur de toutes les solutions. Je crois en une
        agriculture moderne, innovante, structurée… mais profondément humaine.
      </p>

      <p className="text-lg leading-relaxed text-gray-800 mb-6">
        Mon engagement est clair : contribuer à relever le secteur agricole,
        inspirer une nouvelle génération d’agro-leaders et construire des
        modèles capables de créer de la valeur durable.
      </p>

      <p className="text-lg leading-relaxed text-gray-800 mb-6">
        Ce manifeste est une invitation : à repenser, valoriser, transformer
        l’agriculture africaine avec audace, discipline et ambition.
      </p>

      <div className="mt-10 p-6 bg-green-50 border-l-4 border-green-700 rounded">
        <p className="text-lg font-semibold text-green-900">
          « L’agriculture n’est pas un héritage, c’est une mission. »
        </p>
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href="/"
          className="px-6 py-3 bg-green-800 text-white rounded hover:bg-green-700 transition"
        >
          Retour à l’accueil
        </a>
      </div>
    </main>
  );
}
