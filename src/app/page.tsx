export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf3e5] text-[#10251B]">
      {/* HEADER */}
      <header className="border-b border-[#e4d8c7] bg-[#fbf3e5]/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <span className="font-serif text-xl font-semibold">Yvan Tongo</span>
          <nav className="flex gap-6 text-sm">
            <a href="/manifeste" className="hover:underline">
              Manifeste
            </a>
            <a href="/articles" className="hover:underline">
              Articles
            </a>
            <a href="/projets" className="hover:underline">
              Projets
            </a>
            <a href="/a-propos" className="hover:underline">
              À propos
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto flex max-w-5xl flex-col-reverse gap-10 px-4 py-12 md:flex-row md:items-center">
        {/* TEXTE */}
        <div className="md:w-1/2">
          <h1 className="font-serif text-4xl md:text-5xl leading-tight text-[#10351f]">
            L’agriculture n’est pas un héritage, c’est une mission.
          </h1>
          <p className="mt-4 text-sm text-gray-700 md:text-base">
            Yvan Tongo — Management &amp; Expertise Agricole | Agribusiness &amp; Rural
            Transformation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/manifeste"
              className="rounded-full bg-[#10251B] px-6 py-2 text-sm font-medium text-white hover:bg-[#143528]"
            >
              Lire le Manifeste
            </a>
            <a
              href="/projets"
              className="rounded-full border border-[#c3a87c] bg-[#fbf3e5] px-6 py-2 text-sm font-medium text-[#10251B] hover:bg-[#f2e4cf]"
            >
              Découvrir mes projets
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="md:w-1/2">
          <div className="overflow-hidden rounded-3xl bg-[#10251B] p-2 shadow-xl">
            <img
              src="/images/yvan.jpg"
              alt="Yvan Tongo"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="mx-auto max-w-5xl px-4 pb-12">
        <h2 className="font-serif text-2xl text-[#10351f]">Articles</h2>
        <p className="mt-2 text-sm text-gray-700">
          Réflexions, analyses et retours d’expérience pour transformer le secteur agricole.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <article
              key={n}
              className="flex h-full flex-col justify-between rounded-2xl border border-[#eadfcd] bg-[#fdf7ec] p-4 shadow-sm"
            >
              <div>
                <h3 className="font-serif text-lg text-[#10351f]">
                  Titre de l’article {n}
                </h3>
                <p className="mt-2 text-xs text-gray-700">
                  Résumé court de l’article. Angle, enseignement clé, et valeur pour le lecteur.
                </p>
              </div>
              <p className="mt-4 text-[11px] text-gray-500">
                Publié le 7 nov. 2025
              </p>
            </article>
          ))}
        </div>

        <div className="mt-4">
          <a href="/articles" className="text-sm font-medium text-[#10351f] underline">
            Voir tous les articles
          </a>
        </div>
      </section>

      {/* PROJETS */}
      <section className="mx-auto max-w-5xl px-4 pb-12">
        <h2 className="font-serif text-2xl text-[#10351f]">Projets</h2>
        <p className="mt-2 text-sm text-gray-700">
          Des initiatives pour une agriculture ambitieuse au Cameroun et en Afrique.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="flex h-full flex-col justify-between rounded-2xl border border-[#eadfcd] bg-[#fdf7ec] p-4 shadow-sm">
            <div>
              <h3 className="font-serif text-lg text-[#10351f]">GRILL</h3>
              <p className="mt-2 text-xs text-gray-700">
                Marque de braise et d’expériences culinaires pour valoriser la filière porcine.
              </p>
            </div>
            <p className="mt-4 text-[11px] text-gray-500">Objectif, impact, appel à contribution.</p>
          </div>

          <div className="flex h-full flex-col justify-between rounded-2xl border border-[#eadfcd] bg-[#fdf7ec] p-4 shadow-sm">
            <div>
              <h3 className="font-serif text-lg text-[#10351f]">SHEroes</h3>
              <p className="mt-2 text-xs text-gray-700">
                Accompagner les jeunes femmes dans les opportunités de l’agriculture et de
                l’agribusiness.
              </p>
            </div>
            <p className="mt-4 text-[11px] text-gray-500">Objectif, impact, appel à contribution.</p>
          </div>

          <div className="flex h-full flex-col justify-between rounded-2xl border border-[#eadfcd] bg-[#fdf7ec] p-4 shadow-sm">
            <div>
              <h3 className="font-serif text-lg text-[#10351f]">Dschang au travail</h3>
              <p className="mt-2 text-xs text-gray-700">
                Professionnaliser les acteurs locaux et créer un circuit d’écoulement durable.
              </p>
            </div>
            <p className="mt-4 text-[11px] text-gray-500">Objectif, impact, appel à contribution.</p>
          </div>
        </div>

        <div className="mt-4">
          <a href="/projets" className="text-sm font-medium text-[#10351f] underline">
            Voir tous les projets
          </a>
        </div>
      </section>

      {/* À PROPOS + CONTACT RAPIDE */}
      <section className="mx-auto max-w-5xl px-4 pb-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl bg-[#10251B] p-6 text-[#fbf3e5]">
          <h2 className="font-serif text-2xl mb-3">À propos</h2>
          <p className="text-sm leading-relaxed">
            Étudiant MSc en Management et Expertise Agricole &amp; Agroalimentaire, engagé entre
            l’Europe et l’Afrique pour une agriculture plus professionnelle, inclusive et moderne.
          </p>
          <a href="/a-propos" className="mt-4 inline-block text-sm font-medium underline">
            En savoir plus sur mon parcours
          </a>
        </div>

        <div className="rounded-2xl border border-[#eadfcd] bg-[#fdf7ec] p-6">
          <h2 className="font-serif text-2xl text-[#10351f] mb-3">Contact</h2>
          <p className="text-sm text-gray-700">
            Invitations, partenariats, médias : parlons-en.
          </p>
          <p className="mt-3 text-sm">
            📧 <a href="mailto:contact@yvantongo.net" className="underline">contact@yvantongo.net</a>
          </p>
          <p className="mt-2 text-sm">
            🔗 LinkedIn, Instagram, YouTube
          </p>
          <a href="/contact" className="mt-4 inline-block text-sm font-medium text-[#10351f] underline">
            Accéder au formulaire de contact
          </a>
        </div>
      </section>
    </main>
  );
}
