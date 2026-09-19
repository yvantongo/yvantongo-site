/* PAGE D'ACCUEIL – Yvan Tongo */

const articles = [
  {
    slug: "contrat-installation-progressif",
    title: "Le contrat d'installation progressif",
    cover: "/images/articles/contrat-installation-progressif.jpg",
    date: "16 septembre 2026",
    excerpt:
      "Un agriculteur se suicide tous les deux jours en France. Face à ce chiffre, une question se pose : quelle nouvelle génération voulons-nous vraiment attirer dans ce secteur ? Cet article revient sur une proposition que nous portons concernant le statut du fermage.",
  },
  {
    slug: "2036-poulet-entier-salon-agriculture",
    title: "2036 : vous ne verrez plus de poulet entier",
    cover: "/images/articles/salon-agriculture-poulet-2036.jpg",
    date: "16 septembre 2026",
    excerpt:
      "Au Salon International de l'Agriculture, j'ai participé à Impro d'Agro, le défi organisé par l'Acta où il fallait se projeter comme ingénieur en 2036. Ma conclusion sur la filière avicole a un peu cassé les codes de ce qu'on attendait de nous.",
  },
  {
    slug: "les-francais-vont-manger-quoi",
    title: "Les Français vont manger quoi ?",
    cover: "/images/articles/les-francais-vont-manger-quoi-demain.jpg",
    date: "19 decembre 2025",
    excerpt:
      "La question paraît banale. Presque ridicule. Et pourtant, avec tout ce qui se passe en ce moment, c'est probablement la question la plus sérieuse qu'on devrait tous se poser.",
  },
  {
    slug: "espoir-jeunesse",
    title: "Et si c'était le dernier espoir de la jeunesse ?",
    cover: "/images/articles/espoir-jeunesse.jpg",
    date: "23 novembre 2025",
    excerpt:
      "Et si l'agriculture était la porte que personne n'a vraiment montrée à notre génération ? Une réflexion sur emploi, opportunités et avenir.",
  },
  {
    slug: "5-raisons-jeunes-agriculture",
    title: "5 raisons pour lesquelles les jeunes ne s'intéressent pas à l'agriculture",
    cover: "/images/articles/5-raisons-jeunes-agriculture.jpg",
    date: "23 octobre 2025",
    excerpt:
      "Perception négative, manque de visibilité, contraintes structurelles : une analyse honnête de ce qui éloigne la jeunesse du secteur agricole.",
  },
];

const projects = [
  {
    slug: "agricomp",
    title: "AgriComp",
    role: "Fondateur",
    external: "https://agricomp.fr",
    smallText:
      "Un réseau professionnel et un livre collectif — « 100 Compétences pour l'Agriculture de Demain » — qui rassemblent les compétences dont l'agriculture de demain a besoin, bien au-delà de l'agronomie.",
  },
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
      "Aux côtés de Lydol, une association engagée pour l'autonomisation, la protection et le leadership des femmes.",
  },
  {
    slug: "culture-et-strategie",
    title: "Culture & Stratégie",
    role: "Consultant en stratégie & communication",
    cover: "/images/projets/culture-strategie.jpg",
    smallText:
      "Accompagner des artistes comme Cysoul, Krys M ou Lydol dans leur positionnement, leur visibilité et leurs partenariats.",
  },
  {
    slug: "ferme-profape",
    title: "Ferme PROFAPE",
    role: "Responsable de ferme",
    cover: "/images/projets/ferme-profape.jpg",
    smallText:
      "Ferme intégrée pilote à Bafia : terrain d'apprentissage pour la production, l'élevage, la gestion et la formation de jeunes.",
  },
];

