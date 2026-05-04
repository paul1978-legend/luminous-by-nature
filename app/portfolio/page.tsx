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
    <main className="bg-[#F5F1E8] text-[#1C1C1C] px-6 py-20 text-center">

      <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

      <h1 className="text-4xl font-serif mb-6">
        Portfolio
      </h1>

      <p className="max-w-xl mx-auto mb-16 text-gray-700 leading-relaxed">
        A collection of stained glass works, each crafted with intention,
        light and story.
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {artworks.map((art) => (
          <Link key={art.slug} href={`/portfolio/${art.slug}`}>
            
            <div className="cursor-pointer">

              <Image
                src={art.src}
                alt={art.title}
                width={800}
                height={600}
                className="glow rounded-2xl h-80 w-full object-cover transition duration-500 hover:scale-105"
              />

              <p className="mt-3 text-sm italic text-gray-600">
                {art.title}
              </p>

            </div>

          </Link>
        ))}

      </div>

    </main>
  );
}