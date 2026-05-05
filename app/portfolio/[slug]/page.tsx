import Image from "next/image";

/* ✅ DEFINE TYPE (THIS FIXES YOUR ERROR) */
type Artwork = {
  title: string;
  image: string;
  description: string;
  details: string;
  story: string;
  status: "Available" | "Sold";
  price?: string;       // ✅ optional
  priceLink?: string;   // ✅ optional
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

  /* ✅ EXACT LOCATION FOR THIS LINE */
  if (!params?.slug) {
    return <div className="p-10 text-center">Invalid page</div>;
  }

  const artwork = artworks[params.slug];

  if (!artwork) {
    return <div className="p-10 text-center">Artwork not found</div>;
  }

  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C] px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* IMAGE */}
        <Image
          src={artwork.image}
          alt={artwork.title}
          width={1200}
          height={800}
          className="rounded-2xl mb-10 w-full object-cover glow"
        />

        {/* TITLE */}
        <h1 className="text-4xl font-serif mb-4">
          {artwork.title}
        </h1>

        {/* STATUS */}
        <div className="mb-4">
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              artwork.status === "Available"
                ? "bg-green-100 text-green-700"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {artwork.status}
          </span>
        </div>

        {/* PRICE */}
        {artwork.price && (
          <p className="text-xl font-semibold mb-6">
            {artwork.price}
          </p>
        )}

        {/* DESCRIPTION */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          {artwork.description}
        </p>

        {/* STORY */}
        <div className="mb-10">
          <h2 className="text-2xl font-serif mb-3">
            The Story
          </h2>
          <p className="italic text-gray-700 leading-relaxed">
            {artwork.story}
          </p>
        </div>

        {/* DETAILS */}
        <p className="text-sm text-gray-500 mb-10">
          {artwork.details}
        </p>

        {/* BUTTONS */}
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

      </div>

    </main>
  );
}