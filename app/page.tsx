export default function Home() {
  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C]">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center bg-[#1C1C1C] text-white px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">

          <img
            src="/images/hero.png"
            alt="Luminous By Nature logo"
            className="mx-auto mb-8 max-h-[60vh] object-contain"
          />

          <h1 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">
            Light, Crafted by Nature
          </h1>

          <p className="text-lg md:text-xl text-gray-300">
            Timeless stained glass creations, thoughtful restorations, and hands-on workshops that bring warmth, colour, and story into your world.
          </p>

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
          <img src="/images/glass1.jpeg" alt="Glass piece 1" className="h-60 w-full object-cover rounded-xl" />
          <img src="/images/glass2.jpg" alt="Glass piece 2" className="h-60 w-full object-cover rounded-xl" />
          <img src="/images/glass3.jpg" alt="Glass piece 3" className="h-60 w-full object-cover rounded-xl" />
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img src="/images/studio.jpg" alt="Studio" className="h-80 w-full object-cover rounded-xl" />
        <div>
          <h2 className="text-3xl font-serif mb-4">Our Craft</h2>
          <p>
            Luminous By Nature is rooted in a deep respect for traditional stained glass craftsmanship.
            Each piece is created with intention, patience, and an understanding that light is more than illumination… it is atmosphere, memory, and presence.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm">
        <p>luminousbynature.com.au@gmail.com</p>
        <p>Phone: 0458 899 227</p>
      </footer>

    </main>
  );
}