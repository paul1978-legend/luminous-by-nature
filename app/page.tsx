import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luminous Digital Studio",
  description: "Websites and apps for small businesses",
};

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 max-w-6xl mx-auto">

      {/* Hero */}
      <section className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-gradient-to-b from-white via-gray-50 to-white px-8 py-28 text-center mb-28 shadow-sm">

        <div className="absolute inset-0 opacity-30 blur-3xl bg-gradient-to-r from-orange-100 via-pink-100 to-yellow-100"></div>

        <div className="relative z-10">

          <p className="uppercase tracking-[0.35em] text-sm text-gray-500 mb-6">
            Websites • Apps • Creative Digital Experiences
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Luminous
            <br />
            Digital Studio
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Beautiful websites and modern digital experiences crafted for small businesses, creatives, and ambitious ideas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="/contact"
              className="px-8 py-4 rounded-2xl bg-black text-white hover:opacity-90 transition shadow-lg"
            >
              Start Your Project
            </a>

            <a
              href="#services"
              className="px-8 py-4 rounded-2xl border border-gray-300 hover:bg-gray-100 transition"
            >
              View Services
            </a>

          </div>

        </div>

      </section>

      {/* Services */}
      <section
        id="services"
        className="mb-28"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Services
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="p-8 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4">
              Website Builds
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Clean, modern websites designed to help your business stand out and convert visitors into customers.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4">
              Website Refreshes
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Transform outdated websites into polished, professional digital experiences.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4">
              App Prototypes
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Functional app concepts and MVP experiences designed to bring ideas to life quickly.
            </p>
          </div>

        </div>

      </section>

      {/* Offer */}
      <section className="mb-28 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Starter Website Package
        </h2>

        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          A clean, professional one-page website designed to get your business online quickly and confidently.
        </p>

        <div className="max-w-xl mx-auto rounded-3xl border border-gray-200 p-10 shadow-sm bg-white">

          <ul className="space-y-4 text-left text-gray-700 mb-10">

            <li>✓ Mobile-friendly design</li>
            <li>✓ Contact form</li>
            <li>✓ Modern layout</li>
            <li>✓ Launch support</li>

          </ul>

          <p className="text-4xl font-bold mb-6">
            $750
          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-2xl bg-black text-white hover:opacity-90 transition"
          >
            Enquire Now
          </a>

        </div>

      </section>

      {/* CTA */}
      <section className="text-center pb-20">

        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Something Great
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          Ready to bring your business online or elevate your current digital presence?
        </p>

        <a
          href="/contact"
          className="inline-block px-10 py-4 rounded-2xl bg-black text-white hover:opacity-90 transition shadow-lg"
        >
          Get In Touch
        </a>

      </section>

    </main>
  );
}