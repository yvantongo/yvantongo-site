const projects = [
  {
    slug: "farmers-and-partners",
    title: "Farmers & Partners",
    role: "Fondateur",
    cover: "/images/projets/farmers-partners.jpg",
    excerpt:
      "Une association de jeunes engagés qui mettent leurs compétences en marketing, stratégie et communication au service des fermiers.",
  },
  {
    slug: "sheroes-association",
    title: "SHEroes Association",
    role: "Cofondateur & Trésorier",
    cover: "/images/projets/sheroes.jpg",
    excerpt:
      "Aux côtés de Lydol, une association engagée pour l’autonomisation, la protection et le leadership des femmes.",
  },
  {
    slug: "culture-et-strategie",
    title: "Culture & Stratégie",
    role: "Consultant en stratégie & communication",
    cover: "/images/projets/culture-strategie.jpg",
    excerpt:
      "Accompagner des artistes comme Cysoul, Krys M ou Lydol dans leur positionnement, leur visibilité et leurs partenariats.",
  },
  {
    slug: "ferme-profape",
    title: "Ferme PROFAPE",
    role: "Responsable de ferme",
    cover: "/images/projets/ferme-profape.jpg",
    excerpt:
      "Une ferme intégrée pilote à Bafia, terrain d’apprentissage sur l’élevage, la gestion et la formation de jeunes techniciens.",
  },
];

export default function ProjetsPage() {
  return (
    <main className="min-h-screen bg-[#fbf3e5] text-[#10351f]">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-600">
          🧩 Mes Projets
        </p>
        <h1 className="mt-1 font-serif text-3xl md:text-4xl text-[#10351f]">
          Mes engagements sur le terrain
        </h1>
        <p className="mt-3 text-sm md:text-base text-gray-700">
          Entre associations, culture, stratégie et ferme pilote, ces projets
          racontent ma manière de lier vision, action et impact concret.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`/projets/${project.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#eadfcd] bg-[#fdf7ee] hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center bg-[#f5ebdb]">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="h-56 w-full object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-[11px] uppercase tracking-wide text-gray-600">
                  {project.role}
                </p>
                <h2 className="mt-1 font-serif text-xl text-[#10351f]">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-gray-700">{project.excerpt}</p>
                <span className="mt-4 text-xs font-medium text-[#10351f] underline">
                  Voir le projet →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
