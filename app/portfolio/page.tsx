import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Gallery | Luminous By Nature Stained Glass Workshops",
  description:
    "A gallery of copper foil stained glass pieces created in Luminous By Nature workshops.",
};

const artworks = [
  {
    src: "/images/glass1.jpeg",
    title: "Sunburst Panel",
  },
  {
    src: "/images/glass2.jpg",
    title: "Sacred Geometry",
  },
];

export default function Portfolio() {
  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C] min-h-screen">

      {/* HERO */}
      <section className="text-center px-6 py-20">

        <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

        <h1 className="text-4xl md:text-5xl font-serif tracking-wide mb-6">
          Gallery
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
          A glimpse of the copper foil stained glass pieces created
          in our workshops — light, colour and craftsmanship.
        </p>

      </section>

      {/* GALLERY */}
      <section className="px-6 pb-24">

        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 max-w-7xl mx-auto space-y-6">

          {artworks.map((art) => (
            <div
              key={art.title}
              className="artwork-card break-inside-avoid mb-6"
            >

              <div className="overflow-hidden rounded-2xl shadow-md">

                <Image
                  src={art.src}
                  alt={art.title}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="glow float-light w-full object-cover"
                />

              </div>

              <div className="pt-4">

                <p className="text-lg font-serif">
                  {art.title}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* WORKSHOPS CTA */}
      <section className="bg-[#EFE7D8] py-24 px-6 text-center">

        <div className="max-w-3xl mx-auto">

          <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Want To Create Something Like This?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-10">
            Join one of our hands-on stained glass workshops and take
            home a piece you made yourself.
          </p>

          <Link
            href="/workshops"
            className="btn-primary"
          >
            View Workshops
          </Link>

        </div>

      </section>

    </main>
  );
}
