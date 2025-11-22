export default function ManifestePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-[#10351f]">

      <h1 className="font-serif text-4xl mb-6">Manifeste</h1>

      <img
        src="/images/manifesto-cover-new.jpg"
        alt="Manifeste"
        className="w-full rounded-xl mb-8"
      />

      <p className="text-lg leading-relaxed mb-6">
        Ce manifeste s’intitule “11 actions pour dynamiser le secteur agricole 
au Cameroun”, 
mais au fond, il parle de plus que d’agriculture. 
Il parle de vision, de jeunesse, de leadership. 
Il parle d’un pays qui cherche sa direction, 
et d’une génération qui refuse d’attendre qu’on la lui trace.
      </p>

      <p className="text-lg leading-relaxed mb-6">
         J’ai voulu que ces 11 actions soient concrètes, accessibles, réalisables, 
mais surtout porteuses d’un souffle humain. 
Elles ne viennent pas d’un bureau, 
mais d’une observation sincère du terrain, 
des fermiers qui se battent, 
des coopératives qui survivent, 
des jeunes qui rêvent, 
et des décideurs qui, souvent, manquent simplement d’un plan lisible
      </p>

      <p className="text-lg leading-relaxed mb-6">

     Voici ma contribution. 
Voici notre lettre. 
Celle d’une génération qui ne veut plus subir, 
mais semer et récolter enfin, le pays qu’elle mérite.
      </p>

      <p className="text-lg leading-relaxed mb-10 font-semibold">
        Bonne lecture...
      </p>

      <a
        href="/manifeste.pdf"
        download
        className="inline-block bg-[#10351f] text-white px-6 py-3 rounded-full"
      >
        Télécharger le manifeste
      </a>
    </main>
  );
}
