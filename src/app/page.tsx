/* PAGE D’ACCUEIL – Yvan Tongo */

const articles = [
  {
  slug: "les-francais-vont-manger-quoi",
  title: "Les Français vont manger quoi ?",
  cover: "/images/articles/les-francais-vont-manger-quoi-demain.jpg",
  date: "19 decembre 2025",
  excerpt:
    "La question paraît banale. Presque ridicule. Et pourtant, avec tout ce qui se passe en ce moment, c’est probablement la question la plus sérieuse qu’on devrait tous se poser.",
},

  {
    slug: "espoir-jeunesse",
    title: "Et si c’était le dernier espoir de la jeunesse ?",
    cover: "/images/articles/espoir-jeunesse.jpg",
    date: "23 novembre 2025",
    excerpt:
      "Et si l’agriculture était la porte que personne n’a vraiment montrée à notre génération ? Une réflexion sur emploi, opportunités et avenir.",
  },
  {
    slug: "5-raisons-jeunes-agriculture",
    title: "5 raisons pour lesquelles les jeunes ne s’intéressent pas à l’agriculture",
    cover: "/images/articles/5-raisons-jeunes-agriculture.jpg",
    date: "23 octobre 2025",
    excerpt:
      "Perception négative, manque de visibilité, contraintes structurelles : une analyse honnête de ce qui éloigne la jeunesse du secteur agricole.",
  },
  
];

