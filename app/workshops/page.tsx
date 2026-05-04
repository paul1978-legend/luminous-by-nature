import Image from "next/image";

export const metadata = {
  title: "Stained Glass Workshops Sunshine Coast",
  description:
    "Hands-on stained glass workshops across Sunshine Coast and Brisbane.",
};

export default function Workshops() {
  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C] px-6 py-20 text-center">

      <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

      <h1 className="text-4xl font-serif mb-6">Workshops</h1>

      <p className="mb-12 max-w-xl mx-auto leading-relaxed">
        Join us for a hands-on stained glass experience.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">

        <Image src="/images/workshop1.jpg" alt="" width={600} height={400} className="glow rounded-xl h-64 w-full object-cover"/>
        <Image src="/images/workshop2.jpg" alt="" width={600} height={400} className="glow rounded-xl h-64 w-full object-cover"/>
        <Image src="/images/workshop3.jpg" alt="" width={600} height={400} className="glow rounded-xl h-64 w-full object-cover"/>

      </div>

      <div className="max-w-5xl mx-auto">
        <iframe
          src="https://classbento.com.au/9qcw2228p4au-date-widget?wtn=9qcw2228p4au&is_preview=1"
          style={{ width: "100%", height: "1400px", border: "none" }}
        />
      </div>

    </main>
  );
}