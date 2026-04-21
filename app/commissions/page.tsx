export default function Commissions() {
  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C] px-6 py-20">

      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-serif mb-6">Bespoke Stained Glass Commissions</h1>
        <p className="text-lg mb-10">
          Each piece is thoughtfully designed and handcrafted to bring warmth, story, and light into your space.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
        <img src="/images/glass1.jpeg" className="rounded-xl w-full h-80 object-cover" />
        <img src="/images/glass2.jpg" className="rounded-xl w-full h-80 object-cover" />
      </div>

      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-serif mb-4">How It Works</h2>
        <p className="mb-4">We collaborate with you to design a unique piece that reflects your vision.</p>
        <p className="mb-4">From concept sketches to final installation, each step is handled with care and craftsmanship.</p>
      </div>

      <div className="text-center">
        <a href="/contact" className="bg-[#D4A017] px-6 py-3 rounded-xl text-black">
          Enquire About a Commission
        </a>
      </div>

    </main>
  );
}