const projects = [
  {
    slug: "farmers-and-partners",
    title: "Farmers & Partners",
    role: "Fondateur",
    cover: "/images/projets/farmers-partners.jpg",
    smallText:
      "Une association de jeunes engagés qui mettent leurs compétences en marketing, stratégie et communication au service des fermiers.",
  },
  {
    slug: "sheroes-association",
    title: "SHEroes Association",
    role: "Cofondateur & Trésorier",
    cover: "/images/projets/sheroes.jpg",
    smallText:
      "Aux côtés de Lydol, une association engagée pour l’autonomisation, la protection et le leadership des femmes.",
  },
  {
    slug: "culture-et-strategie",
    title: "Culture & Stratégie",
    role: "Consultant en stratégie & communication",
    cover: "/images/projets/culture-strategie.jpg", // adapte le nom du fichier si besoin
    smallText:
      "Accompagner des artistes comme Cysoul, Krys M ou Lydol dans leur positionnement, leur visibilité et leurs partenariats.",
  },
  {
    slug: "ferme-profape",
    title: "Ferme PROFAPE",
    role: "Responsable de ferme",
    cover: "/images/projets/ferme-profape.jpg",
    smallText:
      "Ferme intégrée pilote à Bafia : terrain d’apprentissage pour la production, l’élevage, la gestion et la formation de jeunes.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf3e5] text-[#10351f]">
      {/* HERO */}
      <section className="mx-auto flex max-w-5xl flex-col-reverse gap-10 px-4 py-12 md:flex-row md:items-center md:py-16">
        {/* TEXTE */}
        <div className="md:w-1/2">
          <h1 className="font-serif text-4xl md:text-5xl leading-tight text-[#10351f]">
            L’agriculture n’est pas
            <br />
            un héritage, c’est une
            <br />
            mission.
          </h1>
          <p className="mt-4 text-sm text-gray-700 md:text-base">
            Management & Expertise Agricole | Agribusiness &amp; Rural Transformation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/manifeste"
              className="rounded-full bg-[#10251b] px-6 py-2 text-sm font-medium text-white hover:bg-[#08140f]"
            >
              Lire le Manifeste
            </a>

            <a
              href="/projets"
              className="rounded-full border border-[#10251b] bg-[#fbf3e5] px-6 py-2 text-sm font-medium text-[#10251b] hover:bg-[#f2e4cf]"
            >
              Découvrir mes projets
            </a>
          </div>
        </div>

        {/* IMAGE HERO (RÉDUITE) */}
        <div className="md:w-1/2">
          <div className="overflow-hidden rounded-3xl bg-[#10251b] p-2 shadow-xl flex justify-center">
            <img
              src="/images/yvan.jpg"
              alt="Yvan Tongo"
              className="w-[350px] md:w-[420px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* MANIFESTE – BANDE VERTE */}
      <section className="bg-[#10251b] text-[#fbf3e5] py-16">
        <div className="mx-auto max-w-5xl px-4 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="font-serif text-2xl mb-3">
              11 Actions concrètes pour dynamiser le secteur agricole au Cameroun
            </h2>
            <p className="text-sm leading-relaxed">
              Et si, pour une fois, on arrêtait d’attendre les solutions d’en haut, et qu’on prenait la parole,
              nous, ceux du terrain, ceux qui croient encore que ce pays peut se nourrir de lui-même…
            </p>
            <a
              href="/manifeste"
              className="mt-6 inline-block rounded-full bg-[#fbf3e5] px-6 py-2 text-sm font-medium text-[#10251b] hover:bg-[#f2e4cf]"
            >
              Lire le Manifeste complet
            </a>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/manifesto-cover-new.jpg"
              alt="Manifeste"
              className="w-full max-w-xs rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-12">
        <h2 className="font-serif text-2xl text-[#10351f]">Articles</h2>
        <p className="mt-2 text-sm text-gray-700">
          Réflexions, analyses et textes engagés pour réinventer l’image de l’agriculture et de la jeunesse.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <a
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#eadfcd] bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full overflow-hidden">
                <img
                  src={article.cover}
                  alt={article.title}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-serif text-lg text-[#10351f]">{article.title}</h3>
                <p className="mt-2 text-sm text-gray-700 line-clamp-3">{article.excerpt}</p>
                <p className="mt-4 text-[11px] text-gray-500">Publié le {article.date}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-4">
          <a href="/articles" className="text-sm font-medium text-[#10351f] underline">
            Voir tous les articles →
          </a>
        </div>
      </section>

      {/* PROJETS */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="font-serif text-2xl text-[#10351f]">Projets</h2>
        <p className="mt-2 text-sm text-gray-700">
          Des initiatives pour une agriculture ambitieuse au Cameroun et en Afrique.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`/projets/${project.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#eadfcd] bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full overflow-hidden">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <p className="text-[11px] uppercase tracking-wide text-gray-500">{project.role}</p>
                <h3 className="mt-1 font-serif text-lg text-[#10351f]">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{project.smallText}</p>
                <p className="mt-4 text-sm text-[#10351f] underline">Voir le projet →</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-4">
          <a href="/projets" className="text-sm font-medium text-[#10351f] underline">
            Voir tous les projets →
          </a>
        </div>
      </section>

      {/* À PROPOS SUR LA HOME */}
      <section className="bg-[#10251b] text-[#fbf3e5] py-16">
        <div className="mx-auto max-w-5xl px-4 grid gap-8 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] items-center">
          <div className="overflow-hidden rounded-3xl bg-[#10251b] p-2 shadow-xl">
            <img
              src="/images/yvan.jpg"
              alt="Yvan Tongo"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-4">À propos</h2>
            <p className="text-sm leading-relaxed">
              Étudiant MSc en Management et Expertise Agricole & Agroalimentaire | Agribusiness & Rural
              Transformation | Jeune leader engagé entre l’Europe et l’Afrique. L’agriculture n’est pas un
              héritage, c’est une mission.
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Passionné par le développement du secteur agricole africain, je consacre mon parcours à la
              professionnalisation des acteurs, à l’intégration des jeunes et à la modernisation des chaînes de
              valeur agricoles et agroalimentaires.
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Mon ambition : préparer une nouvelle génération d’acteurs agricoles capables de transformer les
              exploitations en véritables entreprises, de créer de la richesse et de répondre aux défis
              socio-économiques du continent.
            </p>

            <a
              href="/a-propos"
              className="mt-4 inline-block text-sm font-medium underline"
            >
              En savoir plus sur mon parcours →
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SUR LA HOME */}
      <section className="py-16 bg-[#fbf3e5]">
        <div className="mx-auto max-w-5xl px-4 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-[#10351f]">Contact</h2>
            <p className="mt-2 text-sm text-gray-700">
              Invitations, partenariats, médias : parlons-en.
            </p>

            <p className="mt-4 text-sm text-gray-700">
              ✉️{" "}
              <a href="mailto:yvantongo237@gmail.com" className="underline">
                yvantongo237@gmail.com
              </a>
            </p>
            <p className="mt-2 text-sm text-gray-700">🌍 LinkedIn, Instagram, YouTube</p>
          </div>

          <form
            action="https://formsubmit.co/yvantongo237@gmail.com"
            method="POST"
            className="bg-white rounded-2xl border border-[#eadfcd] p-6 shadow-sm space-y-4"
          >
            <input type="hidden" name="_subject" value="Nouveau message depuis yvantongo.com" />
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <label className="block text-xs font-medium text-gray-600">Nom</label>
              <input
                required
                name="name"
                className="mt-1 w-full rounded-xl border border-[#eadfcd] px-3 py-2 text-sm outline-none focus:border-[#10351f]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600">Email</label>
              <input
                required
                name="email"
                type="email"
                className="mt-1 w-full rounded-xl border border-[#eadfcd] px-3 py-2 text-sm outline-none focus:border-[#10351f]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600">Message</label>
              <textarea
                required
                name="message"
                rows={4}
                className="mt-1 w-full rounded-xl border border-[#eadfcd] px-3 py-2 text-sm outline-none focus:border-[#10351f]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#10351f] text-white text-sm font-medium py-2"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