function Mosaic({ className = "" }: { className?: string }) {
  return (
    <div className={`mosaic-strip ${className}`}>
      <div className="m1"></div><div className="m2"></div><div className="m3"></div><div className="m4"></div><div className="m5"></div>
      <div className="m6"></div><div className="m7"></div><div className="m8"></div><div className="m9"></div><div className="m10"></div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F1E2] text-[#1E2A22]">
      {/* HERO */}
      <section className="mx-auto flex max-w-5xl flex-col-reverse gap-10 px-4 py-12 md:flex-row md:items-center md:py-16">
        {/* TEXTE */}
        <div className="md:w-1/2">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[3px] text-[#F0A020]">
            Fondateur d'AgriComp
          </p>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight text-[#173D1F]">
            L'agriculture n'est pas
            <br />
            un héritage, c'est une
            <br />
            mission.
          </h1>
          <p className="mt-4 text-sm text-gray-700 md:text-base">
            Management &amp; Expertise Agricole | Agribusiness &amp; Rural Transformation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#ebook" className="rounded-full bg-[#173D1F] px-6 py-2 text-sm font-medium text-white hover:bg-[#2E7D45]" >
              Découvrir le livre
            </a>

            <a href="https://agricomp.fr" target="_blank" rel="noreferrer" className="rounded-full border border-[#173D1F] bg-[#F6F1E2] px-6 py-2 text-sm font-medium text-[#173D1F] hover:bg-[#EDE4CE]" >
              🌾 Voir AgriComp
            </a>
          </div>

          <Mosaic className="mt-8 max-w-[220px]" />
        </div>

        {/* IMAGE HERO — cadre AgriComp */}
        <div className="md:w-1/2">
          <div className="overflow-hidden rounded-3xl bg-[#173D1F] p-3 shadow-xl flex flex-col items-center border-2 border-[#F0A020]">
            <img
              src="/images/yvan.jpg"
              alt="Yvan Tongo, fondateur d'AgriComp"
              className="w-[350px] md:w-[420px] rounded-2xl object-cover"
            />
            <p className="mt-3 mb-1 text-center text-[#F0A020] font-serif italic text-sm">
              Fondateur d'AgriComp
            </p>
          </div>
        </div>
      </section>

      {/* EBOOK — EN PREMIER */}
      <section id="ebook" className="bg-[#173D1F] text-white py-16 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-4 grid gap-10 md:grid-cols-2 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="w-full max-w-xs rounded-2xl shadow-xl bg-[#0F2A15] border border-[#F0A020]/40 p-8 flex flex-col items-center text-center">
              <div className="text-5xl mb-4">🌾</div>
              <p className="font-serif text-xl font-bold">100 Compétences</p>
              <p className="font-serif text-lg">pour l'Agriculture de Demain</p>
              <Mosaic className="mt-6 w-full" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[3px] text-[#F0A020]">
              Le livre collectif
            </p>
            <h2 className="font-serif text-2xl md:text-3xl mb-3">
              « 100 Compétences pour l'Agriculture de Demain »
            </h2>
            <p className="text-sm leading-relaxed text-[#CFE3D2]">
              Un livre écrit par ceux qui construisent déjà l'avenir du secteur agricole — un bloc de
              compétence à la fois. Le bloc Management &amp; Entrepreneuriat est déjà entièrement rédigé.
            </p>
            <a href="https://vqpjnpwsahzouemhtuxd.supabase.co/storage/v1/object/public/documents/ebook-100-competences.pdf.pdf" target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-[#F0A020] px-6 py-2 text-sm font-bold text-[#173D1F] hover:bg-white" >
              📖 Lire et télécharger le livre
            </a>
          </div>
        </div>
      </section>

      {/* AGRICOMP — EN DEUXIÈME */}
      <section className="py-16 bg-[#F6F1E2]">
        <div className="mx-auto max-w-5xl px-4 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[3px] text-[#2E7D45]">
              Le projet que j'ai fondé
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-[#173D1F] mb-3">
              AgriComp — Le réseau des talents pour l'agriculture
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Un réseau professionnel qui rassemble les compétences dont l'agriculture de demain a besoin —
              stratégie, technologie, finance, marketing — bien au-delà des seuls métiers agricoles
              traditionnels. 10 blocs de compétences, 1 mouvement qui grandit chaque semaine.
            </p>
            <a href="https://agricomp.fr" target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-[#173D1F] px-6 py-2 text-sm font-medium text-white hover:bg-[#2E7D45]" >
              🌾 Découvrir agricomp.fr
            </a>
          </div>
          <div className="rounded-2xl bg-[#173D1F] p-8 text-center text-white shadow-xl">
            <div className="text-4xl mb-3">🌾</div>
            <p className="font-serif text-xl font-bold mb-2">AgriComp</p>
            <p className="text-xs text-[#CFE3D2] mb-4">« Les compétences au service de l'agriculture »</p>
            <Mosaic />
          </div>
        </div>
      </section>

      {/* MANIFESTE */}
      <section className="bg-[#173D1F] text-[#F6F1E2] py-16">
        <div className="mx-auto max-w-5xl px-4 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="font-serif text-2xl mb-3">
              11 Actions concrètes pour dynamiser le secteur agricole au Cameroun
            </h2>
            <p className="text-sm leading-relaxed">
              Et si, pour une fois, on arrêtait d'attendre les solutions d'en haut, et qu'on prenait la parole,
              nous, ceux du terrain, ceux qui croient encore que ce pays peut se nourrir de lui-même…
            </p>
            <a href="/manifeste" className="mt-6 inline-block rounded-full bg-[#F6F1E2] px-6 py-2 text-sm font-medium text-[#173D1F] hover:bg-white" >
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
        <h2 className="font-serif text-2xl text-[#173D1F]">Articles</h2>
        <p className="mt-2 text-sm text-gray-700">
          Réflexions, analyses et textes engagés pour réinventer l'image de l'agriculture et de la jeunesse.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <a key={article.slug} href={`/articles/${article.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E3D9C0] bg-white shadow-sm hover:shadow-md transition-shadow" >
              <div className="w-full overflow-hidden">
                <img
                  src={article.cover}
                  alt={article.title}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-serif text-lg text-[#173D1F]">{article.title}</h3>
                <p className="mt-2 text-sm text-gray-700 line-clamp-3">{article.excerpt}</p>
                <p className="mt-4 text-[11px] text-gray-500">Publié le {article.date}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-4">
          <a href="/articles" className="text-sm font-medium text-[#173D1F] underline">
            Voir tous les articles →
          </a>
        </div>
      </section>

      {/* PROJETS */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="font-serif text-2xl text-[#173D1F]">Projets</h2>
        <p className="mt-2 text-sm text-gray-700">
          Des initiatives pour une agriculture ambitieuse au Cameroun et en Afrique.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {projects.map((project) =>
            project.external ? (
              <a key={project.slug} href={project.external} target="_blank" rel="noreferrer" className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-[#F0A020] bg-[#173D1F] text-white shadow-sm hover:shadow-md transition-shadow" >
                <div className="w-full h-40 flex items-center justify-center text-5xl bg-[#0F2A15]">🌾</div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-[11px] uppercase tracking-wide text-[#F0A020]">{project.role}</p>
                  <h3 className="mt-1 font-serif text-lg">{project.title}</h3>
                  <p className="mt-2 text-sm text-[#CFE3D2]">{project.smallText}</p>
                  <p className="mt-4 text-sm text-[#F0A020] underline">Voir le projet →</p>
                </div>
              </a>
            ) : (
              <a key={project.slug} href={`/projets/${project.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E3D9C0] bg-white shadow-sm hover:shadow-md transition-shadow" >
                <div className="w-full overflow-hidden">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <p className="text-[11px] uppercase tracking-wide text-gray-500">{project.role}</p>
                  <h3 className="mt-1 font-serif text-lg text-[#173D1F]">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-700">{project.smallText}</p>
                  <p className="mt-4 text-sm text-[#173D1F] underline">Voir le projet →</p>
                </div>
              </a>
            )
          )}
        </div>

        <div className="mt-4">
          <a href="/projets" className="text-sm font-medium text-[#173D1F] underline">
            Voir tous les projets →
          </a>
        </div>
      </section>

      {/* À PROPOS SUR LA HOME */}
      <section className="bg-[#173D1F] text-[#F6F1E2] py-16">
        <div className="mx-auto max-w-5xl px-4 grid gap-8 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] items-center">
          <div className="overflow-hidden rounded-3xl bg-[#173D1F] p-2 shadow-xl border border-[#F0A020]/40">
            <img
              src="/images/yvan.jpg"
              alt="Yvan Tongo"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-4">À propos</h2>
            <p className="text-sm leading-relaxed">
              Étudiant MSc en Management et Expertise Agricole &amp; Agroalimentaire | Fondateur d'AgriComp |
              Jeune leader engagé entre l'Europe et l'Afrique. L'agriculture n'est pas un héritage, c'est une
              mission.
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Passionné par le développement du secteur agricole africain, je consacre mon parcours à la
              professionnalisation des acteurs, à l'intégration des jeunes et à la modernisation des chaînes de
              valeur agricoles et agroalimentaires.
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Mon ambition : préparer une nouvelle génération d'acteurs agricoles capables de transformer les
              exploitations en véritables entreprises, de créer de la richesse et de répondre aux défis
              socio-économiques du continent.
            </p>

            <a href="/a-propos" className="mt-4 inline-block text-sm font-medium underline text-[#F0A020]" >
              En savoir plus sur mon parcours →
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SUR LA HOME */}
      <section className="py-16 bg-[#F6F1E2]">
        <div className="mx-auto max-w-5xl px-4 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-[#173D1F]">Contact</h2>
            <p className="mt-2 text-sm text-gray-700">
              Invitations, partenariats, médias : parlons-en.
            </p>

            <p className="mt-4 text-sm text-gray-700">
              ✉️{" "}
              <a href="mailto:yvantongo237@gmail.com" className="underline">
                yvantongo237@gmail.com
              </a>
            </p>
            <div className="mt-3 flex gap-4 text-sm text-[#173D1F]">
              <a href="https://www.linkedin.com/in/yvan-tongo-960926243/" target="_blank" rel="noreferrer" className="underline hover:text-[#2E7D45]" >
                LinkedIn
              </a>
              <a href="https://www.instagram.com/yvan_tongo" target="_blank" rel="noreferrer" className="underline hover:text-[#2E7D45]" >
                Instagram
              </a>
              <a href="https://www.facebook.com/share/1E3YjJkhwW/" target="_blank" rel="noreferrer" className="underline hover:text-[#2E7D45]" >
                Facebook
              </a>
            </div>
          </div>

          <form
            action="https://formsubmit.co/yvantongo237@gmail.com"
            method="POST"
            className="bg-white rounded-2xl border border-[#E3D9C0] p-6 shadow-sm space-y-4"
          >
            <input type="hidden" name="_subject" value="Nouveau message depuis yvantongo.com" />
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <label className="block text-xs font-medium text-gray-600">Nom</label>
              <input
                required
                name="name"
                className="mt-1 w-full rounded-xl border border-[#E3D9C0] px-3 py-2 text-sm outline-none focus:border-[#173D1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600">Email</label>
              <input
                required
                name="email"
                type="email"
                className="mt-1 w-full rounded-xl border border-[#E3D9C0] px-3 py-2 text-sm outline-none focus:border-[#173D1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600">Message</label>
              <textarea
                required
                name="message"
                rows={4}
                className="mt-1 w-full rounded-xl border border-[#E3D9C0] px-3 py-2 text-sm outline-none focus:border-[#173D1F]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#173D1F] text-white text-sm font-medium py-2 hover:bg-[#2E7D45]"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
