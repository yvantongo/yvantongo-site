export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F1E5] text-[#1A1A1A]">
      <header className="sticky top-0 z-50 backdrop-blur bg-[#F7F1E5]/80 border-b border-[#C1A16A]/30">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="#home" className="font-semibold text-xl tracking-tight">Yvan Tongo</a>
          <ul className="hidden md:flex gap-6 text-sm">
            <li><a href="#manifeste" className="hover:opacity-70">Manifeste</a></li>
            <li><a href="#articles" className="hover:opacity-70">Articles</a></li>
            <li><a href="#projets" className="hover:opacity-70">Projets</a></li>
            <li><a href="#apropos" className="hover:opacity-70">À propos</a></li>
            <li><a href="#contact" className="hover:opacity-70">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="home" className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 pt-20 pb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif italic leading-tight text-[#18392B]">
            L’agriculture n’est pas un héritage, c’est une mission.
          </h1>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            Yvan Tongo — Management & Expertise Agricole | Agribusiness & Rural Transformation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#manifeste" className="rounded-2xl bg-[#18392B] text-white px-4 py-2 text-sm hover:bg-[#10251B]">Lire le Manifeste</a>
            <a href="#projets" className="rounded-2xl border border-[#C1A16A] text-[#18392B] px-4 py-2 text-sm hover:bg-[#C1A16A]/10">Découvrir mes projets</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src="/images/yvan-portrait.jpg" alt="Portrait d’Yvan Tongo" className="w-80 h-80 object-cover rounded-3xl shadow-xl" />
        </div>
      </section>
      <section id="manifeste" className="bg-[#18392B] text-[#F7F1E5] py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-serif font-semibold">11 Actions Concrètes pour Dynamiser le Secteur Agricole au Cameroun</h2>
            <p className="mt-2 italic text-[#C1A16A]">Lettre ouverte aux décideurs du secteur</p>
            <p className="mt-6 text-[#F7F1E5]/90 leading-relaxed">
              Et si, pour une fois, on arrêtait d’attendre les solutions d’en haut, et qu’on prenait la parole, nous, ceux du terrain, ceux qui croient encore que ce pays peut se nourrir de lui-même…
            </p>
            <div className="mt-6">
              <a href="#" className="rounded-2xl bg-[#C1A16A] text-[#18392B] px-4 py-2 text-sm hover:bg-[#D3B77A]">Lire le Manifeste complet</a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img src="/images/manifesto-cover.jpg" alt="Couverture du Manifeste" className="rounded-2xl shadow-lg max-w-md" />
          </div>
        </div>
      </section>
      <section id="articles" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-serif text-[#18392B] font-semibold tracking-tight">Articles</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <article key={i} className="border border-[#C1A16A]/40 bg-white rounded-2xl overflow-hidden hover:shadow-md transition">
              <div className="aspect-[16/9] bg-[#C1A16A]/10" />
              <div className="p-5">
                <h3 className="font-medium text-[#18392B]">Titre de l’article {i}</h3>
                <p className="mt-1 text-sm text-gray-600">Résumé court de l’article. Angle, enseignement clé, et valeur pour le lecteur.</p>
                <div className="mt-3 text-xs text-gray-500">Publié le 7 nov. 2025</div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="projets" className="bg-[#F7F1E5] border-t border-[#C1A16A]/30 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-[#18392B] font-semibold tracking-tight">Projets</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Farmers&Partners","Dschang au travail","GRILL","SHEroes"].map((title, i) => (
              <div key={i} className="border border-[#C1A16A]/40 rounded-2xl bg-white overflow-hidden hover:shadow-md transition">
                <div className="aspect-[4/3] bg-[#C1A16A]/10" />
                <div className="p-4">
                  <h3 className="font-medium text-[#18392B]">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">Objectif, impact, et appel à contribution.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="apropos" className="bg-[#18392B] text-[#F7F1E5] py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1 flex justify-center">
            <img src="/images/yvan-portrait.jpg" alt="Yvan Tongo" className="w-72 rounded-2xl shadow-lg" />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif font-semibold">À propos</h2>
            <p className="mt-4 text-[#F7F1E5]/90 leading-relaxed">
              Étudiant MSc en Management et Expertise Agricole & Agroalimentaire | Agribusiness & Rural Transformation | Jeune leader engagé entre l’Europe et l’Afrique. <br />
              L’agriculture n’est pas un héritage, c’est une mission.
            </p>
            <p className="mt-4 text-[#F7F1E5]/80 leading-relaxed">
              Passionné par le développement du secteur agricole africain, je consacre mon parcours à la professionnalisation des acteurs, à l’intégration des jeunes et à la modernisation des chaînes de valeur agricoles et agroalimentaires.
            </p>
            <p className="mt-4 text-[#F7F1E5]/80 leading-relaxed">
              🎓 Étudiant à l’IHEDREA Paris, j’apprends auprès des meilleures entreprises et institutions européennes afin de renforcer mes compétences en stratégie, innovation et développement rural.
            </p>
            <p className="mt-4 text-[#F7F1E5]/80 leading-relaxed">
              🌍 Mon ambition : préparer une nouvelle génération d’acteurs agricoles capables de transformer les exploitations en véritables entreprises, de créer de la richesse et de répondre aux défis socio-économiques du continent.
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-serif text-[#18392B] font-semibold">Contact</h2>
            <p className="mt-3 text-gray-700">Invitations, partenariats, médias : parlons-en.</p>
            <p className="mt-4 text-sm">✉️ contact@yvantongo.net</p>
            <p className="text-sm mt-1">🔗 LinkedIn, Instagram, YouTube</p>
          </div>
          <form className="border border-[#C1A16A]/40 rounded-2xl p-6 bg-white space-y-4">
            <div>
              <label className="text-sm">Nom</label>
              <input className="mt-1 w-full rounded-xl border border-[#C1A16A]/40 px-3 py-2 outline-none focus:ring-2 focus:ring-[#18392B]" placeholder="Votre nom" />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-[#C1A16A]/40 px-3 py-2 outline-none focus:ring-2 focus:ring-[#18392B]" placeholder="vous@exemple.com" />
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-xl border border-[#C1A16A]/40 px-3 py-2 outline-none focus:ring-2 focus:ring-[#18392B]" placeholder="Dites-en plus…"></textarea>
            </div>
            <button type="button" className="w-full rounded-2xl bg-[#18392B] text-white px-4 py-2 text-sm hover:bg-[#10251B]">Envoyer</button>
          </form>
        </div>
      </section>
      <footer className="border-t border-[#C1A16A]/30 py-8 text-sm text-gray-700">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Yvan Tongo. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Mentions légales</a>
            <a href="#" className="hover:underline">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
