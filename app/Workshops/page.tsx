"use client";

export default function Workshops() {
  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C] px-6 py-20 text-center">
      <h1 className="text-4xl font-serif mb-6">Workshops</h1>

      <p className="mb-10 max-w-xl mx-auto">
        Join us for a hands-on stained glass experience. Browse upcoming workshops and book directly below.
      </p>

      <div className="max-w-5xl mx-auto">
        <iframe
          src="https://classbento.com.au/9qcw2228p4au-date-widget?wtn=9qcw2228p4au&is_preview=1"
          style={{ width: "100%", height: "1400px", border: "none" }}
        />
      </div>
    </main>
  );
}