import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Luminous By Nature | Stained Glass Workshops Sunshine Coast & Brisbane",
  description:
    "Hands-on stained glass workshops across Sunshine Coast, Brisbane and South East Queensland. Small groups, maximum 8 participants, create something beautiful with your own hands.",
};

export default function Home() {
  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C] overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-[#111111]">

        <div className="absolute inset-0">

          <Image
            src="/images/hero2.png"
            alt="Luminous By Nature stained glass workshop"
            fill
            priority
            className="object-cover opacity-40"
          />

        </div>

        <div className="relative z-10 max-w-4xl fade-in">

          <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight tracking-wide">
            Stained Glass
            <br />
            Workshops
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto mb-10">
            Create something beautiful with your own hands.
            Small, hands-on workshops across the Sunshine Coast
            and Brisbane — maximum 8 participants per session.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <Link
              href="/workshops"
              className="btn-primary"
            >
              View Workshops
            </Link>

            <Link
              href="/private-workshops"
              className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
            >
              Private Workshops
            </Link>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="py-24 px-6 bg-[#EFE7D8]">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-20">

            <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

            <h2 className="text-4xl font-serif mb-6">
              Choose Your Experience
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Whether you're joining a scheduled class or bringing your own group,
              every workshop is small, hands-on and guided every step of the way.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-10">

            <Link
              href="/workshops"
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-500"
            >

              <h3 className="text-2xl font-serif mb-4">
                Public Workshops
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Book an upcoming scheduled workshop and create your own
                piece alongside a small group of fellow beginners.
              </p>

            </Link>


            <Link
              href="/private-workshops"
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-500"
            >

              <h3 className="text-2xl font-serif mb-4">
                Private Workshops
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Birthdays, hens celebrations, friends and small groups —
                a workshop arranged just for you, up to 8 participants.
              </p>

            </Link>


            <Link
              href="/about"
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-500"
            >

              <h3 className="text-2xl font-serif mb-4">
                Meet Your Hosts
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Get to know Paul and Sheree, and why they love
                introducing people to the craft of stained glass.
              </p>

            </Link>

          </div>

        </div>

      </section>


      {/* FEATURED GALLERY */}
      <section className="py-24 px-6">

        <div className="text-center mb-16">

          <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

          <h2 className="text-4xl font-serif mb-6">
            What You Could Create
          </h2>

          <p className="italic text-lg text-gray-700">
            A glimpse of the kind of pieces our workshop participants take home.
          </p>

        </div>


        <div className="columns-1 md:columns-3 gap-6 max-w-6xl mx-auto space-y-6 px-2">

          <Link href="/portfolio">

            <div className="overflow-hidden rounded-2xl break-inside-avoid mb-6">

              <Image
                src="/images/glass1.jpeg"
                alt="Copper foil stained glass piece made in a workshop"
                width={800}
                height={1000}
                className="glow w-full object-cover hover:scale-105 transition duration-500"
              />

            </div>

          </Link>


          <Link href="/portfolio">

            <div className="overflow-hidden rounded-2xl break-inside-avoid mb-6">

              <Image
                src="/images/glass2.jpg"
                alt="Sacred geometry stained glass piece made in a workshop"
                width={800}
                height={1200}
                className="glow w-full object-cover hover:scale-105 transition duration-500"
              />

            </div>

          </Link>


          <Link href="/workshops">

            <div className="overflow-hidden rounded-2xl break-inside-avoid mb-6">

              <Image
                src="/images/workshop1.jpg"
                alt="Stained glass workshop in progress"
                width={800}
                height={900}
                className="glow w-full object-cover hover:scale-105 transition duration-500"
              />

            </div>

          </Link>

        </div>

      </section>


      {/* NEWSLETTER */}
      <section className="py-24 px-6 bg-[#EFE7D8] text-center">

        <div className="max-w-3xl mx-auto">

          <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

          <h2 className="text-4xl font-serif mb-6">
            Join Our Studio Newsletter
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Be first to hear about new workshop dates,
            private group availability and studio news.
          </p>

          <div
            className="ml-embedded"
            data-form="MqRJlj"
          ></div>

        </div>

      </section>


      {/* CTA */}
      <section className="py-24 px-6 text-center">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-5xl font-serif mb-8">
            Find Your Next Creative Experience
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you're booking a public class or planning a private
            workshop for your group, we'd love to hear from you.
          </p>

          <Link
            href="/contact"
            className="btn-primary"
          >
            Get In Touch
          </Link>

        </div>

      </section>


{/* FOOTER */}
<footer className="py-10 px-6 bg-[#EFE7D8] text-center">

  <p className="text-sm text-gray-600 mb-6">
    © {new Date().getFullYear()} Luminous By Nature
  </p>

  <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-700">

    <Link href="/privacy-policy">
      Privacy Policy
    </Link>

    <Link href="/terms-and-conditions">
      Terms & Conditions
    </Link>

    <Link href="/refund-policy">
      Refund Policy
    </Link>

  </div>

</footer>

    </main>
  );
}