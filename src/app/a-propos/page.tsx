export default function AProposPage() {
  return (
    <main className="bg-[#10351f] text-white">
      <section className="mx-auto max-w-5xl px-4 py-16 grid gap-10 md:grid-cols-[280px,1fr]">
        {/* Photo */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/images/yvan.jpg"
            alt="Yvan Tongo"
            className="w-[260px] h-auto rounded-2xl object-cover shadow-xl"
          />
        </div>

        {/* Texte */}
        <div>
          <h1 className="font-serif text-3xl md:text-4xl mb-6">À propos</h1>

          <p className="text-sm md:text-base leading-relaxed">
            Étudiant MSc en Management et Expertise Agricole &amp; Agroalimentaire | Agribusiness &amp; Rural
            Transformation | Jeune leader engagé entre l’Europe et l’Afrique. L’agriculture n’est pas un héritage,
            c’est une mission.
          </p>

          <p className="mt-4 text-sm md:text-base leading-relaxed">
            Passionné par le développement du secteur agricole africain, je consacre mon parcours à la
            professionnalisation des acteurs, à l’intégration des jeunes et à la modernisation des chaînes de valeur
            agricoles et agroalimentaires.
          </p>

          <p className="mt-4 text-sm md:text-base leading-relaxed">
            🎓 Étudiant à Paris, j’apprends auprès des meilleures entreprises et institutions européennes
            afin de renforcer mes compétences en stratégie, innovation et développement rural.
          </p>

          <p className="mt-4 text-sm md:text-base leading-relaxed">
            🌍 Mon ambition : préparer une nouvelle génération d’acteurs agricoles capables de transformer les
            exploitations en véritables entreprises, de créer de la richesse et de répondre aux défis socio-économiques
            du continent.
          </p>
        </div>
      </section>
    </main>
  );
}
