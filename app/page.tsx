export default function Home() {
  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C]">

      {/* HERO */}
      <section className="h-screen flex items-center justify-center bg-[url('/hero.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Light, Crafted by Nature
          </h1>
          <p className="max-w-xl mx-auto mb-8 text-lg">
            Timeless stained glass creations, thoughtful restorations, and hands-on workshops that bring warmth, colour, and story into your world.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-[#D4A017] text-black px-6 py-3 rounded-xl">
              Explore Commissions
            </button>
            <button className="border border-white px-6 py-3 rounded-xl">
              View Workshops
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 text-center">
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

          <div>
            <h3 className="text-2xl font-serif mb-4">Commissions</h3>
            <p>Bespoke stained glass pieces designed to reflect your space, your story, and your light.</p>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-4">Repairs</h3>
            <p>Restore the beauty and integrity of cherished stained glass with care and craftsmanship.</p>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-4">Workshops</h3>
            <p>Step into the craft and create your own piece in a guided, hands-on experience.</p>
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6 bg-[#EAE3D6] text-center">
        <h2 className="text-3xl font-serif mb-4">Crafted Pieces</h2>
        <p className="mb-10">Each piece carries its own story, shaped by hand and illuminated by light.</p>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div className="h-60 bg-gray-300"></div>
          <div className="h-60 bg-gray-400"></div>
          <div className="h-60 bg-gray-500"></div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="h-80 bg-gray-300"></div>
        <div>
          <h2 className="text-3xl font-serif mb-4">Our Craft</h2>
          <p>
            Luminous By Nature is rooted in a deep respect for traditional stained glass craftsmanship.
            Each piece is created with intention, patience, and an understanding that light is more than illumination… it is atmosphere, memory, and presence.
          </p>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 px-6 text-center bg-[#1C1C1C] text-white">
        <h2 className="text-3xl font-serif mb-4">Stay Connected</h2>
        <p className="mb-6">Be the first to see new creations, workshops, and releases.</p>

        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 rounded-xl text-black w-64"
        />
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm">
        <p>luminousbynature.com.au@gmail.com</p>
        <p>Phone: 0458 899 227</p>
      </footer>

    </main>
  );
}