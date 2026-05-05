import Image from "next/image";

type Artwork = {
  title: string;
  image: string;
  description: string;
  details: string;
  story: string;
  status: "Available" | "Sold";
  price?: string;
  priceLink?: string;
};

const artworks: Record<string, Artwork> = {
  "sunburst-panel": {
    title: "Sunburst Panel",
    image: "/images/glass1.jpeg",
    description:
      "A radiant stained glass panel inspired by sunrise over the Sunshine Coast.",
    details: "Hand-cut glass, leadlight technique, 2025",
    story:
      "Inspired by early morning light spilling across the coast, this piece captures warmth, renewal and quiet energy.",
    status: "Available",
    price: "$480",
    priceLink: "https://buy.stripe.com/xxxxx",
  },

  "sacred-geometry": {
    title: "Sacred Geometry Panel",
    image: "/images/glass2.jpg",
    description:
      "A harmonious geometric design exploring balance, symmetry and light.",
    details: "Custom commission, 2024",
    story:
      "A study in balance and proportion, designed to bring stillness and clarity into the space.",
    status: "Sold",
  },
};

export default function ArtworkPage({
  params,
}: {
  params: { slug: string };
}) {
  if (!params?.slug) {
    return <div className="p-10 text-center">Invalid page</div>;
  }

  const artwork = artworks[params.slug];

  if (!artwork) {
    return <div className="p-10 text-center">Artwork not found</div>;
  }

  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C]">

      {/* HERO IMAGE */}
      <div className="w-full h-[70vh] relative overflow-hidden">
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          priority
          className="object-cover scale-100 hover:scale-105 transition duration-[4000ms] ease-out"
        />
      </div>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          {artwork.title}
        </h1>

        {/* STATUS + PRICE */}
        <div className="flex gap-4 items-center mb-6 flex-wrap">
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              artwork.status === "Available"
                ? "bg-green-100 text-green-700"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {artwork.status}
          </span>

          {artwork.price && (
            <span className="text-xl font-semibold">
              {artwork.price}
            </span>
          )}
        </div>

        {/* DESCRIPTION */}
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          {artwork.description}
        </p>

        {/* STORY */}
        <div className="mb-12">
          <div className="w-12 h-[2px] bg-[#D4A017] mb-6"></div>

          <h2 className="text-2xl font-serif mb-4">
            The Story
          </h2>

          <p className="italic text-gray-700 leading-relaxed">
            {artwork.story}
          </p>
        </div>

        {/* DETAILS */}
        <p className="text-sm text-gray-500 mb-12">
          {artwork.details}
        </p>

        {/* ACTION */}
        <div className="flex gap-4 flex-wrap">

          <a href="/contact" className="btn-primary">
            Enquire About This Piece
          </a>

          {artwork.status === "Available" && artwork.priceLink && (
            <a
              href={artwork.priceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Purchase This Piece
            </a>
          )}

        </div>

      </section>

    </main>
  );
}