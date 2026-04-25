"use client";

export default function Commissions() {
  return (
    <>
      <main className="bg-[#F5F1E8] text-[#1C1C1C] px-6 py-20">

        {/* HERO */}
        <section className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Commission a Custom Piece
          </h1>

          <p className="text-lg text-gray-700">
            A stained glass piece is more than decoration — it’s a story told through light.
            Let’s create something timeless, made just for your space.
          </p>
        </section>

        {/* GALLERY */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">

          <img src="/images/glass1.jpeg"
            className="glow rounded-xl h-72 w-full object-cover transition duration-500 hover:scale-105 hover:shadow-xl" />

          <img src="/images/glass2.jpg"
            className="glow rounded-xl h-72 w-full object-cover transition duration-500 hover:scale-105 hover:shadow-xl" />

          <img src="/images/glass3.jpg"
            className="glow rounded-xl h-72 w-full object-cover transition duration-500 hover:scale-105 hover:shadow-xl" />

        </div>

        {/* PROCESS */}
        <section className="max-w-4xl mx-auto text-center mb-20">

          <h2 className="text-3xl font-serif mb-6">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8 text-sm">

            <div>
              <h3 className="font-serif text-lg mb-2">1. Enquire</h3>
              <p>Tell us about your space, your idea, and your vision.</p>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-2">2. Design</h3>
              <p>We create a concept tailored to your style and needs.</p>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-2">3. Create</h3>
              <p>Your piece is handcrafted with care and precision.</p>
            </div>

          </div>

        </section>

        {/* TESTIMONIALS */}
        <section className="max-w-4xl mx-auto text-center mb-20">

          <h2 className="text-3xl font-serif mb-6">What People Say</h2>

          <div className="space-y-6 text-gray-700">

            <p className="italic">"Absolutely stunning craftsmanship. The piece transformed our space."</p>
            <p className="italic">"An incredible experience from design to final installation."</p>
            <p className="italic">"Highly recommend — true artistry and attention to detail."</p>

          </div>

        </section>

        {/* FORM */}
        <section className="max-w-xl mx-auto text-center">

          <h2 className="text-3xl font-serif mb-6">Start Your Commission</h2>

          <form
            action="https://formspree.io/f/xlgaalob"
            method="POST"
            className="flex flex-col gap-4"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 rounded border"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 rounded border"
              required
            />

            <select name="enquiryType" className="p-3 rounded border">
              <option>Commission</option>
              <option>Repair</option>
              <option>General Enquiry</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your idea..."
              className="p-3 rounded border"
              rows={5}
              required
            />

            <button className="bg-[#D4A017] text-black py-3 rounded-xl">
              Send Enquiry
            </button>

          </form>

        </section>

      </main>

      {/* STICKY CTA */}
      <a
        href="/commissions"
        className="fixed bottom-6 right-6 bg-[#D4A017] text-black px-5 py-3 rounded-full shadow-lg"
      >
        Enquire
      </a>
    </>
  );
}