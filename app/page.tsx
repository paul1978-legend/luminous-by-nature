import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Luminous By Nature | Stained Glass Sunshine Coast",
  description:
    "Handcrafted stained glass commissions, workshops and restorations across Sunshine Coast, Brisbane and South East Queensland.",
};

export default function Home() {
  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C] overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-[#111111]">

        <div className="absolute inset-0">

          <Image
            src="/images/hero2.png"
            alt="Luminous By Nature stained glass artwork"
            fill
            priority
            className="object-cover opacity-40"
          />

        </div>

        <div className="relative z-10 max-w-4xl fade-in">

          <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight tracking-wide">
            Light,
            <br />
            Crafted by Nature
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto mb-10">
            Handcrafted stained glass commissions,
            restorations and workshops inspired by light,
            symbolism and timeless craftsmanship.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <Link
              href="/commissions"
              className="btn-primary"
            >
              Commission a Piece
            </Link>

            <Link
              href="/workshops"
              className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
            >
              View Workshops
            </Link>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="py-24 px-6 bg-[#EFE7D8]">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-20">

            <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

            <h2 className="text-4xl font-serif mb-6">
              Crafted With Intention
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              From custom commissions to stained glass workshops and traditional restorations,
              each piece is designed to bring warmth, symbolism and atmosphere into your space.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-10">

            <Link
              href="/commissions"
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-500"
            >

              <h3 className="text-2xl font-serif mb-4">
                Commissions
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Bespoke stained glass artworks crafted for homes,
                sacred spaces and collectors across Sunshine Coast and Brisbane.
              </p>

            </Link>


            <Link
              href="/repairs"
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-500"
            >

              <h3 className="text-2xl font-serif mb-4">
                Repairs
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Traditional leadlight restoration and stained glass repairs
                handled with care and respect for original craftsmanship.
              </p>

            </Link>


            <Link
              href="/workshops"
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-500"
            >

              <h3 className="text-2xl font-serif mb-4">
                Workshops
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Hands-on stained glass workshops where creativity,
                craftsmanship and community come together.
              </p>

            </Link>

          </div>

        </div>

      </section>


      {/* FEATURED GALLERY */}
      <section className="py-24 px-6">

        <div className="text-center mb-16">

          <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

          <h2 className="text-4xl font-serif mb-6">
            Featured Works
          </h2>

          <p className="italic text-lg text-gray-700">
            Light transformed into story, colour and atmosphere.
          </p>

        </div>


        <div className="columns-1 md:columns-3 gap-6 max-w-6xl mx-auto space-y-6">

          <Link href="/portfolio/sunburst-panel">

            <div className="overflow-hidden rounded-2xl break-inside-avoid mb-6">

              <Image
                src="/images/glass1.jpeg"
                alt="Custom stained glass artwork"
                width={800}
                height={1000}
                className="glow w-full object-cover hover:scale-105 transition duration-500"
              />

            </div>

          </Link>


          <Link href="/portfolio/sacred-geometry">

            <div className="overflow-hidden rounded-2xl break-inside-avoid mb-6">

              <Image
                src="/images/glass2.jpg"
                alt="Sacred geometry stained glass artwork"
                width={800}
                height={1200}
                className="glow w-full object-cover hover:scale-105 transition duration-500"
              />

            </div>

          </Link>


          <Link href="/portfolio/leadlight-restoration">

            <div className="overflow-hidden rounded-2xl break-inside-avoid mb-6">

              <Image
                src="/images/glass3.jpg"
                alt="Traditional stained glass restoration"
                width={800}
                height={900}
                className="glow w-full object-cover hover:scale-105 transition duration-500"
              />

            </div>

          </Link>

        </div>

      </section>


      {/* NEWSLETTER */}
      <section className="py-24 px-6 bg-[#EFE7D8] text-center">

        <div className="max-w-3xl mx-auto">

          <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

          <h2 className="text-4xl font-serif mb-6">
            Join Our Studio Newsletter
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Be first to hear about workshops,
            new artworks, collector releases and studio inspirations.
          </p>

          <div
            className="ml-embedded"
            data-form="MqRJlj"
          ></div>

        </div>

      </section>


      {/* CTA */}
      <section className="py-24 px-6 text-center">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-5xl font-serif mb-8">
            Let’s Create Something Timeless
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you're seeking a custom stained glass commission,
            restoration work or a creative workshop experience,
            we'd love to hear from you.
          </p>

          <Link
            href="/contact"
            className="btn-primary"
          >
            Get In Touch
          </Link>

        </div>

      </section>

    </main>
  );
}