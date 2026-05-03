import LightboxGallery from "@/app/components/Lightbox";

export default function Home() {
  return (
    <>
      <main className="bg-[#F5F1E8] text-[#1C1C1C]">

        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center bg-[#1C1C1C] text-white px-6 py-24">
          <div className="text-center max-w-3xl mx-auto">

            <img
              src="/images/hero2.png"
              alt="Luminous By Nature stained glass Sunshine Coast"
              className="mx-auto mb-8 max-h-[60vh] object-contain"
            />

            <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

            <h1 className="text-4xl md:text-5xl font-serif tracking-wide mb-6">
              Light, Crafted by Nature
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto">
              Timeless stained glass creations, thoughtful restorations,
              and hands-on workshops that bring warmth, colour and story into your world.
            </p>

            <div className="mt-8 flex gap-4 justify-center">
              <a href="/commissions" className="btn-primary">
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



        {/* STUDIO OFFERINGS */}
        <section className="py-24 px-6 bg-[#EFE7D8] text-center">

          <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

          <h2 className="text-4xl font-serif mb-12">
            Studio Offerings
          </h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

            <a href="/commissions" className="p-8 rounded-xl hover:bg-[#F5F1E8] transition shadow-sm hover:shadow-md">
              <h3 className="text-2xl font-serif mb-4 hover:text-[#D4A017]">Commissions</h3>
              <p>
                Custom stained glass commissions for homes,
                interiors and sacred spaces across Sunshine Coast and Brisbane.
              </p>
            </a>

            <a href="/repairs" className="p-8 rounded-xl hover:bg-[#F5F1E8] transition shadow-sm hover:shadow-md">
              <h3 className="text-2xl font-serif mb-4 hover:text-[#D4A017]">Repairs</h3>
              <p>
                Restore and preserve treasured stained glass with expert craftsmanship.
              </p>
            </a>

            <a href="/workshops" className="p-8 rounded-xl hover:bg-[#F5F1E8] transition shadow-sm hover:shadow-md">
              <h3 className="text-2xl font-serif mb-4 hover:text-[#D4A017]">Workshops</h3>
              <p>
                Learn the craft and create your own stained glass piece.
              </p>
            </a>

          </div>

        </section>



        {/* OUR CRAFT */}
        <section className="py-24 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <img
            src="/images/studio.jpg"
            alt="Traditional stained glass studio Sunshine Coast"
            className="glow rounded-xl h-96 w-full object-cover"
          />

          <div>

            <div className="w-12 h-[2px] bg-[#D4A017] mb-6"></div>

            <h2 className="text-4xl font-serif mb-6">
              Our Craft
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Luminous By Nature is rooted in traditional stained glass craftsmanship.
              Each piece is created with intention, patience and deep respect for light.
            </p>

            <p className="mt-6 italic text-lg text-gray-700">
              Crafted slowly. Designed intentionally. Made to last.
            </p>

          </div>

        </section>



        {/* LIGHTBOX GALLERY */}
        <section className="py-24 px-6 bg-[#EAE3D6] text-center">

          <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

          <h2 className="text-4xl font-serif mb-4">
            Selected Works
          </h2>

          <p className="mb-16 text-gray-700">
            Click a piece to explore.
          </p>

          // <LightboxGallery />

        </section>



        {/* TESTIMONIALS */}
        <section className="py-24 px-6 bg-[#F8F4EC] text-center">

          <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

          <h2 className="text-4xl font-serif mb-12">
            Collected Kind Words
          </h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="text-[#D4A017] text-xl mb-4">★★★★★</div>
              <p className="italic mb-4">
                “Absolutely stunning craftsmanship. Our home feels transformed.”
              </p>
              <p className="text-sm text-gray-500">Google Review</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="text-[#D4A017] text-xl mb-4">★★★★★</div>
              <p className="italic mb-4">
                “An unforgettable workshop experience.”
              </p>
              <p className="text-sm text-gray-500">ClassBento</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="text-[#D4A017] text-xl mb-4">★★★★★</div>
              <p className="italic mb-4">
                “Beautiful artistry and wonderful guidance.”
              </p>
              <p className="text-sm text-gray-500">Client Review</p>
            </div>

          </div>

        </section>



        {/* NEWSLETTER */}
        <section className="py-24 text-center bg-[#EFE7D8]">

          <h2 className="text-3xl font-serif mb-4">
            Join Our Mailing List
          </h2>

          <form
            action="https://formspree.io/f/xlgaalob"
            method="POST"
            className="max-w-md mx-auto flex gap-4 flex-col md:flex-row"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="flex-1 p-3 rounded-xl border"
            />

            <button className="btn-primary">
              Subscribe
            </button>
          </form>

        </section>



        {/* FOOTER */}
        <footer className="py-12 text-center text-sm bg-[#EAE3D6]">
          <p>luminousbynature.com.au@gmail.com</p>
          <p>0458 899 227</p>
        </footer>

      </main>



      {/* FLOATING CTA */}
      <a
        href="/commissions"
        className="fixed bottom-6 right-6 btn-primary shadow-lg z-50"
      >
        Enquire
      </a>

    </>
  );
}