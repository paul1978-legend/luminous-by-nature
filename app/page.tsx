export default function Home() {
  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C]">

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#1C1C1C] text-white px-6 py-20 text-center">

        <img
          src="/images/hero.png"
          alt="Luminous By Nature logo"
          className="mx-auto mb-8 max-h-[60vh] object-contain"
        />

        <h1 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">
          Light, Crafted by Nature
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
          Timeless stained glass creations, thoughtful restorations, and hands-on workshops that bring warmth, colour, and story into your world.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex gap-4 justify-center">
          <a href="/commissions" className="bg-[#D4A017] text-black px-6 py-3 rounded-xl">
            Commission a Piece
          </a>
          <a href="/workshops" className="border border-white px-6 py-3 rounded-xl">
            View Workshops
          </a>
        </div>

      </section>

      {/* SERVICES */}
      <section className="py-20 px-6">
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">

          <a href="/commissions" className="p-6 rounded-xl hover:bg-[#EAE3D6] transition shadow-sm hover:shadow-md">
            <h3 className="text-2xl font-serif mb-4 hover:text-[#D4A017]">Commissions</h3>
            <p>Bespoke stained glass pieces designed to reflect your space and story.</p>
          </a>

          <a href="/repairs" className="p-6 rounded-xl hover:bg-[#EAE3D6] transition shadow-sm hover:shadow-md">
            <h3 className="text-2xl font-serif mb-4 hover:text-[#D4A017]">Repairs</h3>
            <p>Restore and preserve your stained glass with expert craftsmanship.</p>
          </a>

          <a href="/workshops" className="p-6 rounded-xl hover:bg-[#EAE3D6] transition shadow-sm hover:shadow-md">
            <h3 className="text-2xl font-serif mb-4 hover:text-[#D4A017]">Workshops</h3>
            <p>Learn the craft and create your own stained glass piece.</p>
          </a>

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

          <p className="mt-4 italic text-sm text-gray-600">
            Crafted slowly. Designed intentionally. Made to last.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6 bg-[#EAE3D6] text-center">
        <h2 className="text-3xl font-serif mb-4">Crafted Pieces</h2>
        <p className="mb-10">Each piece carries its own story, shaped by hand and illuminated by light.</p>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <img src="/images/glass1.jpeg" className="h-60 w-full object-cover rounded-xl hover:scale-105 transition duration-300" />
          <img src="/images/glass2.jpg" className="h-60 w-full object-cover rounded-xl hover:scale-105 transition duration-300" />
          <img src="/images/glass3.jpg" className="h-60 w-full object-cover rounded-xl hover:scale-105 transition duration-300" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm bg-[#EAE3D6]">
        <p className="mb-2">luminousbynature.com.au@gmail.com</p>
        <p className="mb-4">0458 899 227</p>
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} Luminous By Nature</p>
      </footer>

    </main>
  );
}