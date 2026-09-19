const articles = [
  {
    slug: "contrat-installation-progressif",
    title: "Le contrat d'installation progressif",
    image: "/images/articles/contrat-installation-progressif.jpg",
    excerpt:
      "Un agriculteur se suicide tous les deux jours en France. Face à ce chiffre, une question se pose : quelle nouvelle génération voulons-nous vraiment attirer dans ce secteur ? Cet article revient sur une proposition que nous portons concernant le statut du fermage.",
    date: "16 septembre 2026",
  },
  {
    slug: "2036-poulet-entier-salon-agriculture",
    title: "2036 : vous ne verrez plus de poulet entier",
    image: "/images/articles/salon-agriculture-poulet-2036.jpg",
    excerpt:
      "Au Salon International de l'Agriculture, j'ai participé à Impro d'Agro, le défi organisé par l'Acta où il fallait se projeter comme ingénieur en 2036. Ma conclusion sur la filière avicole a un peu cassé les codes de ce qu'on attendait de nous.",
    date: "16 septembre 2026",
  },
  {
  slug: "les-francais-vont-manger-quoi",
  title: "Les Français vont manger quoi ?",
  excerpt: "La question paraît banale. Presque ridicule. Et pourtant, avec tout ce qui se passe en ce moment, c'est probablement la question la plus sérieuse qu'on devrait tous se poser.",
  date: "19 decembre 2025",
  image: "/images/articles/les-francais-vont-manger-quoi-demain.jpg",
},

  {
    slug: "espoir-jeunesse",
    title: "Et si c'était le dernier espoir de la jeunesse ?",
    image: "/images/articles/espoir-jeunesse.jpg",
    excerpt:
      "Et si l'agriculture était la porte que personne ne nous a vraiment montrée ? Une réflexion sur emploi, opportunités et avenir.",
    date: "23 novembre 2025",
  },
  {
    slug: "5-raisons-jeunes-agriculture",
    title:
      "5 raisons pour lesquelles les jeunes ne s'intéressent pas à l'agriculture",
    image: "/images/articles/5-raisons-jeunes-agriculture.jpg",
    excerpt:
      "Perception négative, manque de visibilité, contraintes structurelles : une analyse honnête de ce qui éloigne la jeunesse du secteur agricole.",
    date: "23 octobre 2025",
  },
  {
    slug: "5-idees-image-agriculture",
    title: "5 idées pour rendre l'image de l'agriculture plus attractive",
    image: "/images/articles/5-idees-image-agriculture.jpg",
    excerpt:
      "Professionnalisation, visibilité, jeunesse, collaboration et technologie : 5 leviers concrets pour changer l'image du secteur.",
    date: "23 septembre 2025",
  },
];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-[#fbf3e5] text-[#10351f]">
      <section className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <h1 className="font-serif text-3xl md:text-4xl">Articles</h1>
        <p className="mt-2 text-sm md:text-base text-gray-700">
          Réflexions, analyses et textes engagés pour réinventer l'image de
          l'agriculture et de la jeunesse.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <a key={article.slug} href={`/articles/${article.slug}`} className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#eadfcd] bg-[#fdf7ec] hover:shadow-md transition">
              <div className="bg-[#f5ebdb] flex justify-center">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-40 w-full object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h2 className="font-serif text-lg text-[#10351f]">
                  {article.title}
                </h2>
                <p className="mt-2 text-xs text-gray-700">
                  {article.excerpt}
                </p>
                <p className="mt-4 text-[11px] text-gray-500">
                  Publié le {article.date}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}