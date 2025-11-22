export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fbf3e5] text-[#10351f]">
      <section className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <h1 className="font-serif text-3xl md:text-4xl">Contact</h1>
        <p className="mt-2 text-sm md:text-base text-gray-700">
          Invitations, partenariats, médias : parlons-en.
        </p>

        {/* Infos texte à gauche */}
        <div className="mt-6 text-sm text-gray-800">
          <p>
            📧{" "}
            <a
              href="mailto:yvantongo237@gmail.com"
              className="underline"
            >
              yvantongo237@gmail.com
            </a>
          </p>
          <p className="mt-2">🔗 LinkedIn, Instagram, YouTube</p>
        </div>

        {/* Formulaire à droite sur grand écran */}
        <div className="mt-8 flex flex-col md:flex-row md:items-start md:gap-10">
          <div className="md:flex-1" />

          <div className="md:flex-1 max-w-lg w-full">
            <form
              action="mailto:yvantongo237@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-4 rounded-2xl border border-[#eadfcd] bg-white p-6 shadow-sm"
            >
              <div>
                <label className="block text-sm font-medium text-[#10351f]">
                  Nom
                </label>
                <input
                  type="text"
                  name="Nom"
                  required
                  className="mt-1 w-full rounded-xl border border-[#eadfcd] bg-[#fbf3e5] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#10351f]"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#10351f]">
                  Email
                </label>
                <input
                  type="email"
                  name="Email"
                  required
                  className="mt-1 w-full rounded-xl border border-[#eadfcd] bg-[#fbf3e5] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#10351f]"
                  placeholder="vous@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#10351f]">
                  Message
                </label>
                <textarea
                  name="Message"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-xl border border-[#eadfcd] bg-[#fbf3e5] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#10351f]"
                  placeholder="Dites-en plus…"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-[#10251b] px-6 py-2 text-sm font-medium text-white hover:bg-[#0b1c14]"
              >
                Envoyer
              </button>
            </form>

            <p className="mt-3 text-xs text-gray-600">
                
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
