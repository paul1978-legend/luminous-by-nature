import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Stained Glass Portfolio Sunshine Coast",
  description:
    "Explore handcrafted stained glass commissions, repairs and artworks.",
};

const artworks = [
  {
    slug: "sunburst-panel",
    src: "/images/glass1.jpeg",
    title: "Sunburst Panel",
  },
  {
    slug: "sacred-geometry",
    src: "/images/glass2.jpg",
    title: "Sacred Geometry",
  },
  {
    slug: "leadlight-restoration",
    src: "/images/glass3.jpg",
    title: "Leadlight Restoration",
  },
];

export default function Portfolio() {
  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C] min-h-screen">

      {/* HERO */}
      <section className="text-center px-6 py-20">

        <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

        <h1 className="text-4xl md:text-5xl font-serif tracking-wide mb-6">
          Portfolio
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
          A collection of stained glass works crafted with intention,
          light, story and timeless craftsmanship.
        </p>

      </section>

      {/* PREMIUM MASONRY GALLERY */}
      <section className="px-6 pb-24">

        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 max-w-7xl mx-auto space-y-6">

          {artworks.map((art) => (
            <Link
              key={art.slug}
              href={`/portfolio/${art.slug}`}
              className="block"
            >

              <div className="artwork-card break-inside-avoid mb-6 group cursor-pointer">

                <div className="overflow-hidden rounded-2xl shadow-md">

                  <Image
                    src={art.src}
                    alt={art.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="
                      glow
                      float-light
                      w-full
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-105
                    "
                  />

                </div>

                <div className="pt-4">

                  <p className="text-lg font-serif">
                    {art.title}
                  </p>

                  <p className="text-sm italic text-gray-600 mt-1">
                    View Artwork →
                  </p>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </section>

      {/* COLLECTOR CTA */}
      <section className="bg-[#EFE7D8] py-24 px-6 text-center">

        <div className="max-w-3xl mx-auto">

          <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Looking For A Custom Piece?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-10">
            Commission a unique stained glass artwork designed
            specifically for your home, studio, business or
            sacred space.
          </p>

          <Link
            href="/commissions"
            className="btn-primary"
          >
            Start A Commission
          </Link>

        </div>

      </section>

    </main>
  );
}