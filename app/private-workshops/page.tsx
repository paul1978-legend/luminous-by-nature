import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Private Stained Glass Workshops | Luminous By Nature",
  description:
    "Private stained glass workshops for birthdays, hens celebrations, small groups and corporate teams across Sunshine Coast and Brisbane. Maximum 8 participants.",
};

export default function PrivateWorkshops() {
  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C] px-6 py-20 text-center">

      <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

      <h1 className="text-4xl font-serif mb-6">
        Private Workshops
      </h1>

      <p className="mb-6 max-w-2xl mx-auto leading-relaxed text-lg">
        Looking for something different for your next celebration,
        gathering or team experience? Luminous By Nature offers intimate
        private stained glass workshops arranged just for your group.
      </p>

      <p className="mb-16 max-w-xl mx-auto leading-relaxed text-gray-700">
        Every private workshop is limited to a maximum of{" "}
        <span className="font-semibold">8 participants</span>, so everyone
        receives personal guidance and space to enjoy the creative process.
      </p>

      {/* PERFECT FOR */}
      <div className="max-w-4xl mx-auto mb-20">

        <h2 className="text-2xl font-serif mb-8">
          Perfect For
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="font-serif text-lg mb-1">Birthdays</p>
            <p className="text-sm text-gray-600">A creative day to remember, for a small group of friends or family.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="font-serif text-lg mb-1">Hens Celebrations</p>
            <p className="text-sm text-gray-600">Something genuinely different from the usual hens activities.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="font-serif text-lg mb-1">Friends' Gatherings</p>
            <p className="text-sm text-gray-600">A beautiful excuse to spend a few hours making something together.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="font-serif text-lg mb-1">Small Corporate Groups</p>
            <p className="text-sm text-gray-600">A creative team experience for up to 8 people — not a giant team-building event.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="font-serif text-lg mb-1">Retreats</p>
            <p className="text-sm text-gray-600">A hands-on creative activity woven into your retreat program.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="font-serif text-lg mb-1">Special Occasions</p>
            <p className="text-sm text-gray-600">Any occasion where you'd like to create something together and take it home.</p>
          </div>

        </div>

      </div>

      {/* HOW IT WORKS */}
      <div className="max-w-3xl mx-auto mb-20">

        <h2 className="text-2xl font-serif mb-10">
          How It Works
        </h2>

        <div className="grid sm:grid-cols-2 gap-8 text-left">

          <div>
            <p className="text-[#D4A017] font-serif text-2xl mb-2">1</p>
            <p className="text-gray-700">Tell us about your group and what you're celebrating.</p>
          </div>

          <div>
            <p className="text-[#D4A017] font-serif text-2xl mb-2">2</p>
            <p className="text-gray-700">Choose your workshop and preferred date.</p>
          </div>

          <div>
            <p className="text-[#D4A017] font-serif text-2xl mb-2">3</p>
            <p className="text-gray-700">We organise the details and confirm your booking.</p>
          </div>

          <div>
            <p className="text-[#D4A017] font-serif text-2xl mb-2">4</p>
            <p className="text-gray-700">You arrive, create, and everyone takes home their finished piece.</p>
          </div>

        </div>

      </div>

      {/* IMAGES */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">

        <Image src="/images/workshop1.jpg" alt="Private stained glass workshop group" width={600} height={400} className="glow rounded-xl h-64 w-full object-cover" />
        <Image src="/images/workshop2.jpg" alt="Hands-on stained glass workshop" width={600} height={400} className="glow rounded-xl h-64 w-full object-cover" />
        <Image src="/images/workshop3.jpg" alt="Stained glass workshop finished pieces" width={600} height={400} className="glow rounded-xl h-64 w-full object-cover" />

      </div>

      {/* CTA */}
      <div className="max-w-xl mx-auto">

        <Link href="/contact" className="btn-primary">
          Enquire About a Private Workshop
        </Link>

      </div>

    </main>
  );
}
