import LightboxGallery from "@/app/components/Lightbox";

export const metadata = {
  title: "Stained Glass Portfolio Sunshine Coast",
  description:
    "Explore handcrafted stained glass commissions, repairs and artworks.",
};

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

      <LightboxGallery />

    </main>
  );
}