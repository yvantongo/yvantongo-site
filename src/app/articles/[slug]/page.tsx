import { notFound } from "next/navigation";
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | Yvan Tongo`,
    description: article.content
      ?.toString()
      ?.slice(0, 160)
      || article.title,
    openGraph: {
      title: article.title,
      description: article.title,
      images: [article.image],
      type: "article",
    },
  };
}

const articles: any = {
  "les-francais-vont-manger-quoi": {
  title: "Les Français vont manger quoi ?",
  date: "19 decembre 2025",
  image: "/images/articles/les-francais-vont-manger-quoi-demain.jpg",
  content: (
    <>
      <p>
        La question paraît banale. Presque ridicule.
        Et pourtant, avec tout ce qui se passe en ce moment, c’est probablement la question
        la plus sérieuse qu’on devrait tous se poser.
      </p>

      <p>
        J’écris pour ceux de mes amis qui ne comprennent pas vraiment ce qui se joue avec
        les agriculteurs aujourd’hui. Moi, je leur dis une chose simple :
        Ces agriculteurs dans la rue se battent pour ce que vous allez manger demain.
      </p>

      <p>
        Ils ne demandent ni pitié, ni compassion.
        Ils demandent juste de l’équité.
      </p>

      <p><strong>Et voici pourquoi.</strong></p>

      <hr className="my-8" />

      <h2 className="text-2xl font-bold mt-10 mb-4">
        1. L’accord entre l’Union européenne et le Mercosur
      </h2>

      <p>
        Le Mercosur est une alliance économique et politique entre plusieurs pays
        d’Amérique du Sud : le Brésil, l’Argentine, l’Uruguay et le Paraguay.
        L’objectif de l’accord avec l’Union européenne est de faciliter les échanges
        commerciaux entre ces deux blocs.
      </p>

      <p>
        Sur le plan géopolitique, la France et l’Union européenne perdent progressivement
        certains alliés stratégiques. Pour y faire face, elles cherchent de nouveaux partenaires.
        Le Mercosur a été choisi. Très vite, les décideurs se sont concentrés sur ce qu’ils pensent
        y gagner : vendre de la technologie, de l’automobile, des services industriels, etc.
      </p>

      <p>
        Contrairement à ce que certains imaginent, je pense qu’ils savent aussi très bien
        ce qu’ils perdent. Car cet accord ouvre la porte à une arrivée massive de produits
        agricoles et agroalimentaires sud-américains sur le marché européen.
      </p>

      <p>
        Des produits qui viendront concurrencer cruellement ceux de nos agriculteurs,
        déjà fragilisés économiquement.
      </p>

      <p>
        Entre des coûts de production élevés liés aux nombreuses normes et contraintes
        imposées par les gouvernements et la baisse progressive des aides, beaucoup peinent
        déjà à joindre les deux bouts.
      </p>

      <p>
        On est donc en droit de se demander jusqu’où ira le mépris collectif envers ceux
        qui se battent jour et nuit pour ce que nous mangerons demain.
      </p>

      <p>
        Oui, je pense que le secteur agricole a été sacrifié.
      </p>

      <hr className="my-8" />

      <h2 className="text-2xl font-bold mt-10 mb-4">
        2. La question de la retraite et du renouvellement
      </h2>

      <p>
        Peut-être que beaucoup l’ignorent, mais je le répète chaque fois que l’occasion
        se présente : 50 % des agriculteurs français partiront à la retraite d’ici cinq ans.
      </p>

      <p>
        Et ce chiffre, à lui seul, devrait nous alarmer.
      </p>

      <p>
        Mais ce n’est pas tout. Les 50 % restants continueront d’alimenter une statistique
        glaçante : un agriculteur se suicide tous les deux jours en France.
      </p>

      <p>
        L’avenir de nos assiettes est donc bien plus grave qu’on ne veut l’admettre.
        Certains partiront à la retraite, d’autres se donneront la mort.
        Et ensuite, on demandera aux jeunes de s’engager pour assurer la relève.
      </p>

      <p>
        Mais de quelle relève parle-t-on ?
      </p>

      <p>Du prochain suicide ?</p>
      <p>Du prochain gréviste ?</p>
      <p>Du prochain agriculteur surendetté ?</p>

      <p>
        À ce rythme, voilà malheureusement ce que le secteur agricole propose aujourd’hui
        à la jeunesse.
      </p>

      <hr className="my-8" />

      <h2 className="text-2xl font-bold mt-10 mb-4">
        3. L’incohérence entre les discours et les actes
      </h2>

      <p>
        Il y a une incohérence flagrante entre ce que l’on dit et ce que l’on fait.
        Je pense ici à la loi EGAlim, mais aussi à toute la communication autour de la
        transition écologique.
      </p>

      <p>
        Je ne suis pas un ennemi de l’écologie. Mais je reste convaincu que ce sont
        les fermiers qui en paient le prix fort.
      </p>

      <p>
        On se presse d’interdire certains pesticides et sur le fond, le débat est légitime,
        mais on ne voit aucun problème à importer massivement des produits agricoles
        du Brésil ou d’ailleurs.
      </p>

      <p>
        Qui parmi nous va vérifier sur place si ces produits respectent les mêmes normes
        environnementales, sanitaires et sociales que celles imposées à nos agriculteurs ?
      </p>

      <p>
        Pour ce qui est de la loi EGAlim, elle ressemble à une anesthésie avant opération :
        on vous endort, et au réveil, les médecins (décideurs et grandes industries)
        sont devant vous en vous disant que tout s’est bien passé.
      </p>

      <hr className="my-8" />

      <h2 className="text-2xl font-bold mt-10 mb-4">
        En conclusion
      </h2>

      <p>
        Oui, ceux qui nous nourrissent ont le droit de se fâcher.
        Oui, ceux qui nous dirigent ont l’obligation de répondre à leurs revendications.
      </p>

      <p>
        Mais nous, consommateurs, devons nous poser une question essentielle :
        après tout ça, qu’allons-nous manger ?
      </p>

      <ul className="list-disc pl-6">
        <li>Des produits moins chers, sans traçabilité, sans contrôle réel ?</li>
        <li>Des produits très chers, au nom du soutien absolu au local ?</li>
        <li>
          Ou des produits de qualité, suivis par nos producteurs,
          à des prix justes et accessibles ?
        </li>
      </ul>

      <p className="mt-6">
        Quand nous aurons répondu collectivement à cette question,
        nos décideurs sauront quoi faire.
      </p>
    </>
  )
},

  "espoir-jeunesse": {
    title: "Et si c’était le dernier espoir de la jeunesse ?",
    date: "23 novembre 2025",
    image: "/images/articles/espoir-jeunesse.jpg",
    content: (
      <>
        <p className="mt-4">
          <span className="font-semibold">
            🌱 ET SI C’ÉTAIT LE DERNIER ESPOIR DE LA JEUNESSE ?
          </span>{" "}
          <br />
          <span className="italic">
            (Le texte que j’aurais aimé lire il y a quelques années)
          </span>
        </p>

        <p>
          Je vais te poser une question très simple : Et si c’était ça… le
          dernier espoir de notre génération ? Et si l’agriculture était la
          porte que personne ne nous a jamais vraiment montrée ?
        </p>

        <p>
          Parce qu’il faut le dire franchement : le marché de l’emploi est en
          train de nous glisser entre les doigts. Pas parce qu’on manque de
          talent, ni d’ambition, ni de compétence… mais parce que les
          opportunités disparaissent plus vite que nous n’arrivons sur le
          marché.
        </p>

        <p>
          Il suffit de regarder autour de nous : des entreprises qui licencient,
          des secteurs saturés, des diplômes qui ne garantissent plus
          forcément un emploi, des jeunes brillants qui enchaînent les stages
          non rémunérés, et des milliers qui cherchent juste une chance de
          commencer.
        </p>

        <p>
          Peu importe ton domaine : marketing, comptabilité, ingénierie,
          communication, logistique, finance, agro, digital. La vérité… c’est
          que nos générations se heurtent à un mur.
        </p>

        <p>
          Mais il existe une porte. Une porte que personne ne t’a vraiment
          montrée. Parce qu’on l’a mal racontée. Parce qu’on l’a négligée.
          Parce qu’on l’a sous-estimée.
        </p>

        <p>Cette porte, c’est l’agriculture.</p>

        <h2 className="mt-6 font-serif text-xl">
          👉 Et si c’était là, la vraie opportunité ?
        </h2>

        <p>
          Je vais te donner quelques questions (pas des discours). Des questions
          que chacun devrait se poser :
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Combien d’ingénieurs agronomes sortent chaque année… sans trouver un
            emploi ?
          </li>
          <li>
            Combien d’écoles agricoles existent, mais combien de jeunes y
            entrent avec une vraie vision ?
          </li>
          <li>
            Combien d’entreprises agricoles recrutent des profils marketing,
            financiers, digitaux ?
          </li>
          <li>
            Combien de fermes ferment faute de stratégie, d’accompagnement, de
            communication ?
          </li>
          <li>
            Et surtout : combien de jeunes réalisent qu’ils peuvent apporter
            quelque chose d’immense à ce secteur ?
          </li>
        </ul>

        <p>
          Ce n’est pas que le secteur agricole manque d’opportunités. C’est que
          les opportunités ne sont pas encore racontées, ni structurées, ni
          valorisées.
        </p>

        <h2 className="mt-6 font-serif text-xl">
          👉 L’agriculture n’est plus ce que tu crois.
        </h2>

        <p>
          Oublie l’image du champ poussiéreux qu’on t’a mis dans la tête à
          l’école. Aujourd’hui, l’agriculture c’est : de l’agri-business, de la
          supply chain, du branding, de l’innovation, du digital, de la
          transformation, de la gestion, des marchés à conquérir, des
          entreprises à créer, des solutions à inventer.
        </p>

        <p>
          Ce n’est plus “travailler la terre”. C’est créer de la valeur. Le
          secteur cherche des jeunes capables de structurer, organiser,
          raconter, moderniser, connecter, digitaliser, vendre, transformer. Et
          ça… c’est NOTRE terrain.
        </p>

        <h2 className="mt-6 font-serif text-xl">
          👉 Un secteur en manque de talents = un secteur plein d’opportunités.
        </h2>

        <p>
          Tu veux savoir où se cachent les vraies opportunités aujourd’hui ?
          Elles sont dans les secteurs qui manquent de jeunes talents. Et
          devine lequel en manque le plus ? L’agriculture.
        </p>

        <p>
          Pas parce qu’il est inintéressant. Mais parce qu’il est mal raconté.
          Pendant que tout le monde court vers les mêmes filières saturées,
          l’agriculture manque de jeunes sur TOUTES les chaînes de valeur :
          gestion, marketing, data, innovation, finance, communication,
          opérations, transformation, distribution.
        </p>

        <p>
          Et c’est là que je veux que tu comprennes quelque chose : 👉 Tu n’as
          pas besoin d’être agriculteur pour travailler dans l’agriculture. 👉
          Tu n’as même pas besoin de savoir planter pour créer un business
          agricole. 👉 Ce secteur a simplement besoin de jeunes qui savent ce
          que la nouvelle économie représente.
        </p>

        <h2 className="mt-6 font-serif text-xl">
          👉 Et c’est là que Farmers&Partners intervient.
        </h2>

        <p>
          Je vais être clair : nous ne sommes pas là pour répéter les erreurs du
          passé. Nous sommes là pour créer un nouveau modèle.
        </p>
        <p>Nous voulons :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>attirer les talents,</li>
          <li>former une nouvelle génération,</li>
          <li>connecter les jeunes aux opportunités réelles,</li>
          <li>professionnaliser les fermiers,</li>
          <li>moderniser les entreprises,</li>
          <li>
            donner une visibilité au secteur, prouver que l’agriculture peut
            être un choix ambitieux.
          </li>
        </ul>

        <p>
          Et pour faire ça, nous avons besoin de jeunes visionnaires, de jeunes
          qui veulent faire la différence, de jeunes qui ont faim, de jeunes qui
          ont compris que le monde appartient à ceux qui osent créer ce que les
          autres ne voient pas encore.
        </p>

        <h2 className="mt-6 font-serif text-xl">
          👉 La vérité… c’est que la jeunesse n’a plus le luxe d’attendre.
        </h2>

        <p>
          Nous n’avons pas à subir le système. Nous pouvons le créer. Et si tu
          cherches un domaine où tu peux avoir un impact réel, construire
          quelque chose, devenir un leader, inventer ton propre chemin, gagner
          ta vie dignement… alors je te le dis sincèrement : ne sous-estime
          jamais l’agriculture.
        </p>

        <p>
          Ce n’est pas un retour en arrière. Ce n’est pas “le plan B”. C’est
          peut-être… notre dernière grande opportunité collective.
        </p>

        <p className="mt-6 font-semibold">
          ✨ L’avenir appartient à ceux qui ont le courage d’entrer là où les
          autres n’osent pas regarder.
        </p>

        <p>
          Et si tu veux comprendre ce qu’on construit, si tu veux savoir comment
          t’impliquer, si tu veux toucher du doigt les opportunités réelles :
        </p>
        <p>
          👉 écris-moi. <br />
          👉 parle-moi. <br />
          👉 contacte-moi.
        </p>

        <p>
          Parce qu’une génération est en train de se lever. Et si tu lis ces
          lignes, c’est peut-être que tu es censé en faire partie.
        </p>
      </>
    ),
  },

  "5-raisons-jeunes-agriculture": {
    title:
      "5 raisons pour lesquelles les jeunes ne s’intéressent pas à l’agriculture",
    date: "23 octobre 2025",
    image: "/images/articles/5-raisons-jeunes-agriculture.jpg",
    content: (
      <>
        <p className="mt-4">
          <span className="font-semibold">
            🌱 5 raisons pour lesquelles les jeunes ne s’intéressent pas à
            l’agriculture
          </span>{" "}
          <br />
          <span className="italic">
            (La vérité que personne ne dit à haute voix)
          </span>
        </p>

        <p>
          Je vais être honnête avec vous. Si je parle de ce sujet, c’est parce
          que j’ai longtemps porté cette contradiction en moi : j’aime
          profondément ce secteur… et en même temps, je comprends parfaitement
          pourquoi beaucoup de jeunes ne veulent pas y mettre un pied.
        </p>

        <p>
          Ce n’est pas une question de paresse. Ni de manque d’ambition. Ce
          n’est même pas une question de génération. C’est une question de
          réalité. De ressenti. De ce que nous avons vécu, vu, observé, subi
          parfois.
        </p>

        <h2 className="mt-6 font-serif text-xl">1️⃣ Perception négative</h2>

        <p>
          Ce n’est pas l’agriculture que les jeunes rejettent. C’est l’image
          qu’on leur a mise dans la tête.
        </p>
        <p>
          Depuis petit, on nous a répété : <br />
          <span className="italic">
            “Si tu échoues, tu iras au champ.”
          </span>
        </p>

        <p>
          On a transformé la terre en punition. On a transformé un métier noble
          en symbole d’échec. Comment voulez-vous qu’un jeune s’y projette avec
          fierté ?
        </p>

        <p>
          On ne désire pas ce qui n’est pas valorisé. Et l’agriculture a été mal
          racontée pendant trop longtemps.
        </p>

        <h2 className="mt-6 font-serif text-xl">2️⃣ Migration vers les villes</h2>

        <p>
          Les jeunes ne quittent pas les villages parce qu’ils détestent la
          campagne. Ils partent parce qu’ils veulent exister.
        </p>
        <p>
          Ils cherchent des opportunités, un salaire stable, une vie digne, un
          avenir lisible.
        </p>

        <p>
          Le problème n’est pas la ville. Le problème, c’est que trop souvent,
          le village n’offre rien qui retient. On ne peut pas demander à
          quelqu’un de rester là où il ne se sent pas considéré.
        </p>

        <h2 className="mt-6 font-serif text-xl">3️⃣ Manque d’innovation</h2>

        <p>
          Je vais dire quelque chose qui dérange : l’agriculture n’a pas de
          problème d’image, elle a un problème de rythme.
        </p>

        <p>
          On ne peut pas attirer une génération née avec le digital en lui
          montrant des pratiques figées depuis 30 ans.
        </p>

        <p>
          Les jeunes veulent des drones, de la data, de l’agri-tech, du
          branding, des modèles économiques modernes. Ils veulent faire partie
          d’un mouvement, pas d’un souvenir.
        </p>

        <h2 className="mt-6 font-serif text-xl">
          4️⃣ Accès limité aux informations
        </h2>

        <p>
          Beaucoup de jeunes motivés abandonnent… non pas faute de volonté, mais
          faute d’informations. Ils ne savent pas où se former, comment se
          financer, avec qui travailler, quelles opportunités saisir.
        </p>

        <p>
          Souvent, le système agricole ressemble à un club privé où les règles
          ne sont pas affichées. On ne peut pas demander à des jeunes de
          s’engager dans un domaine dont ils ne connaissent ni les portes, ni
          les chemins.
        </p>

        <h2 className="mt-6 font-serif text-xl">
          5️⃣ Contraintes socio-économiques
        </h2>

        <p>
          Beaucoup de jeunes veulent, mais ne peuvent pas. Accéder à la terre,
          aux financements, au matériel, à un mentorat relève parfois du
          miracle.
        </p>

        <p>
          On ne peut pas demander à un jeune d’être courageux quand chaque porte
          est fermée et que chaque démarche coûte plus qu’elle ne rapporte.
        </p>

        <h2 className="mt-6 font-serif text-xl">💬 Ce que je veux vraiment dire</h2>

        <p>
          Je ne suis pas là pour accuser. Je suis là pour comprendre et
          construire. Je veux que les jeunes se sentent vus, entendus,
          respectés. Je veux que les décideurs voient en nous non pas une
          menace, mais une opportunité historique.
        </p>

        <p>
          Les jeunes ne sont pas le problème de l’agriculture. Ils en sont la
          chance. Et le jour où le système décidera vraiment de leur faire une
          place, pas seulement dans les discours mais dans les faits, alors
          l’agriculture ne sera plus un secteur “abandonné”, mais un secteur
          réinventé.
        </p>

        <p className="mt-6 text-sm text-gray-600">
          📚 Références : FAO (2023), Eurostat (2023), OCDE (2021), Banque
          mondiale (2020), Commission européenne (2024).
        </p>
      </>
    ),
  },

  "5-idees-image-agriculture": {
    title: "5 idées pour rendre l’image de l’agriculture plus attractive",
    date: "23 septembre 2025",
    image: "/images/articles/5-idees-image-agriculture.jpg",
    content: (
      <>
        <p className="mt-4">
          <span className="font-semibold">
            🌱 5 idées pour rendre l’image de l’agriculture plus attractive
          </span>{" "}
          <br />
          <span className="italic">
            (La transformation dont le secteur a réellement besoin)
          </span>
        </p>

        <p>
          Je vais commencer par une vérité simple : l’agriculture n’a jamais été
          le problème. C’est l’image qu’on a laissée s’installer autour d’elle.
        </p>

        <p>
          On a laissé croire que l’agriculture, c’est la souffrance. Qu’elle est
          réservée à ceux qui n’ont pas eu de choix. Qu’elle n’est ni moderne,
          ni valorisante, ni rentable.
        </p>

        <p>
          Mais la vérité ? C’est que l’agriculture a toujours été un secteur de
          puissance, de créativité, d’innovation… simplement, personne ne l’a
          raconté comme ça.
        </p>

        <p>
          Aujourd’hui, j’ai envie de partager 5 pistes très concrètes — pas des
          slogans — pour changer cette perception. 5 idées pour redonner envie.
          5 idées pour redonner de la fierté. 5 idées pour ouvrir un nouveau
          chapitre.
        </p>

        <h2 className="mt-6 font-serif text-xl">
          1️⃣ Professionnaliser les acteurs du secteur agricole
        </h2>

        <p>
          L’agriculture doit sortir de la logique de “survie” pour entrer dans
          la logique de “business”.
        </p>

        <p>
          Un fermier n’est pas un “travailleur manuel”. C’est un chef
          d’entreprise, un stratège, un gestionnaire, un décideur.
        </p>

        <p>
          Le monde agricole ne souffre pas d’un manque de ressources. Il souffre
          d’un manque de structure, de gestion, de vision entrepreneuriale.
        </p>

        <h2 className="mt-6 font-serif text-xl">2️⃣ Une meilleure visibilité</h2>

        <p>
          Le travail agricole est incroyable. Mais trop souvent… personne ne le
          voit. On montre les récoltes, mais on ne montre pas le talent derrière.
          On montre les champs, mais pas l’intelligence qu’il faut pour les
          gérer.
        </p>

        <p>
          La visibilité n’est pas un luxe. C’est un devoir. Les médias, les
          radios, les télévisions, les réseaux sociaux doivent devenir la
          vitrine du courage, de la compétence et du potentiel agricole.
        </p>

        <h2 className="mt-6 font-serif text-xl">
          3️⃣ L’implication de la jeunesse
        </h2>

        <p>
          Le secteur agricole ne peut pas prétendre se moderniser si la jeunesse
          n’est pas au centre. Pas en périphérie. Pas comme “bénéficiaires”. Au
          centre : sur le terrain, dans les décisions, dans les solutions, dans
          l’innovation.
        </p>

        <p>
          La jeunesse est le plus grand accélérateur de transformation agricole.
        </p>

        <h2 className="mt-6 font-serif text-xl">
          4️⃣ Une collaboration saine &amp; transparente
        </h2>

        <p>
          On ne construit pas un secteur puissant dans la méfiance, la
          compétition malsaine ou les égos. Un secteur agricole fort est un
          secteur où les petits et les grands se parlent, où les projets ne sont
          pas des secrets, où les succès sont partagés.
        </p>

        <p>
          On n’a pas besoin de “réformer l’agriculture”. On a besoin de réformer
          les relations entre les acteurs de l’agriculture.
        </p>

        <h2 className="mt-6 font-serif text-xl">
          5️⃣ Une technologie adaptée
        </h2>

        <p>
          On ne modernise pas un secteur en lui envoyant des machines qu’il ne
          peut pas entretenir, ni des innovations déconnectées du terrain.
        </p>

        <p>
          La vraie technologie agricole est celle qui respecte le contexte,
          comprend les réalités locales, est durable, accessible, utile,
          évolutive — et entre les mains de jeunes formés.
        </p>

        <h2 className="mt-6 font-serif text-xl">🎯 Ce que je veux vraiment dire</h2>

        <p>
          L’image de l’agriculture ne changera pas parce qu’on fera une belle
          affiche. Elle changera quand on fera de l’agriculture un secteur où
          les jeunes veulent entrer par désir, pas par défaut.
        </p>

        <p>
          Un secteur où l’on se sent fier, où l’on peut grandir, réussir,
          innover, rêver.
        </p>

        <p>
          L’agriculture n’est pas vieille. Elle est fatiguée d’être mal
          racontée. Et je crois profondément que notre génération — la tienne,
          la mienne — est celle qui peut réécrire toute l’histoire.
        </p>

        <p className="mt-4 font-semibold">
          L’image de l’agriculture changera le jour où ceux qui la font auront
          enfin compris la valeur qu’ils portent. Et ce jour-là, tout le monde
          voudra en faire partie.
        </p>
      </>
    ),
  },

  "2036-poulet-entier-salon-agriculture": {
    title: "2036 : vous ne verrez plus de poulet entier",
    date: "16 septembre 2026",
    image: "/images/articles/salon-agriculture-poulet-2036.jpg",
    content: (
      <>
        <p>
          S'il y a une chose que je n'ai plus peur de faire, c'est me projeter
          sur dix ans. Alors quand l'Acta, le réseau national des instituts
          techniques agricoles français, a proposé Impro d'Agro lors du
          dernier Salon International de l'Agriculture à Paris, un défi de
          design fiction où il fallait s'imaginer ingénieur en 2036 pour
          inventer des solutions concrètes à plusieurs filières agricoles,
          j'ai tout de suite voulu y amener mon amour pour ce secteur.
        </p>

        <p>
          Notre équipe s'est vu confier la filière avicole, et sa place dans
          la souveraineté alimentaire française. Un vrai coup de chance :
          nous étions en plein Salon, donc tous les acteurs de la filière
          étaient là, à portée de question. J'en ai profité pour interroger
          un maximum de monde : d'Anvol, l'interprofession de la volaille de
          chair, aux responsables du stand jeunes agriculteurs, du ministère
          aux assureurs, des restaurateurs jusqu'aux consommateurs eux-mêmes
          sur place.
        </p>

        <hr className="my-8" />

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Ce qu'on attendait probablement de nous
        </h2>

        <p>
          Beaucoup s'attendaient à ce qu'on ressorte les constats habituels,
          et ils ne sont pas faux : que les producteurs étouffent sous les
          réglementations, que le modèle "poulet hors cage" s'essouffle face
          à la hausse de la consommation, que les importations ne sont plus
          un simple complément de concurrence mais un vrai besoin structurel
          pour nourrir le pays, que certains distributeurs n'hésitent pas à
          se tourner vers l'offre la moins chère au détriment des producteurs
          locaux, et que les pouvoirs publics peinent à suivre le rythme.
          Bref, que la souveraineté alimentaire française prend un coup, et
          que la filière avicole y est pour beaucoup.
        </p>

        <p>
          Tout ça est vrai, chiffres à l'appui. La consommation de poulet a
          bondi de 24,4 % en cinq ans, et encore de 5,6 % rien qu'entre 2024
          et 2025. Le poulet a dépassé le bœuf dès 2013, puis toute la viande
          bovine à lui seul en 2022. Et en 2024, la volaille a rattrapé le
          porc comme viande la plus consommée en France. La production peine
          à suivre : elle a certes augmenté, mais "l'offre en poulet du
          quotidien reste insuffisante aujourd'hui", comme le résume sans
          détour le président d'Anvol. Résultat : le recours aux importations
          continue de grandir, exactement au moment où on parle de plus en
          plus de souveraineté alimentaire.
        </p>

        <hr className="my-8" />

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Mais ce n'est pas ça qui m'a le plus marqué
        </h2>

        <p>
          Pas parce que tout ce qui précède n'a pas d'importance, au
          contraire. Mais parce qu'il se passe, en silence, quelque chose
          d'encore plus profond : le poulet entier est en train de
          disparaître de nos maisons.
        </p>

        <p>
          En 1998, il représentait 52 % des achats de poulet en rayon.
          Aujourd'hui, il ne pèse plus que 14,4 %. À la place, ce sont les
          découpes (ailes, cuisses, filets) qui dominent avec 51,2 % des
          achats, et les produits élaborés (nuggets, panés, préparations
          diverses) qui captent plus de 30 % du reste. Ce n'est pas une
          tendance qui s'amorce. C'est une bascule déjà largement accomplie.
        </p>

        <p>
          Et si vos futurs enfants, vos futurs petits-enfants, ne savaient
          plus vraiment à quoi ressemble un poulet entier ? Bon j'abuse un
          peu, mais à peine : on peut très bien imaginer un futur où voir
          l'animal dans son intégralité devienne suffisamment rare pour
          surprendre, comme une curiosité plutôt qu'un produit du quotidien.
        </p>

        <p>
          Ce qui rend cette bascule incroyable, c'est qu'elle est
          parfaitement organisée par tranche d'âge. Les tenders et les
          nuggets pour les enfants, les ailes pour l'apéro, l'escalope pour
          le repas rapide et équilibré. Chacun trouve sa pièce, son format,
          son moment de consommation, et personne ne se sent obligé de
          remettre en question l'animal entier, puisqu'il n'a plus vraiment
          sa place dans cette organisation.
        </p>

        <hr className="my-8" />

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Pourquoi ça me concerne, au-delà du poulet
        </h2>

        <p>
          Une filière qu'on ne voit plus dans son ensemble, c'est une filière
          plus difficile à défendre dans son ensemble. Quand l'acte d'achat
          se réduit à un morceau anonyme sous plastique, le lien avec
          l'élevage, avec le producteur, avec les choix qui façonnent cette
          filière, s'affaiblit d'autant. Ce n'est pas un hasard si, dans le
          même mouvement, la souveraineté alimentaire sur ce secteur devient
          un sujet d'inquiétude croissante.
        </p>

        <p>
          C'est très exactement le genre de constat qui m'a poussé à fonder
          AgriComp quelques mois plus tard : l'agriculture de demain n'a pas
          seulement besoin de plus de production. Elle a besoin de gens
          capables de comprendre ces bascules de consommation, de les
          anticiper, de les expliquer au grand public, des compétences en
          stratégie, en communication, en analyse, autant qu'en agronomie.
        </p>

        <p>
          2036, ce n'est plus si loin. La vraie question n'est pas de savoir
          si le poulet entier va continuer à disparaître de nos maisons,
          c'est déjà en cours. La question, c'est ce qu'on choisit de
          comprendre et de raconter à ce sujet, avant que la génération
          suivante ne se contente d'un poulet qui n'a plus jamais eu de forme
          entière.
        </p>

        <p className="mt-6 font-semibold">
          Yvan TONGO
          <br />
          Futur Expert conseil en stratégie de développement des filières
          agricole et agroalimentaire
        </p>
      </>
    ),
  },
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

  if (!article) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#fbf3e5] text-[#10351f]">
      <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-600">
          Article
        </p>
        <h1 className="mt-1 font-serif text-3xl md:text-4xl">
          {article.title}
        </h1>
        <p className="mt-1 text-sm text-gray-600">Publié le {article.date}</p>

        <div className="mt-6 overflow-hidden rounded-2xl bg-[#10251b]/5 flex justify-center">
          <img
            src={article.image}
            alt={article.title}
            className="w-full max-h-[420px] object-contain"
          />
        </div>

        <div className="mt-8 space-y-4 text-[15px] md:text-[17px] leading-relaxed text-gray-800">
          {article.content}
        </div>

        <a href="/articles" className="mt-10 inline-block text-sm underline text-[#10351f]">
          ← Retour aux articles
        </a>
      </section>
    </main>
  );
}
