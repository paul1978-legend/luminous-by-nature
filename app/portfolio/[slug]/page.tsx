import Image from "next/image";

const artworks = {
  "sunburst-panel": {
    title: "Sunburst Panel",
    image: "/images/glass1.jpeg",
    description:
      "A radiant stained glass panel inspired by sunrise over the Sunshine Coast.",
    details: "Hand-cut glass, leadlight technique, 2025",
    status: "Available",
  },

  "sacred-geometry": {
    title: "Sacred Geometry Panel",
    image: "/images/glass2.jpg",
    description:
      "A harmonious geometric design exploring balance, symmetry and light.",
    details: "Custom commission, 2024",
    status: "Sold",
  },
};

export default function ArtworkPage({ params }: { params: { slug: string } }) {
  const artwork = artworks[params.slug as keyof typeof artworks];

  if (!artwork) {
    return <div className="p-10 text-center">Artwork not found</div>;
  }

  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C] px-6 py-20">

      <div className="max-w-5xl mx-auto">

        <Image
          src={artwork.image}
          alt={artwork.title}
          width={1200}
          height={800}
          className="rounded-2xl mb-10 w-full object-cover"
        />

        <h1 className="text-4xl font-serif mb-4">
          {artwork.title}
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed">
          {artwork.description}
        </p>

        <p className="text-sm text-gray-500 mb-6">
          {artwork.details}
        </p>

        <p className="mb-10 font-semibold">
          Status: {artwork.status}
        </p>

        <a href="/contact" className="btn-primary">
          Enquire About This Piece
        </a>

      </div>

    </main>
  );
}