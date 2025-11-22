import { notFound } from "next/navigation";

const projects: any = {
  "farmers-and-partners": {
    title: "Farmers & Partners",
    role: "Fondateur",
    cover: "/images/projets/farmers-partners.jpg",
    content: (
      <>
        <p>
          <strong>Farmers &amp; Partners</strong>, c’est une association de
          jeunes engagés qui mettent leurs compétences en marketing, stratégie
          et communication au service des fermiers et des acteurs du secteur
          agricole.
        </p>
        <p>
          C’est une manière de dire à une génération entière : tu peux venir
          avec tes talents (design, communication, management, digital,
          finance…) et les mettre au service de l’agriculture, sans forcément
          être toi-même au champ.
        </p>
        <h3 className="font-semibold mt-6">Notre mission</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Professionnaliser les fermiers et les acteurs du secteur ;</li>
          <li>
            Donner de la visibilité aux projets agricoles et aux entrepreneurs
            ruraux ;
          </li>
          <li>
            Impliquer la jeunesse, les femmes et la technologie dans la
            transformation du secteur ;
          </li>
          <li>
            Contribuer au développement du milieu rural par des projets
            concrets et des partenariats stratégiques.
          </li>
        </ul>
        <p>
          <strong>Farmers &amp; Partners</strong>, c’est la preuve que
          l’agriculture peut devenir un levier moderne d’emploi, d’innovation et
          de fierté pour la jeunesse africaine.
        </p>
      </>
    ),
  },

  "sheroes-association": {
    title: "SHEroes Association",
    role: "Cofondateur & Trésorier",
    cover: "/images/projets/sheroes.jpg",
    content: (
      <>
        <p>
          Aux côtés de <strong>Lydol</strong>, artiste et activiste, j’ai
          cofondé <strong>SHEroes Association</strong>, une association qui
          milite pour la dignité, la liberté et la puissance d’action des
          femmes.
        </p>
        <h3 className="font-semibold mt-6">Nos combats</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>La lutte contre les violences faites aux femmes ;</li>
          <li>
            L’autonomisation économique et sociale des femmes, en ville comme en
            milieu rural ;
          </li>
          <li>
            La valorisation du leadership féminin à travers la formation, la
            sensibilisation et la création d’opportunités.
          </li>
        </ul>
        <p>
          <strong>SHEroes</strong> agit pour une génération de femmes libres,
          formées et influentes, capables de transformer leur environnement.
        </p>
      </>
    ),
  },

  "culture-et-strategie": {
    title: "Culture & Stratégie",
    role: "Consultant en stratégie & communication",
    cover: "/images/projets/culture-strategie.jpg",
    content: (
      <>
        <p>
          Engagé dans la valorisation de la culture camerounaise, je collabore
          avec plusieurs artistes tels que <strong>Cysoul</strong>,{" "}
          <strong>Krys M</strong> ou <strong>Lydol</strong>, ambassadeurs de
          notre culture.
        </p>
        <h3 className="font-semibold mt-6">Mon rôle</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Élaborer des stratégies de communication et de positionnement ;
          </li>
          <li>
            Accroître leur visibilité et attractivité auprès des partenaires ;
          </li>
          <li>
            Créer des ponts entre culture et agriculture, en utilisant leur
            influence pour soutenir la promotion du secteur agricole.
          </li>
        </ul>
        <p>
          Parce que la culture et l’agriculture sont les deux visages d’un même
          développement : celui de la fierté nationale.
        </p>
      </>
    ),
  },

  "ferme-profape": {
    title: "Ferme PROFAPE",
    role: "Responsable de ferme (Ferme intégrée pilote – Bafia)",
    cover: "/images/projets/ferme-profape.jpg",
    content: (
      <>
        <p>
          En tant que responsable de la <strong>ferme PROFAPE</strong>, une
          ferme intégrée pilote basée à Bafia, j’ai eu l’opportunité de vivre
          l’agriculture au plus près du terrain.
        </p>
        <h3 className="font-semibold mt-6">Une école de terrain</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Coordonner les activités agricoles et d’élevage ;</li>
          <li>
            Mettre en place des pratiques durables et rentables, structurées ;
          </li>
          <li>
            Former et accompagner des jeunes techniciens agricoles sur le
            terrain.
          </li>
        </ul>
        <p>
          <strong>PROFAPE</strong> a été pour moi une école de terrain : comprendre
          les réalités agricoles, les défis des producteurs et l’importance
          d’une approche professionnelle du métier de fermier.
        </p>
      </>
    ),
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];

  if (!project) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#fbf3e5] text-[#10351f]">
      <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-600">
          Projet
        </p>
        <h1 className="mt-1 font-serif text-3xl md:text-4xl">
          {project.title}
        </h1>
        <p className="mt-1 text-sm text-gray-600">{project.role}</p>

        <div className="mt-6 overflow-hidden rounded-2xl bg-[#10251b]/5 flex justify-center">
          <img
            src={project.cover}
            alt={project.title}
            className="w-full max-h-[420px] object-contain"
          />
        </div>

        <div className="mt-8 space-y-4 text-[15px] md:text-[17px] leading-relaxed text-gray-800">
          {project.content}
        </div>

        <a
          href="/projets"
          className="mt-10 inline-block text-sm underline text-[#10351f]"
        >
          ← Retour aux projets
        </a>
      </section>
    </main>
  );
}
