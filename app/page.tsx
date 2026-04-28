export default function Home() {
  return (
    <>
      <main className="bg-[#F5F1E8] text-[#1C1C1C]">

        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center bg-[#1C1C1C] text-white px-6 py-24">

          <div className="text-center max-w-3xl mx-auto fade-in">

            <img
              src="/images/hero.png"
              alt="Luminous By Nature stained glass Sunshine Coast"
              className="mx-auto mb-8 max-h-[60vh] object-contain"
            />

            <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

            <h1 className="text-4xl md:text-5xl font-serif tracking-wide mb-6">
              Light, Crafted by Nature
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto">
              Timeless stained glass creations, thoughtful restorations,
              and hands-on workshops that bring warmth, colour,
              and story into your world. Handcrafted stained glass artist based on the Sunshine Coast, serving Brisbane and beyond.
            </p>

            {/* CTA */}
            <div className="mt-8 flex gap-4 justify-center">
              <a
                href="/commissions"
                className="btn-primary"
              >
                Commission a Piece
              </a>

              <a
                href="/workshops"
                className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
              >
                View Workshops
              </a>
            </div>

          </div>

        </section>


        {/* SERVICES */}
        <section className="py-24 px-6 bg-[#EFE7D8]">

          <div className="text-center mb-16">
            <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

            <h2 className="text-4xl md:text-5xl font-serif tracking-wide mb-4">
              What We Offer
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Crafted commissions, thoughtful restoration and immersive workshops.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">

            <a href="/commissions"
              className="p-8 rounded-xl hover:bg-[#F5F1E8] transition shadow-sm hover:shadow-md">

              <h3 className="text-2xl font-serif mb-4 hover:text-[#D4A017]">
                Commissions
              </h3>

              <p className="leading-relaxed">
                Custom stained glass commissions for homes, interiors and sacred spaces across Sunshine Coast and Brisbane.
              </p>

            </a>


            <a href="/repairs"
              className="p-8 rounded-xl hover:bg-[#F5F1E8] transition shadow-sm hover:shadow-md">

              <h3 className="text-2xl font-serif mb-4 hover:text-[#D4A017]">
                Repairs
              </h3>

              <p className="leading-relaxed">
                Restore and preserve treasured stained glass with expert craftsmanship.
              </p>

            </a>


            <a href="/workshops"
              className="p-8 rounded-xl hover:bg-[#F5F1E8] transition shadow-sm hover:shadow-md">

              <h3 className="text-2xl font-serif mb-4 hover:text-[#D4A017]">
                Workshops
              </h3>

              <p className="leading-relaxed">
                Learn the craft and create your own stained glass piece.
              </p>

            </a>

          </div>

        </section>


        {/* STORY */}
        <section className="py-24 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <img
            src="/images/studio.jpg"
            alt="Traditional stained glass studio Sunshine Coast"
            className="glow rounded-xl h-96 w-full object-cover"
          />

          <div>

            <div className="w-12 h-[2px] bg-[#D4A017] mb-6"></div>

            <h2 className="text-4xl font-serif tracking-wide mb-6">
              Our Craft
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Luminous By Nature is rooted in a deep respect for traditional
              stained glass craftsmanship. Each piece is created with intention,
              patience and the understanding that light is atmosphere,
              memory and presence.
            </p>

            <p className="mt-6 italic text-lg text-gray-700">
              Crafted slowly. Designed intentionally. Made to last.
            </p>

          </div>

        </section>



        {/* GALLERY */}
        <section className="py-24 px-6 bg-[#EAE3D6] text-center">

          <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

          <h2 className="text-4xl font-serif tracking-wide mb-4">
            Crafted Pieces
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-16 max-w-2xl mx-auto">
            Each piece carries its own story, shaped by hand and illuminated by light.
          </p>


          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

            <img
              src="/images/glass1.jpeg"
              className="glow rounded-xl h-72 w-full object-cover mt-6"
              alt="Handcrafted stained glass artwork Sunshine Coast"
            />

            <img
              src="/images/glass2.jpg"
              className="glow rounded-xl h-72 w-full object-cover"
              alt="Traditional stained glass repair work Queensland"
            />

            <img
              src="/images/glass3.jpg"
              className="glow rounded-xl h-72 w-full object-cover mt-10"
              alt="Custom leadlight stained glass commission Queensland"
            />

          </div>

        </section>



        {/* TESTIMONIAL PREVIEW */}
        <section className="py-24 px-6 text-center">

          <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

          <h2 className="text-4xl font-serif tracking-wide mb-10">
            Kind Words
          </h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            <p className="italic text-lg text-gray-700">
              “Absolutely stunning craftsmanship.”
            </p>

            <p className="italic text-lg text-gray-700">
              “An unforgettable workshop experience.”
            </p>

            <p className="italic text-lg text-gray-700">
              “Beautiful artistry and wonderful guidance.”
            </p>
          </div>

        </section>


        {/* NEWSLETTER SIGNUP */}
<section className="py-24 text-center bg-[#EFE7D8]">

  <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

  <h2 className="text-4xl font-serif tracking-wide mb-4">
    Join Our Mailing List
  </h2>

  <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8 leading-relaxed">
    Receive workshop releases, new stained glass works,
    studio news and occasional sparks of inspiration.
  </p>

  <form
    action="https://formspree.io/f/xlgaalob"
    method="POST"
    className="max-w-md mx-auto flex flex-col md:flex-row gap-4"
  >

    <input
      type="email"
      name="email"
      required
      placeholder="Your Email"
      className="flex-1 p-3 rounded-xl border"
    />

    <input
      type="hidden"
      name="enquiryType"
      value="Newsletter Signup"
    />

    <button className="btn-primary">
      Subscribe
    </button>

  </form>

</section>



        {/* FOOTER */}
        <footer className="py-12 text-center text-sm bg-[#EAE3D6]">
          <p className="mb-2">
            luminousbynature.com.au@gmail.com
          </p>

          <p className="mb-4">
            0458 899 227
          </p>

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Luminous By Nature
          </p>
        </footer>

      </main>


      {/* FLOATING ENQUIRE BUTTON */}
      <a
        href="/commissions"
        className="fixed bottom-6 right-6 btn-primary shadow-lg z-50"
      >
        Enquire
      </a>

    </>
  );
}